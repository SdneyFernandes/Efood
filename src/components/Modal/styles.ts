import styled from 'styled-components'
import { cores } from '../../styles'

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

export const ModalContainer = styled.div`
  background: ${cores.Rosa};
  padding: 20px;
  width: 1024px;
  height: 344px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }
`
export const ModalDescription = styled.div`
  margin-left: 25px;
  height: 100%;
  font-size: 14px;
  color: ${cores.Amarelo};
  h2 {
    margin-top: 10px;
    font-size: 18px;
    font-size: bold;
  }

  p {
    margin: 10px 0;
  }

  button {
    width: 218px;
    height: 24px;
  }
`
export const Notification = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${cores.Amarelo};
  color: ${cores.Rosa};
  font-weight: bold;
  padding: 10px 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`
