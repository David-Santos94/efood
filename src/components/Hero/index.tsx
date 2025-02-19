import { ContainerHero, Slogan } from './styles'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Hero = () => (
  <ContainerHero>
    <Link to="/">
      <img src={logo} alt="EFOOD" />
    </Link>
    <Slogan>Viva experiências gastronômicas no conforto da sua casa</Slogan>
  </ContainerHero>
)

export default Hero
