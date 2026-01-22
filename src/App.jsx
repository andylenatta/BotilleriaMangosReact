import Carousel from '@/components/organisms/Carousel'
import { Slide } from '@/assets/img'
import Navbar from './components/organisms/Navbar'
import { Mango } from './assets/Icons'

const slides = [
  { id: 1, src: Slide.imagen2, alt: 'Promo 1' },
  { id: 2, src: Slide.imagen3, alt: 'Promo 2' },
  { id: 3, src: Slide.imagen4, alt: 'Promo 3' },
]

const App = () => (
  <div style={{ maxWidth: 1200, margin: '0 auto', padding: 20 }}>
    <Navbar />
    <Carousel
      items={slides}
      height={360}
      showControls={true}
      showIndicators={true}
    />
  </div>
)

export default App
