import { IconMap } from './IconMap'
import { color } from '@/components/protons/color'

const Icon = ({
  name,
  size = 24,
  colorToken = 'neutral.dark',
  className = '',
  ...props
}) => {
  const IconComponent = IconMap[name]

  if (!IconComponent) {
    console.warn(`Icono "${name}" no existe`)
    return null
  }

  const [group, key] = colorToken.split('.')
  const resolvedColor = color[group]?.[key]

  return (
    <IconComponent
      width={size}
      height={size}
      fill={resolvedColor || 'currentColor'}
      className={className}
      aria-hidden="true"
      {...props}
    />
  )
}

export default Icon
