import React from 'react'
import '../css/producto.css'
import Pulserita from "../../assets/images/Pulseritas/pulse 1 ojito ovalado roja.jpg";


export default function Producto() {
  return (
        <div class="producto">
            <img src={Pulserita} />
                <div class="producto_info">
                    <h3>Nombre</h3>
                    <p>$Precio</p>
                    <button class="producto_agregar">Agregar</button>
                 </div>
            </div>
  )
}
