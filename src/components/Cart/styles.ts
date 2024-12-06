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
`

export const CartContainer = styled.div`
  background: ${cores.Rosa};
  width: 365px;
  padding: 20px;
  height: 100%;
  overflow-y: auto;
  box-shadow: -2px 0px 8px rgba(0, 0, 0, 0.2);
`

export const CartItem = styled.div`
  width: 320px;
  height: 100px;
  display: flex;
  padding: 10px 10px;
  margin-top: 10px;
  background-color: ${cores.Amarelo};
  color: ${cores.Rosa};

  button {
    background: none;
    border: none;
    margin-left: 165px;
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
  font-weight: bold;
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
    margin-left: 170px;
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
  width: 320px;
  height: 30px;
  border-radius: 2px;
`

export const TitleForm = styled.h3`
  color: ${cores.Amarelo};
  font-weight: bold;
  margin-bottom: 15px;
`
export const Form = styled.form`
  color: ${cores.Amarelo};
  margin-right: 4px;
  width: 320px;
  margin-bottom: 30px;

  div {
    display: flex;
    flex-direction: column;

    label {
      margin: 4px 0px;
    }

    input {
      background-color: ${cores.Amarelo};
      height: 40px;
      border: none;
      font-size: 16px;
      padding-left: 6px;
      font-weight: bold;
    }
  }

  .deliveryCEP,
  .CartNumber,
  .expiryMonth {
    displey: flex;
    flex-direction: row;
    justify-content: space-between;

    input {
      width: 140px;
    }

    .cardNumber {
      width: 220px;
    }

    .cvv {
      width: 70px;
    }

    .month {
      width: 140px;
    }

    .year {
      width: 150px;
    }
  }
`
