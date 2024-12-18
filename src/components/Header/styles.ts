import styled from 'styled-components'
import fundo from '../../assets/images/fundo.png'
import { cores } from '../../styles'

export type HeaderProps = {
  layout: 'vertical' | 'horizontal'
}

export const HeaderBar = styled.header<HeaderProps>`
  background-image: url(${fundo});
  width: 100%;
  height: ${(props) => (props.layout === 'vertical' ? '384px' : '186px')};
  display: flex;
  justify-content: center;

  p {
    font-size: 18px;
    font-weight: 900;
    color: ${cores.Rosa};
  }

  .link {
    text-decoration: none;
  }

  .container {
    display: flex;
    flex-direction: ${(props) =>
      props.layout === 'vertical' ? 'column' : 'row'};
    justify-content: ${(props) =>
      props.layout === 'vertical' ? 'space-around' : 'space-between'};
    width: 1024px;
    align-items: center;
    text-align: center;
  }
`

export const Titulo = styled.h2`
  color: ${cores.Rosa};
  font-size: 36px;
  width: 539px;
  height: 84px;
`
export const Logo = styled.img`
  width: 125px;
  height: 57px;
`
