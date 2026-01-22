import Icon from '@/components/atoms/Icon/Icon'
import { spacing, radius, color } from '@/components/protons'

const IconButton = ({
  icon,
  size = 40,
  iconSize = 20,
  variant = 'ghost',
  onClick,
  disabled = false,
}) => {
  const background =
    variant === 'solid'
      ? color.brand.mango
      : 'transparent'

  const iconColor =
    variant === 'solid'
      ? 'inverse'
      : 'brand'

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        width: size,
        height: size,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: radius.full ?? '50%',
        border: 'none',
        backgroundColor: background,
        cursor: disabled ? 'not-allowed' : 'pointer',
        padding: 0,
      }}
    >
      <Icon
        name={icon}
        size={iconSize}
        colorToken={iconColor}
      />
    </button>
  )
}

export default IconButton
