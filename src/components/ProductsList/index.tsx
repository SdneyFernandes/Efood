import Comida from '../../models/Comida'
import Product from '../Product'
import { ProductContainer, List } from './styles'

type Props = {
  comidas: Comida[]
  columns: number
  variant: 'home' | 'categories'
}

const ProductsList = ({ comidas, columns, variant }: Props) => (
  <ProductContainer variant={variant}>
    <List columns={columns}>
      {comidas.map((comida) => (
        <Product
          key={comida.id}
          title={comida.title}
          description={comida.description}
          image={comida.image}
          destaque={comida.destaque}
          infos={comida.infos}
          button={comida.button}
          category={comida.category}
          nota={comida.nota}
          variant={variant}
        />
      ))}
    </List>
  </ProductContainer>
)

export default ProductsList
