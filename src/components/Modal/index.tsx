import React, { useState } from 'react'
import {
  ModalContainer,
  ModalOverlay,
  ModalDescription,
  Notification,
} from './styles'
import { useDispatch } from 'react-redux'
import { addItem } from '../../cartSlice'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  data: {
    id: number
    capa: string
    titulo: string
    descricao: string
    porcao: string
    preco: number
  } | null
}

const Modal = ({ isOpen, onClose, data }: ModalProps) => {
  const dispatch = useDispatch()
  const [notification, setNotification] = useState<string | null>(null)

  if (!isOpen || !data) return null

  const handleAddToCart = () => {
    dispatch(
      addItem({
        id: data.id,
        titulo: data.titulo,
        preco: data.preco,
        capa: data.capa,
      })
    )
    setNotification(`${data.titulo} foi adicionado ao carrinho!`)

    setTimeout(() => setNotification(null), 4000)
  }

  return (
    <>
      <ModalOverlay onClick={onClose}>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          <img src={data.capa} alt={data.titulo} />
          <ModalDescription>
            <h2>{data.titulo}</h2>
            <p>{data.descricao}</p>
            <p>Serve de {data.porcao}</p>
            <button className="btn" onClick={handleAddToCart}>
              Adicionar ao carrinho - R$ {data.preco.toFixed(2)}
            </button>
          </ModalDescription>
        </ModalContainer>
      </ModalOverlay>
      {notification && <Notification>{notification}</Notification>}
    </>
  )
}

export default Modal
