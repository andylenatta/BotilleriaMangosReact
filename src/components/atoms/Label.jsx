import { color, tipografia, spacing } from "../protons";

function Label({
  children,
  htmlFor,
  required = false,
}) {
  return (
    <label
      htmlFor={htmlFor}
      style={{
        display: "inline-block",
        fontFamily: tipografia.fontFamily.base,
        fontSize: tipografia.fontSize.sm,
        fontWeight: tipografia.fontWeight.medium,
        color: color.neutral.dark,
        marginBottom: spacing.xs,
      }}
    >
      {children}
      {required && (
        <span
          style={{
            color: color.ui.danger,
            marginLeft: spacing.xs,
          }}
        >
          *
        </span>
      )}
    </label>
  );
}

export default Label;
