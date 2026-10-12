
/**
 * Editorial Divider Component
 *
 * @param {Object} props
 * @param {string} [props.label]
 * @param {'center' | 'left'} [props.align='center']
 * @param {string} [props.className='']
 */
export function Divider({
  label,
  align = "center",
  className = "",
  ...props
}) {
  if (!label) {
    return (
      <hr
        className={`border-0 border-t border-[var(--color-border-subtle)] my-6 w-full ${className}`}
        {...props}
      />
    );
  }

  return (
    <div
      role="separator"
      className={`relative flex items-center my-6 w-full ${className}`}
      {...props}
    >
      <div className="grow border-t border-[var(--color-border-subtle)]" />
      <span
        className={`px-3 text-[11px] font-medium tracking-wider uppercase text-[var(--color-text-muted)] select-none ${
          align === "left" ? "order-first pl-0" : ""
        }`}
      >
        {label}
      </span>
      <div className="grow border-t border-[var(--color-border-subtle)]" />
    </div>
  );
}

export default Divider;
