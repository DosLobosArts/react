import '../css/contacto.css'
import Insta from "../../assets/images/Iconos/instagram icon.png";
import Whatsapp from "../../assets/images/Iconos/whatsapp icon.png";

export default function Contacto() {
  return (
    <div className="contacto">
      <h4 style={{ margin: "auto 0" }}>Contacto</h4>
      <div className="contacto_items">
        <div>
        <img src={Whatsapp}/>
          <p>11 5475 5330 / 11 2581 0905</p>
        </div>
        <div>
          <a
            href="https://www.instagram.com/doslobos.artesanias/"
            target="_blank"
          >
            <img src={Insta}/>
          </a>
          <a
            href="https://www.instagram.com/doslobos.artesanias/"
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            doslobos.artesanias
          </a>
        </div>
      </div>
    </div>
  );
}
