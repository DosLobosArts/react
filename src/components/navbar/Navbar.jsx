import Title from './Title'
import Menu from './Menu'
import Contacto from './Contacto'
import '../css/navbar.css'

export default function Navbar(args) {
  return (
    <>
    <nav className="navbar">
      <Title/>
      <Menu idBotonActivo={args.idBotonActivo} setIdBotonActivo={args.setIdBotonActivo}/>
      <Contacto/>
    </nav>
    </>
  )
}