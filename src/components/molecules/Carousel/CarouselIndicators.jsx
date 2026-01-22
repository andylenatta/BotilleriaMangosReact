import { useEffect, useRef } from 'react'

const CarouselIndicators = ({ total, activeIndex }) => {
  const progressRef = useRef(null)

  useEffect(() => {
    if (progressRef.current) {
      const widthPercent = ((activeIndex + 1) / total) * 100
      progressRef.current.style.width = `${widthPercent}%`
    }
  }, [activeIndex, total])

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 10,
        left: 0,
        width: '100%',
        height: 6,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 3,
        overflow: 'hidden',
        zIndex: 10,
      }}
    >
      <div
        ref={progressRef}
        style={{
          height: '100%',
          width: '0%',
          backgroundColor: 'white',
          transition: 'width 0.5s ease-in-out',
        }}
      />
    </div>
  )
}

export default CarouselIndicators
