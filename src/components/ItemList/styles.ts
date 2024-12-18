import styled from 'styled-components'

type ListProps = {
  columns: number
  variant?: 'home' | 'categories'
}

export const ListContainer = styled.main<ListProps>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const List = styled.ul<ListProps>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  gap: 30px;
  margin: 100px auto;
  width: 1024px;
`
