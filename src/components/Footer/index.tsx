import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

import { Aviso, ContainerFooter, RedeSocial } from './styles'

const Footer = () => (
  <ContainerFooter>
    <Link to="/">
      <img src={logo} alt="EFOOD" />
    </Link>
    <RedeSocial>
      <img src={instagram} alt="instagram" />
      <img src={facebook} alt="facebook" />
      <img src={twitter} alt="twitter" />
    </RedeSocial>
    <Aviso>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Aviso>
  </ContainerFooter>
)

export default Footer
