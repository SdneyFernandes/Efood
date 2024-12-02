import styled from 'styled-components'

type ListProps = {
  columns: number
  variant?: 'home' | 'categories'
}

export const ListContainer = styled.main<ListProps>`
  width: 990px;
  height: 100%;
  margin: 0 auto;
`

export const List = styled.ul<ListProps>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  margin: 100px 0;
  column-gap: 30px;
  row-gap: 30px;
  height: 100%;
`
