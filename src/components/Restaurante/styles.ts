import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 472px;
  height: 398px;
  background-color: ${cores.bgcolor2};
  border: 1px solid ${cores.primaria};
  position: relative;
`

export const Capa = styled.img`
  width: 472px;
  height: 217px;
`

export const Tag = styled.span`
  font-weight: 700;
  font-size: 12px;
  min-width: 61px;
  padding: 6px 4px;
  text-align: center;
  background-color: ${cores.primaria};
  color: ${cores.secundaria};
  position: absolute;
  top: 16px;
  right: 16px;
`

export const TagDestaque = styled(Tag)`
  width: 121px;
  right: 85px;
`

export const Sobre = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 472px;
  height: 181px;
  padding: 8px;
`

export const Cabecalho = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Nome = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 21.09px;
`

export const Nota = styled.div`
  width: 55px;
  height: 21px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Valor = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 21.09px;
`

export const Descricao = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin: 16px 0;
  height: 88px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`

export const SaibaMaisBtn = styled.button`
  width: 82px;
  height: 24px;
  background-color: ${cores.primaria};
  border: none;

  a {
    text-decoration: none;
    color: ${cores.secundaria};
    font-weight: 700;
    font-size: 14px;
    line-height: 16.41px;
  }
`
