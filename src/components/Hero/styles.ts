import styled from 'styled-components'
import { cores } from '../../styles'

export const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  overflow: hidden;
  padding-top: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }

  div {
    position: absolute;
    color: ${cores.Branco};
    font-size: 32px;
    margin-left: 155px;
    font-weight: 100;
    z-index: 2;

    .titulo {
      font-weight: 900;
      margin-top: 155px;
    }
  }
`
