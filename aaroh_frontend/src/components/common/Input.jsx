import { useId } from "react";

/**
 * Editorial Input Component
 *
 * @param {Object} props
 * @param {string} [props.label]
 * @param {string} [props.id]
 * @param {string} [props.name]
 * @param {string} [props.type='text']
 * @param {string} [props.error]
 * @param {string} [props.helperText]
 * @param {React.ReactNode} [props.icon] Left icon element
 * @param {boolean} [props.required=false]
 * @param {boolean} [props.disabled=false]
 * @param {string} [props.className='']
 */
export function Input({
  label,
  id,
  name,
  type = "text",
  error,
  helperText,
  icon,
  required = false,
  disabled = false,
  className = "",
  ...props
}) {
  const generatedId = useId();
  const inputId = id || generatedId;
  const helperId = `${inputId}-helper`;
  const errorId = `${inputId}-error`;

  const describedBy = error
    ? errorId
    : helperText
    ? helperId
    : undefined;

  return (
    <div className={`flex flex-col gap-1.5 w-full ${className}`}>
      {label && (
        <label
          htmlFor={inputId}
          className="text-xs font-medium tracking-wide uppercase text-[var(--color-text-secondary)] select-none flex items-center justify-between"
        >
          <span>
            {label}
            {required && <span className="text-[var(--color-brand-primary)] ml-1" aria-hidden="true">*</span>}
          </span>
        </label>
      )}

      <div className="relative flex items-center">
        {icon && (
          <span
            className="absolute left-3.5 text-[var(--color-text-muted)] pointer-events-none inline-flex shrink-0"
            aria-hidden="true"
          >
            {icon}
          </span>
        )}

        <input
          id={inputId}
          name={name}
          type={type}
          disabled={disabled}
          required={required}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          className={`w-full text-sm bg-[var(--color-surface-card)] text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] border rounded-[var(--radius-sm,6px)] py-2.5 transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none ${
            icon ? "pl-10 pr-3.5" : "px-3.5"
          } ${
            error
              ? "border-[var(--color-error)] focus:border-[var(--color-error)] focus:ring-1 focus:ring-[var(--color-error)]"
              : "border-[var(--color-border-subtle)] hover:border-[var(--color-border-medium)] focus:border-[var(--color-border-focus)] focus:ring-1 focus:ring-[var(--color-border-focus)]"
          }`}
          {...props}
        />
      </div>

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

export default Input;
