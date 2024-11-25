import styled from 'styled-components'
import image2 from '../../assets/images/image2.png'
import { cores } from '../../styles'

export const HeroContainer = styled.div`
  position: relative;
  width: 1366px;
  height: 280px;
  background-image: url(${image2});
  padding-top: 20px;
  margin-bottom: 40px;

  div {
    position: absolute;
    color: ${cores.Branco};
    font-size: 32px;
    margin-left: 155px;
    font-weight: 100;

    .titulo {
      font-weight: 900;
      margin-top: 155px;
    }
  }
`
