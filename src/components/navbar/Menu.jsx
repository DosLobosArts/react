import "../css/menu.css";
import OjoTribal from "../../assets/images/Iconos/ojo_tribal.png";

export default function Menu(args) {
  
  const claseBase = "boton_menu boton_categoria ";
  return (
    <div className="menu">
      <button
        className={args.idBotonActivo === 0 ? claseBase + "active" : claseBase}
        onClick={() => args.setIdBotonActivo(0)}
      >
        <img src={OjoTribal} />
        Todos los productos
        <img src={OjoTribal} />
      </button>
      <button
        className={args.idBotonActivo === 1 ? claseBase + "active" : claseBase}
        onClick={() => args.setIdBotonActivo(1)}
      >
        <img src={OjoTribal} />
        Pulseras
        <img src={OjoTribal} />
      </button>
      <button
        className={args.idBotonActivo === 2 ? claseBase + "active" : claseBase}
        onClick={() => args.setIdBotonActivo(2)}
      >
        <img src={OjoTribal} />
        Collares
        <img src={OjoTribal} />
      </button>
      <button
        className={args.idBotonActivo === 3 ? claseBase + "active" : claseBase}
        onClick={() => args.setIdBotonActivo(3)}
      >
        <img src={OjoTribal} />
        Carrito
        <img src={OjoTribal} />
      </button>
    </div>
  );
}
