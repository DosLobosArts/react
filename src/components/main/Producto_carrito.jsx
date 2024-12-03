import React from 'react'
import Imagen from "../../assets/images/Pulseritas/pulse 1 ojito ovalado roja.jpg";
import Trashcan from "../../assets/images/Iconos/Trashcan.png";

export default function Producto_carrito() {
  return (
        <div class="carrito_producto">
          <div class="encabezados_carrito">
            <div>
              <small>Imagen</small>
            </div>
            <div>
              <small>Nombre</small>
            </div>
            <div>
              <small>Cantidad</small>
            </div>
            <div>
              <small>Precio Unitario</small>
            </div>
            <div>
              <small>Subtotal</small>
            </div>
            <div>
              <small>Eliminar</small>
            </div>
          </div>

          <div class="detalles_carrito">
            <div>
              <img src={Imagen} />
            </div>
            <div>
              <h3>Pulserita X</h3>
            </div>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>$1000</h3>
            </div>
            <div>
              <h3>$1000</h3>
            </div>
            <div>
              <button>
                <img src={Trashcan} />
              </button>
            </div>
          </div>
        </div>
  )
}
