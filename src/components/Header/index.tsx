import { Link } from 'react-router-dom'
import { NavBar, ContainerHeader, ProdutosCarrinho, LogoEfood } from './styles'
import logo from '../../assets/images/logo.png'

const Header = () => (
  <ContainerHeader>
    <NavBar>
      <Link to="/">Restaurantes</Link>
      <LogoEfood src={logo} alt="EFOOD" />
      <ProdutosCarrinho>0 produto(s) no carrinho</ProdutosCarrinho>
    </NavBar>
  </ContainerHeader>
)

export default Header
