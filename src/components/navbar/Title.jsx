import '../css/title.css'
import Logo from "../../assets/images/Iconos/Logo.png";

export default function Title() {
  return (
    <div className="title">
        <img src={Logo} />
        <div>
          <h1>Dos Lobos</h1>
          <p>- Artesanías y Santería -</p>
        </div>
      </div>
  )
}
