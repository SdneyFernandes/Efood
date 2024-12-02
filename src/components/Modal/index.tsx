import React from 'react'
import { ModalContainer, ModalOverlay, ModalDescription } from './styles'
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
  if (!isOpen || !data) return null

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <img src={data.capa} alt={data.titulo} />
        <ModalDescription>
          <h2>{data.titulo}</h2>
          <p>{data.descricao}</p>
          <p>Serve de {data.porcao}</p>
          <button
            onClick={() => {
              dispatch(
                addItem({
                  id: data.id,
                  titulo: data.titulo,
                  preco: data.preco,
                  capa: data.capa,
                })
              )
              alert('Adicionado ao carrinho')
            }}
          >
            Adicionar ao carrinho - R$ {data.preco.toFixed(2)}
          </button>
        </ModalDescription>
      </ModalContainer>
    </ModalOverlay>
  )
}

export default Modal
