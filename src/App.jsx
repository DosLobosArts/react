import Navbar from './components/navbar/Navbar'
import Productos from './components/main/Productos'
import './App.css'
import { useState } from 'react'

export default function App() {
  const [idBotonActivo, setIdBotonActivo] = useState(1)
  return (
    <>
    <Navbar idBotonActivo={idBotonActivo} setIdBotonActivo={setIdBotonActivo}/>
    <Productos /*lista={productos}*/ idBotonActivo={idBotonActivo}/> 
    </>
  )
}

/*
TO DO LIST:

Productos
1. crear componente Producto e iterarlo en Productos
2. que se actualice el main con productos de cada categoria a base del arg idBotonActivo
*/ 