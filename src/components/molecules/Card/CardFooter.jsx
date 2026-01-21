import { spacing } from '@/components/protons'

const CardFooter = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        gap: spacing.sm,
      }}
    >
      {children}
    </div>
  )
}

export default CardFooter
