import { color, tipografia } from "../protons";

const variants = {
  primary: {
    color: color.ui.primary,
  },
  secondary: {
    color: color.neutral.gray,
  },
  brand: {
    color: color.brand.mango,
  },
  danger: {
    color: color.ui.danger,
  },
};

const underlineVariants = {
  always: "underline",
  hover: "none",
  none: "none",
};

function Link({
  href,
  children,
  variant = "primary",
  underline = "hover",
  target = "_self",
}) {
  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      style={{
        fontFamily: tipografia.fontFamily.base,
        fontWeight: tipografia.fontWeight.medium,
        textDecoration: underlineVariants[underline],
        cursor: "pointer",
        ...variants[variant],
      }}
      onMouseEnter={(e) => {
        if (underline === "hover") {
          e.currentTarget.style.textDecoration = "underline";
        }
      }}
      onMouseLeave={(e) => {
        if (underline === "hover") {
          e.currentTarget.style.textDecoration = "none";
        }
      }}
      onFocus={(e) => {
        e.currentTarget.style.textDecoration = "underline";
      }}
      onBlur={(e) => {
        if (underline === "hover") {
          e.currentTarget.style.textDecoration = "none";
        }
      }}
    >
      {children}
    </a>
  );
}

export default Link;
