import React from "react";
import "../css/carrito.css";
import Imagen from '../../assets/images/Pulseritas/pulse 1 ojito ovalado roja.jpg'
import Trashcan from '../../assets/images/Iconos/Trashcan.png'

export default function Carrito() {
  return (
    <div class="main_carrito">
      <h1 class="carrito_titulo">Carrito</h1>
      <p class="carrito_vacio">Tu carrito esta vacío</p>

      <div class="carrito_productos disabled">
        <div class="carrito_producto">
          <div>
            <small>Imagen</small>
            <img src={Imagen} />
          </div>
          <div>
            <small>Nombre</small>
            <h3>Pulserita X</h3>
          </div>
          <div>
            <small>Cantidad</small>
            <h3>1</h3>
          </div>
          <div class="carrito_producto_precio">
            <small>Precio Unitario</small>
            <h3>$1000</h3>
          </div>
          <div class="carrito_producto_subtotal">
            <small>Subtotal</small>
            <h3>$1000</h3>
          </div>
          <div class="carrito_producto_eliminar">
            <button>
              <img src={Trashcan}/>
            </button>
          </div>
        </div>

        <div class="carrito_acciones disabled">
          <div class="carrito_acciones_izquierda">
            <button class="carrito_acciones_vaciar">Vaciar carrito</button>
          </div>
          <div class="carrito_acciones_derecha">
            <div class="carrito_acciones_total">
              <p>Total:</p>
              <p id="total">$1000</p>
            </div>
            <button class="carrito_acciones_comprar">Hacer pedido</button>
          </div>
        </div>
      </div>
    </div>
  );
}

/*TO DO:

Meter al costado un form para que llegue la direccion y datos del chabon. (Código postal, etc)

*/