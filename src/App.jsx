import Navbar from './components/navbar/Navbar'
import Productos from './components/main/Contenedor_productos'
import './components/css/app.css'
import { useState } from 'react'
import Contenedor_productos from './components/main/Contenedor_productos'

export default function App() {
  const [idBotonActivo, setIdBotonActivo] = useState(0)
  return (
    <>
    <Navbar idBotonActivo={idBotonActivo} setIdBotonActivo={setIdBotonActivo}/>
    <Contenedor_productos idBotonActivo={idBotonActivo}/>
    </>
  )
}

/*
TO DO LIST:

Productos
1. crear componente Producto e iterarlo en Productos
2. que se actualice el main con productos de cada categoria a base del arg idBotonActivo
*/ 