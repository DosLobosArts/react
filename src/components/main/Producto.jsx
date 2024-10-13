import React from 'react'
import '../css/producto.css'


export default function Producto() {
  return (
    <div>
      <div id="contenedor_productos" class="contenedor_productos">
        <div class="producto">
            <img class="producto_imagen" src="./images/Hilo finito 7 nudos ojo violeta 10.jpg"/> 
                <div class="producto_info">
                    <h3>Nombre</h3>
                    <p>$Precio</p>
                    <button class="producto_agregar">Agregar</button>
                 </div>
            </div>
      </div>
    </div>
  )
}
