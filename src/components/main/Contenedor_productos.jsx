import React from 'react'
import Producto from './Producto'
import '../css/contenedor_productos.css'

const categorias = ["Todos los productos", "Pulseras", "Collares"]

export default function Contenedor_productos(args) {
  return (

    <div class='main'>
      <h1>{categorias[args.idBotonActivo]}</h1>
      <div class='contenedor_productos'>
        <Producto />
        <Producto />
        <Producto />
        <Producto />
        <Producto />
        <Producto />
        <Producto />
        <Producto />
      </div>
    </div>
  )
}
