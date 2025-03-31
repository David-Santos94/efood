import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'

import { ContainerHero, Slogan } from './styles'

const Hero = () => (
  <ContainerHero>
    <Link to="/">
      <img src={logo} alt="EFOOD" />
    </Link>
    <Slogan>Viva experiências gastronômicas no conforto da sua casa</Slogan>
  </ContainerHero>
)

export default Hero
