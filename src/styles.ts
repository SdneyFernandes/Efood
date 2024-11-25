import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const cores = {
  Rosa: '#E66767',
  RosaClaro: '#FFF8F2',
  Amarelo: '#FFEBD9',
  Branco: '#FFFFFF',
}

export const GlobalCss = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
}

body {
background-color: ${cores.RosaClaro}
}
`

export const Container = styled.div`
  max-width: 1366px;
  height: 100%;
`
