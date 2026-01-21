import Text from '@/components/atoms/Text'
import { spacing, color, radius } from '../protons'

const DropdownItem = ({
  children,
  href,
  active = false,
}) => {
  return (
    <a
      href={href}
      style={{
        display: 'block',
        padding: `${spacing.xs} ${spacing.sm}`,
        borderRadius: radius.sm,
        textDecoration: 'none',
        color: active
          ? color.brand.mango
          : color.neutral.primary,
        backgroundColor: active
          ? color.brand.mangoDark
          : 'transparent',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = color.neutral.light
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = active
          ? color.brand.mangoLight
          : 'transparent'
      }}
    >
      <Text as="span" size="sm" color='primary'>
        {children}
      </Text>
    </a>
  )
}

export default DropdownItem
