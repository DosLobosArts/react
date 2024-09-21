import Title from './Title'
import Menu from './Menu'
import Contacto from './Contacto'
import './navbar.css'

export default function Navbar() {
  return (
    <>
    <nav className="navbar">
      <Title/>
      <Menu/>
      <Contacto/>
    </nav>
    </>
  )
}