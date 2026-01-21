import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './components/organisms/Card'
import {CardHeader, CardContent, CardFooter, CardMedia} from '@/components/molecules/Card'
import Button from './components/atoms/Button'
import Text from './components/atoms/Text'
import {imagen1} from '@/assets/img'


function App() {
  return (
    <>
      <Card clickable onClick={() => console.log('click')}>
        <CardMedia
          src={imagen1}
        >

        </CardMedia>
        <CardHeader
          title="Whisky Honey"
          subtitle="750 ml"
        />

        <CardContent>
          <Text size="sm" color="secondary">
            Whisky añejado 12 años en barrica de roble.
          </Text>
        </CardContent>

        <CardFooter>
          <Button>Comprar</Button>
        </CardFooter>
      </Card>
    </>
  )
}


export default App
