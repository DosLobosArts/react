import React from "react";
import "../css/carrito.css";
import OjoTribal from "../../assets/images/Iconos/ojo_tribal.png";

import Producto_carrito from "./Producto_carrito";
import Form from "./Form";

export default function Carrito() {
  return (
    <div class="carrito">
      <h1 class="carrito_titulo">Carrito</h1>
      <p class="carrito_vacio">Tu carrito esta vacío</p>

      <div class="main_carrito">
        <div class="lista_comprados">
          <div class="carrito_productos disabled">
            <Producto_carrito />
            <Producto_carrito />
            <Producto_carrito />
            <Producto_carrito />
            <Producto_carrito />
            <Producto_carrito />
            <Producto_carrito />
          </div>
        </div>

        <div class="seccion_pedido">
          <div class="pedido_data">
            <div class="pedido_data_titulo">
            <img src={OjoTribal}/>
            <h1>Detalles del pedido</h1>
              <img src={OjoTribal}/>
            </div>
            <p>Valor de la compra:</p>
            <p>Costo de envio:</p>
            <p>En stock:</p>
            <Form/>
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
    </div>
  );
}

/*TO DO:

Meter al costado un form para que llegue la direccion y datos del chabon. (Código postal, etc)

*/
