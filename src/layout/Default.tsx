import { NavLink } from 'react-router-dom'

import Logo from '../assets/logo.png'
import './Default.css'

export function Default() {
  return (
    <>
      <header>
        <img src={Logo} alt="logo da cidade" />
      </header>

      <main>
          <section id="aboutProject">
              <h1>Sobre o projeto</h1>
              <p>Caruaru é um município brasileiro do estado de Pernambuco, situado na região nordeste do país. A qual tem como príncipal setor econômico a Feira da Sulanca, 
                  por isso esse projeto nasce com o objetivo de ajudar os clientes a encontrar esses vendedores.
              </p>
          </section>

          <section id="mapInfo">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15792.385109337722!2d-35.9835018!3d-8.293217149999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a98b96e8d7fd6d%3A0xa30a5c7c9e363ef5!2sCaruaru%20-%20Picada%2C%20Caruaru%20-%20PE%2C%2055032-250!5e0!3m2!1spt-BR!2sbr!4v1699539720640!5m2!1spt-BR!2sbr"  loading="lazy"></iframe>
              <NavLink to="/signUp">começe por aqui</NavLink>
          </section>
      </main>
    </>
  )
}


