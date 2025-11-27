import React from "react";

type CardProps = {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  period?: React.ReactNode;
  tags?: string[];
  actions?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
};

export default function Card({
  title,
  subtitle,
  period,
  tags,
  actions,
  className,
  children,
}: CardProps) {
  const wrapper =
    className ?? "p-4 bg-white/3 rounded-lg border border-white/6";

  return (
    <div className={wrapper}>
      {(title || subtitle || period) && (
        <div className="flex items-center justify-between">
          <div>
            {title && (
              <div className="text-lg font-medium text-white">{title}</div>
            )}
            {subtitle && (
              <div className="text-sm text-slate-200">{subtitle}</div>
            )}
          </div>
          {period && <div className="text-sm text-slate-300">{period}</div>}
        </div>
      )}

      {children && (
        <div className="mt-3 text-slate-200 text-sm">{children}</div>
      )}

      {Array.isArray(tags) && tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 bg-white/6 rounded-full text-slate-100 truncate">
              {t}
            </span>
          ))}
        </div>
      )}

      {actions && <div className="mt-4 flex gap-3">{actions}</div>}
    </div>
  );
}
