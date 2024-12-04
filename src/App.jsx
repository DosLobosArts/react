import Navbar from './components/navbar/Navbar'
import Productos from './components/main/Galeria'
import Carrito from './components/main/Carrito'
import './components/css/app.css'
import { useState } from 'react'
import Galeria from './components/main/Galeria'

export default function App() {
  const [idBotonActivo, setIdBotonActivo] = useState(0)
  return (
    <>
    <Navbar idBotonActivo={idBotonActivo} setIdBotonActivo={setIdBotonActivo}/>
    {idBotonActivo === 3 ? (
        <Carrito />
      ) : (
        <Galeria idBotonActivo={idBotonActivo} />
      )}
    </>
  )
}

/*
volver a agregar el Contenedor_productos al app! (estoy probando carrito)


    <Contenedor_productos idBotonActivo={idBotonActivo}/>


TO DO LIST:

Productos
- que se actualice el main con productos de cada categoria a base del arg idBotonActivo
- pensar alguna funcion que evalue la distancia y cotice el envio por correo argentino
- que la barrita del overflow de lista_comprados de Carrito detecte cuando hay overflow con Javascript para ponerle un fondito blanco a la barra. 
*/ 