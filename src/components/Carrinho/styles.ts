import styled from 'styled-components'
import { cores } from '../../styles'

type ContentProps = {
  display: boolean
}

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

export const ContentCarrinho = styled.div<ContentProps>`
  width: 360px;
  height: 100%;
  z-index: 2;
  display: ${(props) => (props.display ? 'flex' : 'none')};
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
  margin-bottom: 8px;
`

export const Text = styled.span<{
  font?: string
  weight?: string
  margin?: string
}>`
  font-size: ${(props) => props.font || '14px'};
  font-weight: ${(props) => props.weight || '700'};
  line-height: 16.41px;
  margin-top: ${(props) => props.margin || '0'};
  margin-bottom: ${(props) => props.margin || '0'};
  color: ${cores.secundaria};
`

export const BotaoContinuar = styled.button`
  width: 100%;
  height: 24px;
  border: none;
  font-size: 14px;
  font-weight: 700;
  margin-top: 8px;
  color: ${cores.primaria};
  background-color: ${cores.bgcolor3};
  grid-area: h;
`

export const ContentFormDelivery = styled(ContentCarrinho)<ContentProps>`
  form {
    display: ${(props) => (props.display ? 'grid' : 'none')};
    grid-template-areas:
      'a a'
      'b b'
      'c c'
      'd e'
      'f f'
      'h h';
    justify-content: space-between;
    margin-top: 16px;
  }
`

export const ContentFormPayment = styled(ContentCarrinho)<ContentProps>`
  form {
    display: ${(props) => (props.display ? 'grid' : 'none')};
    grid-template-areas:
      'a a a a'
      'b b b c'
      'd d g g'
      'h h h h';
    justify-content: space-between;
    margin-top: 16px;
  }
`

export const Campo = styled.div<{
  area: string
  size?: string
  margin?: string
}>`
  grid-area: ${(props) => props.area};
  width: ${(props) => props.size || '100%'};
  margin-left: ${(props) => (props.area == 'g' ? '34px' : '0')};
  margin-bottom: ${(props) => props.margin || '8px'};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Input = styled.input<{ size?: string }>`
  width: ${(props) => props.size || '100%'};
  padding: 8px;
  margin-top: 8px;
  border: none;
  font-size: 14px;
  font-weight: 700;
  color: ${cores.quaternaria};
  background-color: ${cores.bgcolor3};
`
