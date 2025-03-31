import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import logo from '../../assets/images/logo.png'

import { open } from '../../store/reducers/carrinho'
import { RootReducer } from '../../store'

import {
  NavBar,
  ContainerHeader,
  ProdutosCarrinho,
  LogoEfood,
  LinkHome
} from './styles'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.carrinho)

  const openCarrinho = () => {
    dispatch(open())
  }

  return (
    <ContainerHeader>
      <NavBar>
        <Link to="/">
          <LinkHome>Restaurantes</LinkHome>
        </Link>
        <LogoEfood src={logo} alt="EFOOD" />
        <ProdutosCarrinho onClick={openCarrinho}>
          {items.length} produto(s) no carrinho
        </ProdutosCarrinho>
      </NavBar>
    </ContainerHeader>
  )
}

export default Header
