const CarouselSlide = ({ src, alt, active }) => (
  <img
    src={src}
    alt={alt}
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: active ? 1 : 0,
      transition: 'opacity 0.5s ease-in-out',
      zIndex: active ? 2 : 1,
    }}
  />
)

export default CarouselSlide
