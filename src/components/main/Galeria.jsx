import React from 'react'
import Producto_galeria from './Producto_galeria'
import '../css/contenedor_productos.css'

const categorias = ["Todos los productos", "Pulseras", "Collares", "Carrito"] /* "Carrito" */ 

export default function Galeria(args) {
  return (
      <div className={args.idBotonActivo === 3 ? "main_productos hidden" : "main_productos active"}>
        <h1>{categorias[args.idBotonActivo]}</h1>
        <div class='contenedor_productos'>
        <Producto_galeria/>
        <Producto_galeria/>
        <Producto_galeria/>
        <Producto_galeria/>
        <Producto_galeria/>
        <Producto_galeria/>
        <Producto_galeria/>
        <Producto_galeria/>
        <Producto_galeria/>
        <Producto_galeria/>
        <Producto_galeria/>
        <Producto_galeria/>
        <Producto_galeria/>
        <Producto_galeria/>
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