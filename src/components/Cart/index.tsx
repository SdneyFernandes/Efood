import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { removeItem, setCartItems } from '../../cartSlice'
import {
  CartContainer,
  CartDescription,
  CartImage,
  CartItem,
  CartOverlay,
  CartTitle,
  CartTotal,
  ContinueButton,
  Form,
  TitleForm,
  Message,
} from './styles'

import lixeira from '../../assets/images/lixeira.png'

const Cart = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) => {
  const [step, setStep] = useState<
    'cart' | 'delivery' | 'payment' | 'confirmation'
  >('cart')
  const [deliveryData, setDeliveryData] = useState({
    receiver: '',
    address: '',
    city: '',
    cep: '',
    number: '',
    complement: '',
  })
  const [paymentData, setPaymentData] = useState({
    cardName: '',
    cardNumber: '',
    cvv: '',
    expiryMonth: '',
    expiryYear: '',
  })
  const [orderID, setOrderID] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)

  const dispatch = useDispatch()
  const { items, total } = useSelector((state: RootState) => state.cart)

  useEffect(() => {
    const savedCartState = localStorage.getItem('cartState')
    if (savedCartState) {
      const parsedCart = JSON.parse(savedCartState)
      if (parsedCart.items.length > 0) {
        dispatch(setCartItems(parsedCart.items))
      }
    }
  }, [dispatch])

  useEffect(() => {
    const cartState = { items, total }
    localStorage.setItem('cartState', JSON.stringify(cartState))
  }, [items, total])

  useEffect(() => {
    if (!isOpen) return
    setDeliveryData({
      receiver: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      complement: '',
    })
    setPaymentData({
      cardName: '',
      cardNumber: '',
      cvv: '',
      expiryMonth: '',
      expiryYear: '',
    })
    setOrderID(null)
    setMessage(null)
  }, [isOpen])

  if (!isOpen) return null

  const validateDelivery = () => {
    const { receiver, address, city, cep, number } = deliveryData
    const cepRegex = /^[0-9]{5}-?[0-9]{3}$/

    if (!receiver || !address || !city || !cep || !number) {
      return 'Por favor, preencha todos os campos obrigatórios!'
    }
    if (!cepRegex.test(cep)) {
      return 'Por favor, insira um CEP válido (ex: 12345-678).'
    }
    return null
  }

  const validatePayment = () => {
    const { cardName, cardNumber, cvv, expiryMonth, expiryYear } = paymentData
    const cardNumberRegex = /^[0-9]{16}$/
    const cvvRegex = /^[0-9]{3}$/
    const expiryMonthRegex = /^(0[1-9]|1[0-2])$/
    const expiryYearRegex = /^[0-9]{4}$/

    if (!cardName || !cardNumber || !cvv || !expiryMonth || !expiryYear) {
      return 'Por favor, preencha todos os campos de pagamento!'
    }
    if (!cardNumberRegex.test(cardNumber)) {
      return 'Por favor, insira um número de cartão válido (16 dígitos).'
    }
    if (!cvvRegex.test(cvv)) {
      return 'Por favor, insira um CVV válido (3 dígitos).'
    }
    if (!expiryMonthRegex.test(expiryMonth)) {
      return 'Por favor, insira um mês de vencimento válido (01-12).'
    }
    if (!expiryYearRegex.test(expiryYear)) {
      return 'Por favor, insira um ano de vencimento válido (ex: 2023).'
    }
    return null
  }

  const handleDeliverySubmit = () => {
    const errorMessage = validateDelivery()
    if (errorMessage) {
      setMessage(errorMessage)
      return
    }
    setStep('payment')
    setMessage(null)
  }

  const handlePaymentSubmit = async () => {
    const errorMessage = validatePayment()
    if (errorMessage) {
      setMessage(errorMessage)
      return
    }

    const payload = {
      products: items.map((item) => ({ id: item.id, price: item.preco })),
      delivery: {
        receiver: deliveryData.receiver,
        address: {
          description: deliveryData.address,
          city: deliveryData.city,
          zipCode: deliveryData.cep,
          number: Number(deliveryData.number),
          complement: deliveryData.complement,
        },
      },
      payment: {
        card: {
          name: paymentData.cardName,
          number: paymentData.cardNumber,
          code: Number(paymentData.cvv),
          expires: {
            month: Number(paymentData.expiryMonth),
            year: Number(paymentData.expiryYear),
          },
        },
      },
    }

    try {
      const response = await fetch(
        'https://fake-api-tau.vercel.app/api/efood/checkout',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }
      )

      if (!response.ok) throw new Error('Erro ao processar o pedido')

      const data = await response.json()
      setOrderID(data.orderId)
      setStep('confirmation')
      setMessage(null)
    } catch (error) {
      setMessage('Ocorreu um erro ao processar o pedido. Tente novamente!')
    }
  }

  return (
    <CartOverlay onClick={onClose}>
      <CartContainer onClick={(e) => e.stopPropagation()}>
        {message && <Message>{message}</Message>}
        {step === 'cart' && (
          <>
            {items.length === 0 ? (
              <Message>
                Seu carrinho está vazio. Adicione itens para continuar.
              </Message>
            ) : (
              <>
                {items.map((item) => (
                  <CartItem key={item.id}>
                    <CartImage src={item.capa} alt={item.titulo} />
                    <div className="ItemCar">
                      <CartTitle>{item.titulo}</CartTitle>
                      <CartDescription>
                        R$ {item.preco.toFixed(2)}
                      </CartDescription>
                      <button onClick={() => dispatch(removeItem(item.id))}>
                        <img src={lixeira} alt="Remover item" />
                      </button>
                    </div>
                  </CartItem>
                ))}
                <CartTotal>
                  <p>
                    Valor Total <span>R$ {total.toFixed(2)}</span>
                  </p>
                </CartTotal>
                <ContinueButton
                  className="btn"
                  onClick={() => setStep('delivery')}
                >
                  Continuar com a entrega
                </ContinueButton>
              </>
            )}
          </>
        )}

        {step === 'delivery' && (
          <>
            <TitleForm>Entrega</TitleForm>
            <Form>
              <div>
                <label htmlFor="nome">Quem irá receber</label>
                <input
                  name="nome"
                  type="text"
                  value={deliveryData.receiver}
                  onChange={(e) =>
                    setDeliveryData({
                      ...deliveryData,
                      receiver: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label htmlFor="address">Endereço</label>
                <input
                  type="text"
                  name="address"
                  value={deliveryData.address}
                  onChange={(e) =>
                    setDeliveryData({
                      ...deliveryData,
                      address: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label htmlFor="city">Cidade</label>
                <input
                  type="text"
                  name="city"
                  value={deliveryData.city}
                  onChange={(e) =>
                    setDeliveryData({ ...deliveryData, city: e.target.value })
                  }
                />
              </div>
              <div className="deliveryCEP">
                <div>
                  <label htmlFor="CEP">CEP</label>
                  <input
                    type="text"
                    name="CEP"
                    value={deliveryData.cep}
                    onChange={(e) =>
                      setDeliveryData({ ...deliveryData, cep: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label htmlFor="number">Número</label>
                  <input
                    type="text"
                    name="number"
                    value={deliveryData.number}
                    onChange={(e) =>
                      setDeliveryData({
                        ...deliveryData,
                        number: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div>
                <label htmlFor="complement">Complemento (opcional)</label>
                <input
                  type="text"
                  name="complement"
                  value={deliveryData.complement}
                  onChange={(e) =>
                    setDeliveryData({
                      ...deliveryData,
                      complement: e.target.value,
                    })
                  }
                />
              </div>
            </Form>
            <ContinueButton className="btn" onClick={handleDeliverySubmit}>
              Continuar com o pagamento
            </ContinueButton>
            <ContinueButton className="btn" onClick={() => setStep('cart')}>
              Voltar para o carrinho
            </ContinueButton>
          </>
        )}

        {step === 'payment' && (
          <>
            <TitleForm>
              Pagamento - Valor a pagar R$ {total.toFixed(2)}
            </TitleForm>
            <Form>
              <div>
                <label htmlFor="name">Nome no cartão</label>
                <input
                  type="text"
                  name="nome"
                  value={paymentData.cardName}
                  onChange={(e) =>
                    setPaymentData({ ...paymentData, cardName: e.target.value })
                  }
                />
              </div>
              <div className="CartNumber">
                <div>
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <input
                    className="cardNumber"
                    type="text"
                    name="number"
                    value={paymentData.cardNumber}
                    onChange={(e) =>
                      setPaymentData({
                        ...paymentData,
                        cardNumber: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label htmlFor="cvv">CVV</label>
                  <input
                    className="cvv"
                    type="text"
                    name="cvv"
                    value={paymentData.cvv}
                    onChange={(e) =>
                      setPaymentData({ ...paymentData, cvv: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="expiryMonth">
                <div>
                  <label htmlFor="expiryMonth">Mês de vencimento</label>
                  <input
                    className="month"
                    type="text"
                    name="expiryMonth"
                    value={paymentData.expiryMonth}
                    onChange={(e) =>
                      setPaymentData({
                        ...paymentData,
                        expiryMonth: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label htmlFor="expiryYear">Ano de vencimento</label>
                  <input
                    className="year"
                    type="text"
                    name="expiryYear"
                    value={paymentData.expiryYear}
                    onChange={(e) =>
                      setPaymentData({
                        ...paymentData,
                        expiryYear: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </Form>
            <ContinueButton className="btn" onClick={handlePaymentSubmit}>
              Finalizar Pagamento
            </ContinueButton>
            <ContinueButton className="btn" onClick={() => setStep('delivery')}>
              Voltar para editar endereço
            </ContinueButton>
          </>
        )}

        {step === 'confirmation' && (
          <>
            {orderID ? (
              <Form>
                <TitleForm>Pedido Realizado - {orderID}</TitleForm>
                <p>
                  Destinatário: <span> {deliveryData.receiver}</span>
                </p>
                <p>
                  Endereço:{' '}
                  <span>
                    {deliveryData.address}, {deliveryData.city},{' '}
                    {deliveryData.cep}
                  </span>
                </p>
                <p>
                  Total:
                  <span> R$ {total.toFixed(2)}</span>
                </p>
                <br />
                <p>
                  Estamos felizes em informar que seu pedido já está em processo
                  de preparação e, em breve, será entregue no endereço
                  fornecido.
                </p>
                <br />
                <p>
                  Gostaríamos de ressaltar que nossos entregadores não estão
                  autorizados a realizar cobranças extras.
                </p>
                <br />
                <p>
                  Lembre-se da importância de higienizar as mãos após o
                  recebimento do pedido, garantindo assim sua segurança e
                  bem-estar durante a refeição.
                </p>
                <br />
                <p>
                  Esperamos que desfrute de uma deliciosa e agradável
                  experiência gastronômica. Bom apetite!
                </p>
                <br />
                <ContinueButton className="btn" onClick={onClose}>
                  Concluir
                </ContinueButton>
              </Form>
            ) : (
              <>
                <Message>
                  Erro ao carregar os detalhes do pedido. Tente novamente.
                </Message>
                <ContinueButton className="btn" onClick={() => setStep('cart')}>
                  Sair
                </ContinueButton>
              </>
            )}
          </>
        )}
      </CartContainer>
    </CartOverlay>
  )
}

export default Cart
