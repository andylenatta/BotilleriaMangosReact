import { tipografia, color } from "../protons"

function Text({
    as = "span",
    size = "md",
    weight = "regular",
    colorVariant = {primary},
    children,
    ...props
}){
  const Component = as

  return (
    <Component
      {...props}
      style={{
        fontFamily: tipografia.fontFamily.base,
        fontSize: tipografia.fontSize[size],
        fontWeight: tipografia.fontWeight[weight],
        color: color.text[colorVariant],
        ...props.style
      }}
    >
      {children}
    </Component>
  )
}
export default Text