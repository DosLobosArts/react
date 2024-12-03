import React from "react";
import "../css/carrito.css";

import Producto_carrito from './Producto_carrito'

export default function Carrito() {
  return (
    <div class="main_carrito">
      <h1 class="carrito_titulo">Carrito</h1>
      <p class="carrito_vacio">Tu carrito esta vacío</p>

      <div class="carrito_productos disabled">
        <Producto_carrito/>
        <Producto_carrito/>
        <Producto_carrito/>
        <Producto_carrito/>
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
  );
}

/*TO DO:

Meter al costado un form para que llegue la direccion y datos del chabon. (Código postal, etc)

*/
