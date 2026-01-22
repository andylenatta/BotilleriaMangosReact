import Card from '@/components/organisms/Card'
import { CardMedia,CardHeader,CardContent,CardFooter } from '../molecules/Card/Index'
import { spacing } from '@/components/protons'
import Text from '../atoms/Text'
import Button from '../atoms/Button'

const ProductsSection = ({ items = [] }) => {
  if (!items.length) return null

  return (
    <section style={{ padding: `${spacing.lg} ${spacing.md}` }}>
      
      <h2 style={{ marginBottom: spacing.md }}>Productos destacados</h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: spacing.md,
        }}
      >
        {items.map((item) => (
          <Card key={item.id} clickable onClick={item.onClick}>

            <CardMedia
                src={item.image}
                alt={item.title} 
            ></CardMedia>

            <CardHeader title={item.title} subtitle={item.subtitle}/>

            <CardContent>
              <Text
                color='primary'  
              >
                {item.description}
            </Text>
            </CardContent>

            <CardFooter 
                style={{
                    display: 'flex',
                    gap:spacing.sm
            }}>
              <Button
                variant='primary'
                size='md'
                onClick={item.onBuy} 
              >
                {item.buyText || 'comprar'}
              </Button>

              <Button
                variant='secondary'
                size='md'
                onClick={item.onInfo}
              >
                {item.infoText || 'ver mas'}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default ProductsSection
