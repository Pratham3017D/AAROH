import { useId } from "react";
import { ChevronDown } from "lucide-react";

/**
 * Editorial Select Component
 *
 * @param {Object} props
 * @param {string} [props.label]
 * @param {string} [props.id]
 * @param {string} [props.name]
 * @param {Array<string | { label: string, value: string }>} [props.options=[]]
 * @param {string} [props.value]
 * @param {function} [props.onChange]
 * @param {string} [props.placeholder]
 * @param {string} [props.error]
 * @param {string} [props.helperText]
 * @param {boolean} [props.required=false]
 * @param {boolean} [props.disabled=false]
 * @param {string} [props.className='']
 */
export function Select({
  label,
  id,
  name,
  options = [],
  value,
  onChange,
  placeholder = "Select an option",
  error,
  helperText,
  required = false,
  disabled = false,
  className = "",
  ...props
}) {
  const generatedId = useId();
  const selectId = id || generatedId;
  const helperId = `${selectId}-helper`;
  const errorId = `${selectId}-error`;

  const describedBy = error
    ? errorId
    : helperText
    ? helperId
    : undefined;

  return (
    <div className={`flex flex-col gap-1.5 w-full ${className}`}>
      {label && (
        <label
          htmlFor={selectId}
          className="text-xs font-medium tracking-wide uppercase text-[var(--color-text-secondary)] select-none flex items-center justify-between"
        >
          <span>
            {label}
            {required && <span className="text-[var(--color-brand-primary)] ml-1" aria-hidden="true">*</span>}
          </span>
        </label>
      )}

      <div className="relative flex items-center">
        <select
          id={selectId}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          className={`w-full appearance-none text-sm bg-[var(--color-surface-card)] text-[var(--color-text-primary)] border rounded-[var(--radius-sm,6px)] py-2.5 pl-3.5 pr-10 transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none cursor-pointer ${
            error
              ? "border-[var(--color-error)] focus:border-[var(--color-error)] focus:ring-1 focus:ring-[var(--color-error)]"
              : "border-[var(--color-border-subtle)] hover:border-[var(--color-border-medium)] focus:border-[var(--color-border-focus)] focus:ring-1 focus:ring-[var(--color-border-focus)]"
          }`}
          {...props}
        >
          {placeholder && (
            <option value="" disabled className="text-[var(--color-text-muted)] bg-[var(--color-bg-base)]">
              {placeholder}
            </option>
          )}
          {options.map((opt) => {
            const isObject = typeof opt === "object" && opt !== null;
            const optValue = isObject ? opt.value : opt;
            const optLabel = isObject ? opt.label : opt;

            return (
              <option
                key={optValue}
                value={optValue}
                className="bg-[var(--color-surface-card)] text-[var(--color-text-primary)]"
              >
                {optLabel}
              </option>
            );
          })}
        </select>

        <span
          className="absolute right-3.5 pointer-events-none text-[var(--color-text-muted)] inline-flex items-center"
          aria-hidden="true"
        >
          <ChevronDown size={16} />
        </span>
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

export default Select;
