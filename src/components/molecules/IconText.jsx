import Icon from '@/components/atoms/Icon/Icon'
import Text from '@/components/atoms/Text'

const IconText = ({
  icon = null,
  children,
  iconSize = 20,
  iconColor = 'neutral.dark',
  
  // props que se pasan al Text
  textVariant = 'body',
  textSize = 'md',
  textWeight = 'regular',
  textColor = 'primary',

  gap = 8,
  align = 'center',
  className = '',
}) => {
  const hasIcon = Boolean(icon)
  return (
    <span
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: align,
        gap,
      }}
    >
      {hasIcon && (
      <Icon
        name={icon}
        size={iconSize}
        colorToken={iconColor}
      />
      )}

      <Text
        as="span"
        variant={textVariant}
        size={textSize}
        weight={textWeight}
        color={textColor}
      >
        {children}
      </Text>
    </span>
  )
}

export default IconText
