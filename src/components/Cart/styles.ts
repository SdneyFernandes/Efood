import styled from 'styled-components'
import { cores } from '../../styles'

export const CartOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-end;
  z-index: 3;
`

export const CartContainer = styled.div`
  background: ${cores.Rosa};
  width: 360px;
  padding: 8px;
  height: 100%;
  overflow-y: auto;
  box-shadow: -2px 0px 8px rgba(0, 0, 0, 0.2);
  padding-top: 25px;
`

export const CartItem = styled.div`
  width: 344px;
  height: 100px;
  display: flex;
  padding: 10px 10px;
  margin-top: 10px;
  background-color: ${cores.Amarelo};
  color: ${cores.Rosa};

  button {
    background: none;
    border: none;
    margin-top: 20px;
    margin-left: 225px;
    cursor: pointer;
  }

  .ItemCar {
    margin-left: 10px;
  }
`
export const CartImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`
export const CartTitle = styled.h4`
  font-size: 18px;
  font-weight: 900;
`
export const CartDescription = styled.p`
  font-size: 14px;
  margin-top: 10px;
`

export const CartTotal = styled.div`
  margin-top: 30px;
  font-size: 14px;
  font-weight: bold;
  color: ${cores.Amarelo};

  span {
    margin-left: 205px;
  }
`
export const Message = styled.div`
  color: ${cores.Amarelo};
  font-weight: bold;
  border: 1px solid yellow;
  padding: 5px 5px;
`

export const ContinueButton = styled.button`
  margin-top: 10px;
  width: 344px;
  height: 24px;
`

export const TitleForm = styled.h3`
  color: ${cores.Amarelo};
  font-weight: 700;
  margin-bottom: 15px;
  font-size: 16px;
`
export const Form = styled.div`
  color: ${cores.Amarelo};
  width: 344px;
  font-size: 14px;
  font-weight: 700;
  margin: 10px 0 15px 0;

  div {
    display: flex;
    flex-direction: column;

    label {
      margin: 10px 0px 4px 0px;
    }

    input {
      height: 32px;
      border: none;
      padding-left: 6px;
      font-weight: 700;
    }
  }

  .deliveryCEP,
  .CartNumber,
  .expiryMonth {
    displey: flex;
    flex-direction: row;
    justify-content: space-between;

    .CEP,
    .deliveryNumber,
    .month,
    .year {
      width: 155px;
    }
    .cardNumber {
      width: 228px;
    }

    .cvv {
      width: 87px;
    }
  }
`
