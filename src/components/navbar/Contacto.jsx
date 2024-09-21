export default function Contacto() {
  return (
    <div className="contacto">
        <h4 style={{ margin: 'auto 0' }}>Contacto</h4>
        <div className="contacto_items">
          <div>
            <img
              height="35px"
              width="auto"
              src="./images/Iconos/whatsapp icon.png"
            />
            <p>11 5475 5330 / 11 2581 0905</p>
          </div>
          <div>
            <a
              href="https://www.instagram.com/doslobos.artesanias/"
              target="_blank"
              ><img
                height="35px"
                width="auto"
                src="./images/Iconos/instagram icon.png"
            /></a>
            <a
              href="https://www.instagram.com/doslobos.artesanias/"
              target="_blank"
              style={{ marginLeft: '10px' }}
              >doslobos.artesanias
              </a>
          </div>
        </div>
      </div>
  )
}
