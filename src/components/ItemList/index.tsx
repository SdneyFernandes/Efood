import React from 'react'
import ItemCard from '../ItemCard'
import { List, ListContainer } from './styles'
import Item from '../../models/Item'

type Props = {
  items: Item[]
  columns: number
  variant: 'home' | 'categories'
  onItemClick?: (item: Item) => void
}

const ItemList = ({ items, columns, variant, onItemClick }: Props) => (
  <ListContainer columns={columns} variant={variant}>
    <List columns={columns}>
      {items.map((item) => (
        <ItemCard
          key={item.id}
          id={item.id}
          titulo={item.titulo}
          descricao={item.descricao}
          capa={item.capa}
          porcao={item.porcao}
          preco={item.preco}
          buttonText={item.buttonText}
          destacado={item.destacado}
          tipo={item.tipo}
          avaliacao={item.avaliacao}
          onClick={
            variant === 'categories' ? () => onItemClick?.(item) : undefined
          }
          variant={variant}
        />
      ))}
    </List>
  </ListContainer>
)

export default ItemList
