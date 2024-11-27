import React from 'react'
import Producto from './Producto'
import '../css/contenedor_productos.css'

const categorias = ["Todos los productos", "Pulseras", "Collares", "Carrito"] /* "Carrito" */ 

export default function Contenedor_productos(args) {
  return (
      <div className={args.idBotonActivo === 3 ? "main_productos hidden" : "main_productos active"}>
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
          <Producto />
          <Producto />
          <Producto />
          <Producto />
        </div>
      </div>
  )
}

/*




TO DO: Esto solo esta diseñado para productos, pero aca mismo pienso que deberia ser el carrito
          que con un disable se apague la estructura de los productos y se active la del carro
          cuando el vector se ponga en "Carrito" (la posicion 3).

          Entendes pelotudo?
*/ 