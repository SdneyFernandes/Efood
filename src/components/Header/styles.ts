import styled from 'styled-components'
import fundo from '../../assets/images/fundo.png'
import { cores } from '../../styles'

type HeaderProps = {
  layout: 'vertical' | 'horizontal'
}

export const HeaderBar = styled.header<HeaderProps>`
  background-image: url(${fundo});
  width: 100%;
  height: ${(props) => (props.layout === 'vertical' ? '384px' : '186px')};
  display: flex;
  flex-direction: ${(props) =>
    props.layout === 'vertical' ? 'column' : 'row'};
  align-items: center;
  justify-content: ${(props) =>
    props.layout === 'vertical' ? 'center' : 'space-around'};
  text-align: center;
`

export const Paragraph = styled.p`
  font-size: 18px;
  font-weight: 900;
  color: ${cores.Rosa};
`
export const Titulo = styled.h2`
  color: ${cores.Rosa};
  font-size: 36px;
  margin-top: 140px;
  width: 539px;
  height: 84px;
`
export const Logo = styled.img`
  width: 125px;
  height: 57px;
  margin-botton: 10px;
`
