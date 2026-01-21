import Text from '@/components/atoms/Text'
import { spacing } from '@/components/protons'

const CardHeader = ({ title, subtitle, action }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: subtitle ? 'flex-start' : 'center',
        gap: spacing.sm,
        marginBottom: spacing.sm,
      }}
    >
      <div>
        <Text weight="bold">{title}</Text>

        {subtitle && (
          <Text size="sm" color="secondary">
            {subtitle}
          </Text>
        )}
      </div>

      {action && <div>{action}</div>}
    </div>
  )
}

export default CardHeader
