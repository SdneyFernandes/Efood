import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${cores.Amarelo};
  width: 1366px;
  height: 298px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 70px;
`

export const Icons = styled.div`
  width: 88px;
  height: 24px;
  margin-top: 35px;
`

export const Icon = styled.img`
  padding-left: 5px;
`

export const Fdescricao = styled.p`
  color: ${cores.Rosa};
  font-size: 10px;
  width: 480px;
  height: 24px;
  margin-top: 60px;
  font-weight: 400;
`
