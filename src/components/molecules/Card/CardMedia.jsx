import { radius } from '@/components/protons'

const CardMedia = ({
  src,
  alt = '',
  height = 180,
  fit = 'cover',
}) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: '100%',
        height,
        objectFit: fit,
        borderTopLeftRadius: radius.md,
        borderTopRightRadius: radius.md,
        display: 'block',
      }}
    />
  )
}

export default CardMedia
