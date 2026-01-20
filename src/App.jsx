import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Button from './components/atoms/Button'
import Text from './components/atoms/Text'

function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  return (
    <>

    <Button>Hola este es un boton de prueba</Button>


    </>
  )
}

export default App
