import styled from 'styled-components'
import bgHero from '../../assets/images/fundo-header.png'

export const ContainerHero = styled.div`
  background-image: url(${bgHero});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 384px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 64px;

  a {
    height: 57.5px;
  }
`

export const Slogan = styled.h1`
  font-weight: 900;
  font-size: 36px;
  line-height: 42.19px;
  width: 539px;
  text-align: center;
  padding-top: 138.5px;
`
