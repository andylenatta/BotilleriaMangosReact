import { color, tipografia, spacing } from "../protons"

const variants = {
  primary: {
    backgroundColor: color.ui.primary,
    color: color.neutral.white,
  },
  secondary: {
    backgroundColor: color.ui.secondary,
    color: color.neutral.dark,
  },
};

const sizes = {
  sm: {
    padding: spacing.sm,
  },
  md: {
    padding: spacing.md,
  },
};

function Button({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  onClick,
  disabled = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{
        ...variants[variant],
        ...sizes[size],
        fontFamily: tipografia.fontFamily.base,
        opacity: disabled ? 0.6 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
      }}
    >
      {children}
    </button>
  );
}

export default Button