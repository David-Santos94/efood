import styled from 'styled-components'
import bgHeader from '../../assets/images/fundo-header.png'
import { Container, cores } from '../../styles'

export const ContainerHeader = styled.div`
  background-image: url(${bgHeader});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  width: 100%;
  height: 186px;
`

export const NavBar = styled(Container)`
  display: grid;
  grid-template-columns: 109px 341px 125px 193px 256px;
  grid-template-areas: 'a.b.c';
  align-items: center;
  justify-items: center;

  a {
    text-decoration: none;
  }
`
export const LinkHome = styled.span`
  font-weight: 900;
  font-size: 18px;
  text-align: center;
  width: 109px;
  color: ${cores.primaria};
  grid-area: a;
`

export const LogoEfood = styled.img`
  width: 125px;
  height: 57.5px;
  grid-area: b;
`

export const ProdutosCarrinho = styled.a`
  font-weight: 900;
  font-size: 18px;
  text-align: end;
  width: 256px;
  cursor: pointer;
  grid-area: c;
`
