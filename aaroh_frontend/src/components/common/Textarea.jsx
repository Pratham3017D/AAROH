import { useId } from "react";

/**
 * Editorial Textarea Component
 *
 * @param {Object} props
 * @param {string} [props.label]
 * @param {string} [props.id]
 * @param {string} [props.name]
 * @param {number} [props.rows=4]
 * @param {string} [props.error]
 * @param {string} [props.helperText]
 * @param {boolean} [props.required=false]
 * @param {boolean} [props.disabled=false]
 * @param {string} [props.className='']
 */
export function Textarea({
  label,
  id,
  name,
  rows = 4,
  error,
  helperText,
  required = false,
  disabled = false,
  className = "",
  ...props
}) {
  const generatedId = useId();
  const textareaId = id || generatedId;
  const helperId = `${textareaId}-helper`;
  const errorId = `${textareaId}-error`;

  const describedBy = error
    ? errorId
    : helperText
    ? helperId
    : undefined;

  return (
    <div className={`flex flex-col gap-1.5 w-full ${className}`}>
      {label && (
        <label
          htmlFor={textareaId}
          className="text-xs font-medium tracking-wide uppercase text-[var(--color-text-secondary)] select-none flex items-center justify-between"
        >
          <span>
            {label}
            {required && <span className="text-[var(--color-brand-primary)] ml-1" aria-hidden="true">*</span>}
          </span>
        </label>
      )}

      <textarea
        id={textareaId}
        name={name}
        rows={rows}
        disabled={disabled}
        required={required}
        aria-invalid={!!error}
        aria-describedby={describedBy}
        className={`w-full text-sm bg-[var(--color-surface-card)] text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] border rounded-[var(--radius-sm,6px)] p-3.5 transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none resize-y ${
          error
            ? "border-[var(--color-error)] focus:border-[var(--color-error)] focus:ring-1 focus:ring-[var(--color-error)]"
            : "border-[var(--color-border-subtle)] hover:border-[var(--color-border-medium)] focus:border-[var(--color-border-focus)] focus:ring-1 focus:ring-[var(--color-border-focus)]"
        }`}
        {...props}
      />

      {error ? (
        <p id={errorId} role="alert" className="text-xs text-[var(--color-error)]">
          {error}
        </p>
      ) : helperText ? (
        <p id={helperId} className="text-xs text-[var(--color-text-muted)]">
          {helperText}
        </p>
      ) : null}
    </div>
  );
}

export default Textarea;
