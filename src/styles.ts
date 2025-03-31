import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  primaria: '#E66767',
  secundaria: '#FFEBD9',
  terciaria: '#FFFFFF',
  quaternaria: '#4B4B4B',
  bgcolor: '#FFF8F2',
  bgcolor2: '#FFFFFF',
  bgcolor3: '#FFEBD9',
  bgcolor4: '#E66767'
}

export const GlobalCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto", serif;
    }

    body {
        background-color: ${cores.bgcolor};
        color: ${cores.primaria};
    }
`

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`
