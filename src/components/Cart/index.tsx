import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { removeItem } from '../../cartSlice'
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
} from './styles'

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

  const dispatch = useDispatch()
  const { items, total } = useSelector((state: RootState) => state.cart)

  if (!isOpen) return null

  const handleDeliverySubmit = () => {
    // Validação dos dados de entrega
    const isValid = Object.values(deliveryData).every(
      (field) => field.trim() !== ''
    )
    if (!isValid) {
      alert('Por favor, preencha todos os campos de entrega!')
      return
    }
    setStep('payment')
  }

  const handlePaymentSubmit = async () => {
    // Validação dos dados de pagamento
    const isValid = Object.values(paymentData).every(
      (field) => field.trim() !== ''
    )
    if (!isValid) {
      alert('Por favor, preencha todos os campos de pagamento!')
      return
    }

    try {
      // Montar o payload para a API
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

      // Enviar o pedido para a API
      const response = await fetch(
        'https://fake-api-tau.vercel.app/api/efood/checkout',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }
      )

      if (!response.ok) {
        throw new Error('Erro ao processar o pedido')
      }

      const data = await response.json()

      // Atualizar a tela de confirmação com os dados retornados
      setOrderID(data.orderID)
      setStep('confirmation')
    } catch (error) {
      alert('Ocorreu um erro ao processar o pedido. Tente novamente!')
    }
  }

  return (
    <CartOverlay onClick={onClose}>
      <CartContainer onClick={(e) => e.stopPropagation()}>
        {step === 'cart' && (
          <>
            {items.map((item) => (
              <CartItem key={item.id}>
                <CartImage src={item.capa} alt={item.titulo} />
                <div className="ItemCar">
                  <CartTitle>{item.titulo}</CartTitle>
                  <CartDescription>R$ {item.preco.toFixed(2)}</CartDescription>
                  <button onClick={() => dispatch(removeItem(item.id))}>
                    🗑️
                  </button>
                </div>
              </CartItem>
            ))}
            <CartTotal>
              <p>
                Valor Total <span>R$ {total.toFixed(2)}</span>{' '}
              </p>
            </CartTotal>
            <ContinueButton onClick={() => setStep('delivery')}>
              Continuar com a entrega
            </ContinueButton>
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
              <div className="number">
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
            <ContinueButton onClick={handleDeliverySubmit}>
              Continuar com o pagamento
            </ContinueButton>
            <ContinueButton onClick={() => setStep('cart')}>
              Voltar para o carrinho
            </ContinueButton>
          </>
        )}

        {step === 'payment' && (
          <>
            <TitleForm>
              Pagamento - Valor a pagar R$ {total.toFixed(2)}{' '}
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
              <div className="number">
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
              <div className="number">
                <div>
                  <label htmlFor="expiryMonth">Mês de vencimento</label>
                  <input
                    className="mes"
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
                    className="ano"
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
            <ContinueButton onClick={handlePaymentSubmit}>
              Finalizar Pagamento
            </ContinueButton>
            <ContinueButton onClick={() => setStep('delivery')}>
              Voltar para editar endereço
            </ContinueButton>
          </>
        )}

        {step === 'confirmation' && (
          <>
            {orderID ? (
              <>
                <h3>Pedido Realizado - {orderID} </h3>
                <p>Destinatário: {deliveryData.receiver}</p>
                <p>
                  Endereço: {deliveryData.address}, {deliveryData.city},{' '}
                  {deliveryData.cep}
                </p>
                <p>Total: R$ {total.toFixed(2)}</p>
                <p>
                  Estamos felizes em informar que seu pedido já está em processo
                  de preparação e, em breve, será entregue no endereço
                  fornecido. Gostaríamos de ressaltar que nossos entregadores
                  não estão autorizados a realizar cobranças extras. Lembre-se
                  da importância de higienizar as mãos após o recebimento do
                  pedido, garantindo assim sua segurança e bem-estar durante a
                  refeição. Esperamos que desfrute de uma deliciosa e agradável
                  experiência gastronômica. Bom apetite!
                </p>
                <button onClick={onClose}>Concluir</button>
              </>
            ) : (
              <p>Erro ao carregar os detalhes do pedido. Tente novamente.</p>
            )}
          </>
        )}
      </CartContainer>
    </CartOverlay>
  )
}

export default Cart
