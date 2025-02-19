import styled from 'styled-components'
import { cores } from '../../styles'

export const ContainerFooter = styled.div`
  background-color: ${cores.bgcolor3};
  width: 100%;
  height: 298px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    height: 57.5px;
  }
`

export const RedeSocial = styled.div`
  width: 88px;
  height: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 32.5px 0 80px 0;
`

export const Aviso = styled.p`
  font-weight: 400;
  font-size: 10px;
  text-align: center;
  width: 480px;
`
