import Text from '@/components/atoms/Text'
import { spacing, color, radius } from '../protons'

const DropdownItem = ({
  children,
  href,
  onClick,
}) => {
  return (
    <a
      href={href}
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        padding: `${spacing.xs} ${spacing.xs}`,
        borderRadius: radius.xs,
        textDecoration: 'none',
        color: color.ui.primary,
        transition: 'background-color 120ms ease, color 120ms ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = color.neutral.white
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'transparent'
      }}
    >
      <Text as="span" size="sm">
        {children}
      </Text>
    </a>
  )
}

export default DropdownItem
