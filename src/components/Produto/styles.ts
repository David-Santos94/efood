import styled from 'styled-components'
import { cores } from '../../styles'

export const CardProduto = styled.div`
  width: 320px;
  height: 338px;
  background-color: ${cores.bgcolor4};
  padding: 8px;
`

export const ImgProduto = styled.img`
  display: block;
  width: 304px;
  height: 167px;
`

export const NomeProduto = styled.h3`
  font-weight: 900;
  font-size: 16px;
  display: inline-block;
  color: ${cores.secundaria};
  margin: 8px 0;
`

export const DescricaoProduto = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: ${cores.secundaria};
  text-align: start;
  height: 88px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`

export const BotaoAdicionar = styled.button`
  width: 304px;
  height: 24px;
  border: none;
  background-color: ${cores.bgcolor3};
  font-weight: 700;
  font-size: 14px;
  color: ${cores.primaria};
  margin-top: 8px;
`
