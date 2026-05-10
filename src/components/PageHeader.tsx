import React from 'react';

interface PageHeaderProps {
  num: string;
  title: string;
  subtitle: string;
  meta: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ num, title, subtitle, meta }) => {
  return (
    <div className="page-header meta-card">
      <div className="h-left">
        <div className="h-num">{num}</div>
        <div>
          <div className="h-title">{title}</div>
          <div className="eyebrow" style={{ marginTop: 6 }}>{subtitle}</div>
        </div>
      </div>
      <div className="h-meta">{meta}</div>
    </div>
  );
};
