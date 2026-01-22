import { useState, useEffect, useRef } from 'react'
import CarouselSlide from '@/components/molecules/Carousel/CarouselSlide'
import CarouselControls from '@/components/molecules/Carousel/CarouselControls'
import CarouselIndicators from '@/components/molecules/Carousel/CarouselIndicators'

const Carousel = ({
  items = [],
  height = 360,
  showIndicators = true,
  showControls = true,
  autoplay = true,
  interval = 4000,
}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const total = items.length
  const timerRef = useRef(null)

  if (total === 0) return null

  const goNext = () => setActiveIndex((prev) => (prev + 1) % total)
  const goPrev = () =>
    setActiveIndex((prev) => (prev === 0 ? total - 1 : prev - 1))

  useEffect(() => {
    if (autoplay) {
      timerRef.current = setInterval(goNext, interval)
      return () => clearInterval(timerRef.current)
    }
  }, [activeIndex, autoplay])

  const handleManualNavigation = (fn) => {
    clearInterval(timerRef.current)
    fn()
    if (autoplay) {
      timerRef.current = setInterval(goNext, interval)
    }
  }

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height,
        overflow: 'hidden',
      }}
    >
      {items.map((item, i) => (
        <CarouselSlide
          key={item.id ?? i}
          src={item.src}
          alt={item.alt}
          active={i === activeIndex}
        />
      ))}

      {showControls && (
        <CarouselControls
          onPrev={() => handleManualNavigation(goPrev)}
          onNext={() => handleManualNavigation(goNext)}
        />
      )}

      {showIndicators && (
        <CarouselIndicators total={total} activeIndex={activeIndex} />
      )}
    </div>
  )
}

export default Carousel
