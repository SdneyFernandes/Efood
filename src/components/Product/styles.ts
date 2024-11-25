import styled from 'styled-components'
import { cores } from '../../styles'

type CardProps = {
  variant: 'home' | 'categories'
}

export const Card = styled.div<CardProps>`
  background-color: ${(props) =>
    props.variant === 'home' ? cores.Branco : cores.Rosa};
  width: ${(props) => (props.variant === 'home' ? '472px' : '316px')};
  height: ${(props) => (props.variant === 'home' ? '388px' : '330px')};
  overflow: hidden;
  position: relative;
  border: 1px solid ${cores.Rosa};
`

export const Titulo = styled.h3<CardProps>`
  font-size: ${(props) => (props.variant === 'home' ? '18px' : '16px')};
  color: ${(props) => (props.variant === 'home' ? cores.Rosa : cores.Amarelo)};
  margin-bottom: ${(props) => (props.variant === 'categories' ? '5px' : '5px')};
  text-align: ${(props) =>
    props.variant === 'categories' ? 'center' : 'left'};
  font-weight: 700;
`

export const Descricao = styled.p<CardProps>`
  font-size: 14px;
  color: ${(props) => (props.variant === 'home' ? cores.Rosa : cores.Amarelo)};
  margin-top: 7px;
  margin-bottom: 15px;
  font-weight: 400;
`

export const Imagem = styled.img<CardProps>`
  width: ${(props) => (props.variant === 'home' ? '482px' : '313px')};
  height: ${(props) => (props.variant === 'home' ? '217px' : '167px')};
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`
export const TituloContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  width: 100%;
`
export const CardContainer = styled.div<CardProps>`
  padding-top: 5px;
  padding-left: 5px;
  .link {
    padding: ${(props) => (props.variant === 'home' ? '8px 15px' : '5px 85px')};
    text-decoration: none;
    font-size: ${(props) => (props.variant === 'home' ? '14px' : '14px')};
    background-color: ${(props) =>
      props.variant === 'home' ? cores.Rosa : cores.Amarelo};
    color: ${(props) =>
      props.variant === 'home' ? cores.RosaClaro : cores.Rosa};
    border: none;
    font-weight: 700;
  }
`
export const Nota = styled.p`
  color: ${cores.Rosa};
  font-weight: 900;
`
