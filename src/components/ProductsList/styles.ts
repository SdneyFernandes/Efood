import styled from 'styled-components'

type ProductContainerProps = {
  variant?: 'home' | 'categories'
}
type ListProps = {
  columns: number
  variant?: 'home' | 'categories'
}

export const ProductContainer = styled.main<ProductContainerProps>`
  width: 1024px;
  height: ${(props) => (props.variant === 'home' ? '1320px' : '810px')};
  margin: 0 auto;
`

export const List = styled.ul<ListProps>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  margin-top: ${(props) => (props.variant === 'home' ? '0px' : '60px')};
  column-gap: 30px;
  row-gap: 30px;
`
