import { color, tipografia, spacing } from "../protons"

function Button({ children, type="button" , ...props }) {
  return (
    <button
      {...props}
      style={{
        backgroundColor: color.ui.primary,
        color: color.neutral.white,
        fontFamily: tipografia.fontFamily.base,
        padding: spacing.md,
        ...props.style
      }}
    >
      {children}
    </button>
  )
}

export default Button