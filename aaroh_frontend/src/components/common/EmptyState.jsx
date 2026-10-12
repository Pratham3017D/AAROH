import { FolderOpen } from "lucide-react";

/**
 * Editorial EmptyState Component
 *
 * @param {Object} props
 * @param {React.ReactNode} [props.icon]
 * @param {string} props.title
 * @param {string} [props.description]
 * @param {React.ReactNode} [props.action]
 * @param {string} [props.className='']
 */
export function EmptyState({
  icon,
  title,
  description,
  action,
  className = "",
  ...props
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center p-10 border border-dashed border-[var(--color-border-subtle)] rounded-[var(--radius-md,10px)] bg-[var(--color-bg-subtle)] ${className}`}
      {...props}
    >
      <div
        className="w-12 h-12 rounded-[var(--radius-sm,6px)] bg-[var(--color-surface-raised)] border border-[var(--color-border-subtle)] flex items-center justify-center text-[var(--color-text-muted)] mb-4"
        aria-hidden="true"
      >
        {icon || <FolderOpen size={24} />}
      </div>

      <h3 className="text-base font-semibold text-[var(--color-text-primary)] mb-1.5 font-display">
        {title}
      </h3>

      {description && (
        <p className="text-sm text-[var(--color-text-muted)] max-w-sm mb-6 leading-relaxed">
          {description}
        </p>
      )}

      {action && <div className="mt-2">{action}</div>}
    </div>
  );
}

export default EmptyState;
