import Carousel from '@/components/organisms/Carousel'
import { Slide } from '@/assets/img'
import Navbar from './components/organisms/Navbar'
import ProductsSection from './components/organisms/ProductsSection'
import { Cards } from '@/assets/img'

const slides = [
  { id: 1, src: Slide.imagen2, alt: 'Promo 1' },
  { id: 2, src: Slide.imagen3, alt: 'Promo 2' },
  { id: 3, src: Slide.imagen4, alt: 'Promo 3' },
]

const products = [
  {
    id: 1,
    title: 'Whisky Premium',
    subtitle: '750 ml',
    description: 'Whisky añejado 12 años en barrica de roble.',
    image: Cards.imagen1,
    buyText: 'Comprar',
    onBuy: () => console.log('Comprar Whisky Premium'),
    infoText: 'Ver más',
    onInfo: () => console.log('Más info Whisky Premium'),
  },
  {
    id: 2,
    title: 'Vino Tinto',
    subtitle: '750 ml',
    description: 'Vino de cosecha especial 2023.',
    image:Slide.imagen2,
    buyText: 'Comprar',
    onBuy: () => console.log('Comprar Vino Tinto'),
    infoText: 'Ver más',
    onInfo: () => console.log('Más info Vino Tinto'),
  },
  {
    id: 3,
    title: 'Cerveza Artesanal',
    subtitle: '500 ml',
    description: 'Cerveza elaborada con lúpulo orgánico.',
    image:Slide.imagen3,
    buyText: 'Comprar',
    onBuy: () => console.log('Comprar Cerveza Artesanal'),
    infoText: 'Ver más',
    onInfo: () => console.log('Más info Cerveza Artesanal'),
  },
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
    <ProductsSection items={products}></ProductsSection>
  </div>
)

export default App
