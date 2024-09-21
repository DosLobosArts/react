// import OjoTribal from '../../assets/ojotribal.png'

export default function Menu() {
  return (
    <div className="menu">
        <button id="todos" className="boton_menu boton_categoria active">
        {/*  <img src={OjoTribal} /> */}
          Todos los productos
          <img src="./images/Iconos/ojo tribal.png" />
        </button>
        <button id="pulseras" className="boton_menu boton_categoria">
          <img src="./images/Iconos/ojo tribal.png" />
          Pulseras
          <img src="./images/Iconos/ojo tribal.png" />
        </button>
        <button id="collares" className="boton_menu boton_categoria">
          <img src="./images/Iconos/ojo tribal.png" />
          Collares
          <img src="./images/Iconos/ojo tribal.png" />
        </button>
      </div>
  )
}
