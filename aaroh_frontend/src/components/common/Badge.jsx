
/**
 * Editorial Badge / Tag Component
 *
 * @param {Object} props
 * @param {'default' | 'primary' | 'accent' | 'success' | 'warning' | 'error' | 'outline'} [props.variant='default']
 * @param {'sm' | 'md'} [props.size='sm']
 * @param {React.ReactNode} [props.icon]
 * @param {string} [props.className='']
 * @param {React.ReactNode} props.children
 */
export function Badge({
  variant = "default",
  size = "sm",
  icon,
  className = "",
  children,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center font-medium uppercase tracking-wider select-none rounded-[var(--radius-xs,4px)] border";

  const sizeStyles = {
    sm: "text-[10px] px-2 py-0.5 gap-1",
    md: "text-xs px-2.5 py-1 gap-1.5",
  };

  const variantStyles = {
    default:
      "bg-[var(--color-surface-raised)] text-[var(--color-text-secondary)] border-[var(--color-border-subtle)]",
    primary:
      "bg-[var(--color-brand-muted)] text-[var(--color-brand-primary)] border-[var(--color-brand-muted)]",
    accent:
      "bg-[var(--color-surface-raised)] text-[var(--color-text-primary)] border-[var(--color-border-medium)]",
    success:
      "bg-emerald-950/30 text-emerald-400 border-emerald-800/40",
    warning:
      "bg-amber-950/30 text-amber-400 border-amber-800/40",
    error:
      "bg-rose-950/30 text-rose-400 border-rose-800/40",
    outline:
      "bg-transparent text-[var(--color-text-secondary)] border-[var(--color-border-subtle)]",
  };

  const selectedSize = sizeStyles[size] || sizeStyles.sm;
  const selectedVariant = variantStyles[variant] || variantStyles.default;

  return (
    <span
      className={`${baseStyles} ${selectedSize} ${selectedVariant} ${className}`}
      {...props}
    >
      {icon && <span className="inline-flex shrink-0" aria-hidden="true">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}

export default Badge;
