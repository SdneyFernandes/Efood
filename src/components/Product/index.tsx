import { Link } from 'react-router-dom'
import Tag from '../Tag'
import {
  Descricao,
  Card,
  Titulo,
  Imagem,
  Infos,
  TituloContainer,
  Nota,
  CardContainer,
} from './styles'

type Props = {
  title: string
  description: string
  image: string
  destaque?: string
  infos?: string
  category?: string
  nota?: string
  button: string
  variant: 'home' | 'categories'
}

const Product = ({
  title,
  description,
  image,
  button,
  variant,
  destaque,
  category,
  nota,
}: Props) => (
  <Card variant={variant}>
    <Imagem variant={variant} src={image} alt={title} />
    {variant === 'home' && (
      <Infos>
        {destaque && <Tag key={destaque}>{destaque}</Tag>}
        {category && <Tag key={category}>{category}</Tag>}
      </Infos>
    )}
    <CardContainer variant={variant}>
      <TituloContainer>
        <Titulo variant={variant}>{title}</Titulo>
        {variant === 'home' && nota && <Nota>{nota}</Nota>}
      </TituloContainer>
      <Descricao variant={variant}>{description}</Descricao>
      <Link to="/categories" className="link">
        {button}
      </Link>
    </CardContainer>
  </Card>
)

export default Product
