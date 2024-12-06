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

 .isloading{
  width: 70px;
  height: 70px;
  border: 5px solid rgba(0, 0, 0, 0.1);
  border-top: 5px solid #E66767;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  font-size: 24px;
  font-weight: bold;
  color: #E66767;
  margin-bottom: 150px;
  margin-top: 150px;
  margin-left: 625px;
 }

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(200deg);
  }
}

.btn {
  transition: all 0.9s ease;
  border: none;
  cursor: pointer;
  color: ${cores.Rosa};
  font-weight: bold;
  background-color: ${cores.Amarelo};
}
.btn:hover {
  transform: scale(1.1);
}

}


`
