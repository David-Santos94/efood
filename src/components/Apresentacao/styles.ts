import styled from 'styled-components'
import imgfundo from '../../assets/images/banner_la_dolce_vita.png'
import { cores } from '../../styles'

export const ContainerApresentacao = styled.div`
  background-image: url(${imgfundo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 280px;
`
export const Transparencia = styled.div`
  background-color: #00000080;
  width: 100%;
  height: 100%;
`

export const TipoCulinaria = styled.h2`
  font-weight: 100;
  font-size: 32px;
  color: ${cores.terciaria};
  padding-top: 25px;
  padding-bottom: 156.5px;
`

export const NomeRestaurante = styled.h2`
  font-weight: 900;
  font-size: 32px;
  color: ${cores.terciaria};
`
