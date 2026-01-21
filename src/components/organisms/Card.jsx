import { spacing, radius, shadows, color } from '../protons'

const Card = ({ children, clickable = false, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: color.neutral.white,
        borderRadius: radius.md,
        boxShadow: shadows.sm,
        padding: spacing.md,
        cursor: clickable ? 'pointer' : 'default',
        transition: 'box-shadow 160ms ease, transform 160ms ease',
      }}
      onMouseEnter={(e) => {
        if (clickable) {
          e.currentTarget.style.boxShadow = shadows.md
          e.currentTarget.style.transform = 'translateY(-2px)'
        }
      }}
      onMouseLeave={(e) => {
        if (clickable) {
          e.currentTarget.style.boxShadow = shadows.sm
          e.currentTarget.style.transform = 'translateY(0)'
        }
      }}
    >
      {children}
    </div>
  )
}

export default Card
