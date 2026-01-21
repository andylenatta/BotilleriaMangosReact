import { spacing } from '@/components/protons'

const CardContent = ({ children }) => {
  return (
    <div
      style={{
        marginBottom: spacing.sm,
      }}
    >
      {children}
    </div>
  )
}

export default CardContent
