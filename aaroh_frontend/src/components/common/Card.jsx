
/**
 * Editorial Card / Surface Component
 *
 * @param {Object} props
 * @param {'div' | 'article' | 'section'} [props.as='div']
 * @param {'default' | 'interactive' | 'sunken'} [props.variant='default']
 * @param {'none' | 'sm' | 'md' | 'lg'} [props.padding='md']
 * @param {string} [props.className='']
 * @param {React.ReactNode} props.children
 */
export function Card({
  as: Component = "div",
  variant = "default",
  padding = "md",
  className = "",
  children,
  ...props
}) {
  const baseStyles =
    "border rounded-[var(--radius-md,10px)] transition-all duration-200 overflow-hidden";

  const variantStyles = {
    default:
      "bg-[var(--color-surface-card)] border-[var(--color-border-subtle)] text-[var(--color-text-primary)]",
    interactive:
      "bg-[var(--color-surface-card)] hover:bg-[var(--color-surface-raised)] border-[var(--color-border-subtle)] hover:border-[var(--color-border-medium)] hover:-translate-y-0.5 text-[var(--color-text-primary)] cursor-pointer shadow-sm hover:shadow-md",
    sunken:
      "bg-[var(--color-bg-subtle)] border-[var(--color-border-subtle)] text-[var(--color-text-primary)]",
  };

  const paddingStyles = {
    none: "p-0",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const selectedVariant = variantStyles[variant] || variantStyles.default;
  const selectedPadding = paddingStyles[padding] || paddingStyles.md;

  return (
    <Component
      className={`${baseStyles} ${selectedVariant} ${selectedPadding} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Card;
