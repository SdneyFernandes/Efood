import { useNavigate } from 'react-router-dom'
import {
  Card,
  CardContainer,
  ItemDescription,
  ItemImage,
  ItemInfos,
  ItemRating,
  ItemTitle,
} from './styles'
import Tag from '../Tag'

type Props = {
  id: number
  titulo: string
  descricao: string
  capa: string
  buttonText: string
  onClick?: () => void
  porcao?: string
  preco?: number
  destacado?: string
  avaliacao?: string
  tipo?: string
  variant: 'home' | 'categories'
}

const ItemCard = ({
  id,
  titulo,
  descricao,
  capa,
  buttonText,
  onClick,
  destacado,
  tipo,
  avaliacao,
  variant,
}: Props) => {
  const navigate = useNavigate()

  return (
    <Card variant={variant}>
      <ItemImage variant={variant} src={capa} alt={titulo} />
      {variant === 'home' && (
        <ItemInfos>
          {destacado && <Tag key={destacado}>{destacado}</Tag>}
          {tipo && <Tag key={tipo}>{tipo}</Tag>}
        </ItemInfos>
      )}
      <CardContainer variant={variant}>
        <div>
          <ItemTitle variant={variant}>{titulo}</ItemTitle>
          {variant === 'home' && avaliacao && (
            <ItemRating>{avaliacao}⭐</ItemRating>
          )}
        </div>
        <ItemDescription variant={variant}>{descricao}</ItemDescription>
        {variant === 'home' ? (
          <button onClick={() => navigate(`/categories/${id}`)}>
            {buttonText}
          </button>
        ) : (
          <button onClick={onClick}>{buttonText}</button>
        )}
      </CardContainer>
    </Card>
  )
}

export default ItemCard
