import { color } from '@/components/protons'

const Dot = ({ active = false, onClick }) => {
  return (
    <span
      onClick={onClick}
      style={{
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: active
          ? color.brand.mango
          : color.neutral.gray,
        cursor: 'pointer',
        transition: 'background-color 160ms ease',
      }}
    />
  )
}

export default Dot
