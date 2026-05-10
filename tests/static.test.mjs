import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const read = (file) => readFileSync(join(root, file), 'utf8');

function extractArrayBlock(source, propertyName) {
  const startToken = `${propertyName}: [`;
  const start = source.indexOf(startToken);
  assert.notEqual(start, -1, `Missing ${propertyName} array`);

  let depth = 0;
  for (let i = start + propertyName.length + 2; i < source.length; i += 1) {
    const char = source[i];
    if (char === '[') depth += 1;
    if (char === ']') {
      depth -= 1;
      if (depth === 0) return source.slice(start, i + 1);
    }
  }
  throw new Error(`Could not parse ${propertyName} array`);
}

describe('Railway deployment contract', () => {
  it('uses a Railway-safe start command and health check', () => {
    const railway = JSON.parse(read('railway.json'));
    const pkg = JSON.parse(read('package.json'));

    assert.equal(railway.build.builder, 'NIXPACKS');
    assert.equal(railway.deploy.healthCheckPath, '/health');
    assert.equal(railway.deploy.healthCheckTimeout, 300);
    assert.match(pkg.scripts.start, /next start/);
    assert.match(pkg.scripts.start, /0\.0\.0\.0/);
    assert.match(pkg.scripts.start, /PORT/);
  });

  it('keeps global CSS in the App Router root layout', () => {
    assert.match(read('src/app/layout.tsx'), /import '\.\/globals\.css';/);
    assert.doesNotMatch(read('src/app/page.tsx'), /globals\.css/);
  });
});

describe('Atlas data integrity', () => {
  const dataSource = read('src/data/akp-data.ts');

  it('has unique page and project IDs', () => {
    const pagesBlock = extractArrayBlock(dataSource, 'pages');
    const projectsBlock = extractArrayBlock(dataSource, 'projects');
    const pageIds = [...pagesBlock.matchAll(/id: "([^"]+)"/g)].map((match) => match[1]);
    const projectIds = [...projectsBlock.matchAll(/id: "([^"]+)"/g)].map((match) => match[1]);

    assert.equal(pageIds.length, 15);
    assert.equal(new Set(pageIds).size, pageIds.length);
    assert.equal(new Set(projectIds).size, projectIds.length);
  });

  it('only references public assets that exist', () => {
    const imagePaths = [...dataSource.matchAll(/img: "(\/assets\/[^"]+)"/g)].map((match) => match[1]);
    const componentImages = [...read('src/components/pages/CoverPage.tsx').matchAll(/src="(\/assets\/[^"]+)"/g)].map((match) => match[1]);
    const bueroImages = [...read('src/components/pages/BueroPage.tsx').matchAll(/src="(\/assets\/[^"]+)"/g)].map((match) => match[1]);

    for (const assetPath of [...imagePaths, ...componentImages, ...bueroImages]) {
      const relativeAssetPath = assetPath.replace(/^\/+/, '');
      assert.equal(existsSync(join(root, 'public', relativeAssetPath)), true, `Missing ${assetPath}`);
    }
  });
});

describe('Frontend navigation coverage', () => {
  it('renders every configured atlas page and guards unknown navigation IDs', () => {
    const stage = read('src/components/MagazineStage.tsx');

    assert.match(stage, /AKP_DATA\.pages\.map/);
    assert.match(stage, /if \(!pageMetaById\.has\(id\)\) return;/);
    assert.match(stage, /onWheel=\{handleWheel\}/);
    assert.match(stage, /addEventListener\('keydown'/);
  });

  it('keeps mobile pages scrollable rather than clipping content', () => {
    const css = read('src/app/globals.css');

    assert.match(css, /@media \(max-width: 720px\)/);
    assert.match(css, /html, body \{ overflow: auto; \}/);
    assert.match(css, /\.page \{ overflow-y: auto; \}/);
  });
});
