
/**
 * Editorial Button Component
 *
 * @param {Object} props
 * @param {'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'} [props.variant='primary']
 * @param {'sm' | 'md' | 'lg'} [props.size='md']
 * @param {boolean} [props.isLoading=false]
 * @param {React.ReactNode} [props.icon] Left icon
 * @param {React.ReactNode} [props.iconRight] Right icon
 * @param {boolean} [props.disabled=false]
 * @param {'button' | 'submit' | 'reset'} [props.type='button']
 * @param {string} [props.className='']
 * @param {React.ReactNode} props.children
 */
export function Button({
  variant = "primary",
  size = "md",
  isLoading = false,
  icon,
  iconRight,
  disabled = false,
  type = "button",
  className = "",
  children,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-150 select-none cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2";

  const sizeStyles = {
    sm: "text-xs px-3 py-1.5 rounded-[var(--radius-sm,6px)] gap-1.5",
    md: "text-sm px-4 py-2.5 rounded-[var(--radius-md,10px)] gap-2",
    lg: "text-base px-6 py-3 rounded-[var(--radius-md,10px)] gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-hover)] text-white shadow-sm hover:shadow-[0_4px_16px_var(--color-brand-muted)] active:translate-y-px",
    secondary:
      "bg-[var(--color-surface-raised)] hover:bg-[var(--color-surface-card)] text-[var(--color-text-primary)] border border-[var(--color-border-subtle)] hover:border-[var(--color-border-medium)] active:translate-y-px",
    outline:
      "bg-transparent hover:bg-[var(--color-brand-muted)] text-[var(--color-text-primary)] border border-[var(--color-border-medium)] hover:border-[var(--color-brand-primary)] active:translate-y-px",
    ghost:
      "bg-transparent hover:bg-[var(--color-surface-raised)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]",
    danger:
      "bg-[var(--color-error)] hover:opacity-90 text-white active:translate-y-px",
  };

  const selectedSize = sizeStyles[size] || sizeStyles.md;
  const selectedVariant = variantStyles[variant] || variantStyles.primary;

  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      className={`${baseStyles} ${selectedSize} ${selectedVariant} ${className}`}
      {...props}
    >
      {isLoading ? (
        <span
          className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"
          aria-hidden="true"
        />
      ) : (
        icon && <span className="inline-flex shrink-0" aria-hidden="true">{icon}</span>
      )}
      <span>{children}</span>
      {!isLoading && iconRight && (
        <span className="inline-flex shrink-0" aria-hidden="true">{iconRight}</span>
      )}
    </button>
  );
}

export default Button;
