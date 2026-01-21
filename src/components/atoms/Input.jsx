import { color, spacing, radius, tipografia } from "../protons";

const sizes = {
  sm: {
    padding: `${spacing.xs} ${spacing.sm}`,
    fontSize: tipografia.fontSize.sm,
  },
  md: {
    padding: `${spacing.sm} ${spacing.md}`,
    fontSize: tipografia.fontSize.md,
  },
};

const states = {
  default: {
    borderColor: color.neutral.gray,
  },
  error: {
    borderColor: color.ui.danger,
  },
};

function Input({
  type = "text",
  size = "md",
  state = "default",
  disabled = false,
  placeholder,
  value,
  onChange,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      aria-invalid={state === "error"}
      style={{
        width: "100%",
        boxSizing: "border-box",
        fontFamily: tipografia.fontFamily.base,
        borderRadius: radius.sm,
        border: "1px solid",
        outline: "none",
        backgroundColor: disabled
          ? color.neutral.light
          : color.neutral.white,
        color: color.neutral.dark,
        cursor: disabled ? "not-allowed" : "text",
        transition: "border-color 0.2s ease",
        ...sizes[size],
        ...states[state],
      }}
      onFocus={(e) => {
        if (state === "default") {
          e.target.style.borderColor = color.ui.primary;
        }
      }}
      onBlur={(e) => {
        e.target.style.borderColor = states[state].borderColor;
      }}
    />
  );
}

export default Input;
