import styled from 'styled-components'
import { cores } from '../../styles'

type ItemProps = {
  variant: 'home' | 'categories'
}

type TagProps = {
  size: 'big' | 'small'
}

export const Card = styled.div<ItemProps>`
  background-color: ${(props) =>
    props.variant === 'home' ? cores.Branco : cores.Rosa};
  width: ${(props) => (props.variant === 'home' ? '472px' : '316px')};
  height: ${(props) => (props.variant === 'home' ? '398px' : '410px')};
  overflow: hidden;
  position: relative;
  border: 1px solid ${cores.Rosa};
  padding: ${(props) => (props.variant === 'home' ? '0px' : '5px')};
`

export const ItemTitle = styled.h3<ItemProps>`
  font-size: ${(props) => (props.variant === 'home' ? '18px' : '16px')};
  color: ${(props) => (props.variant === 'home' ? cores.Rosa : cores.Amarelo)};
  font-weight: 700;
`

export const ItemDescription = styled.p<ItemProps>`
  font-size: 14px;
  color: ${(props) => (props.variant === 'home' ? cores.Rosa : cores.Amarelo)};
  font-weight: 400;
  line-height: 20px;
  height: 100px;
`

export const ItemImage = styled.img<ItemProps>`
  width: ${(props) => (props.variant === 'home' ? '482px' : '304px')};
  height: ${(props) => (props.variant === 'home' ? '217px' : '167px')};
  object-fit: cover;
`

export const ItemInfos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

export const CardContainer = styled.div<ItemProps>`
  padding: ${(props) => (props.variant === 'home' ? '0px 10px' : '5px 0px')};

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 13px;
  }

  button {
    width: ${(props) => (props.variant === 'home' ? '82px' : '304px')};
    height: ${(props) => (props.variant === 'home' ? '24px' : '24px')};
    font-size: ${(props) => (props.variant === 'home' ? '14px' : '14px')};
    background-color: ${(props) =>
      props.variant === 'home' ? cores.Rosa : cores.Amarelo};
    color: ${(props) =>
      props.variant === 'home' ? cores.RosaClaro : cores.Rosa};
    margin-top: ${(props) => (props.variant === 'home' ? '10px' : '65px')};
  }
`

export const ItemRating = styled.p`
  color: ${cores.Rosa};
  font-weight: 900;
  font-size: 18px;
`
export const Tag = styled.p<TagProps>`
  background-color: ${cores.Rosa};
  color: ${cores.RosaClaro};
  font-size: 12px;
  width: ${(props) => (props.size === 'big' ? '121px' : '61px')};
  height: 26px;
  text-align: center;
  padding-top: 5px;
`
