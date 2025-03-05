import styled from 'styled-components'
import { cores } from '../../styles'

export const ContainerCarrinho = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  justify-content: end;

  &.open {
    display: flex;
  }
`

export const ContentCarrinho = styled.div`
  width: 360px;
  height: 100%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  padding: 16px 8px 0 8px;
  background-color: ${cores.bgcolor4};
`

export const ProdutoCarrinho = styled.div`
  width: 344px;
  height: 100px;
  background-color: ${cores.bgcolor3};
  display: grid;
  grid-template-areas:
    'img nome null1'
    'img preco null2'
    'img null3 deletar';
  grid-template-columns: 80px auto 16px;
  grid-template-rows: 37px 31px 16px;
  column-gap: 8px;
  padding: 8px;
  margin-top: 16px;
`

export const ImgProdutoCarrinho = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  grid-area: img;
`

export const TituloProdutoCarrinho = styled.h3`
  font-size: 18px;
  font-weight: 900;
  line-height: 21.09px;
  color: ${cores.primaria};
  grid-area: nome;
`

export const PrecoProdutoCarrinho = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: ${cores.primaria};
  grid-area: preco;
`

export const Deletar = styled.a`
  display: contents;
`

export const ImgDeletar = styled.img`
  grid-area: deletar;
`

export const ContainerValorTotal = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 16px;
`

export const ValorTotal = styled.span`
  font-size: 14px;
  font-weight: 700;
  line-height: 16.41px;
  color: ${cores.secundaria};
`

export const BotaoContinuar = styled.button`
  width: 100%;
  height: 24px;
  border: none;
  font-size: 14px;
  font-weight: 700;
  color: ${cores.primaria};
  background-color: ${cores.bgcolor3};
`
