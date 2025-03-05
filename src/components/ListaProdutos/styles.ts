import styled from 'styled-components'
import { cores } from '../../styles'
import {
  BotaoAdicionar,
  DescricaoProduto,
  NomeProduto
} from '../Produto/styles'

export const Cardapio = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 32px;
  margin: 56px 0 120px 0;
`
export const Adicionar = styled.div`
  display: contents;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }
`
export const ModalBox = styled.div`
  width: 1024px;
  height: 344px;
  background-color: ${cores.bgcolor4};
  z-index: 1;
`
export const CloseModal = styled.img`
  display: block;
  position: relative;
  padding: 8px;
  left: 992px;
`

export const ModalContent = styled.div`
  display: grid;
  grid-template-areas:
    'img nome'
    'img descricao'
    'img botao';
  grid-template-columns: 280px 656px;
  grid-template-rows: 21px 176px;
  column-gap: 24px;
  row-gap: 16px;
  padding: 0 32px 32px 32px;
`

export const ImgModal = styled.img`
  display: block;
  width: 280px;
  height: 280px;
  object-fit: cover;
  grid-area: img;
`

export const NomeProdutoModal = styled(NomeProduto)`
  font-size: 18px;
  grid-area: nome;
  margin: 0;
  height: 21px;
`

export const DescricaoProdutoModal = styled(DescricaoProduto)`
  grid-area: descricao;
  height: 176px;
`

export const BotaoAdicionarModal = styled(BotaoAdicionar)`
  width: 218px;
  grid-area: botao;
  margin: 0;
`
