import { color, tipografia } from "../protons";

const variants = {
  body: {
    fontFamily: tipografia.fontFamily.base,
  },
  label: {
    fontFamily: tipografia.fontFamily.base,
    textTransform: "uppercase",
  },
  caption: {
    fontFamily: tipografia.fontFamily.base,
  },
};

const sizes = {
  sm: {
    fontSize: tipografia.fontSize.sm,
  },
  md: {
    fontSize: tipografia.fontSize.md,
  },
  lg: {
    fontSize: tipografia.fontSize.lg,
  },
};

const weights = {
  regular: {
    fontWeight: tipografia.fontWeight.regular,
  },
  medium: {
    fontWeight: tipografia.fontWeight.medium,
  },
  bold: {
    fontWeight: tipografia.fontWeight.bold,
  },
};

const colors = {
  primary: {
    color: color.neutral.dark,
  },
  secondary: {
    color: color.neutral.gray,
  },
  inverse: {
    color: color.neutral.white,
  },
  brand: {
    color: color.brand.mango,
  },
  success: {
    color: color.ui.success,
  },
  warning: {
    color: color.ui.warning,
  },
  danger: {
    color: color.ui.danger,
  },
};

function Text({
  children,
  as = "p",
  variant = "body",
  size = "md",
  weight = "regular",
  color: colorProp = "primary",
}) {
  const Component = as;

  return (
    <Component
      style={{
        ...variants[variant],
        ...sizes[size],
        ...weights[weight],
        ...colors[colorProp],
      }}
    >
      {children}
    </Component>
  );
}

export default Text;
