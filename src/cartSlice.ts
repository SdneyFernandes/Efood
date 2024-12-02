import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartItem = {
  id: number
  titulo: string
  preco: number
  capa: string
}

type CartState = {
  items: CartItem[]
  total: number // Adicione a propriedade total
}

const initialState: CartState = {
  items: [],
  total: 0, // Inicialize como zero
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload)
      state.total = state.items.reduce((acc, item) => acc + item.preco, 0) // Recalcula o total
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
      state.total = state.items.reduce((acc, item) => acc + item.preco, 0) // Recalcula o total
    },
  },
})

export const { addItem, removeItem } = cartSlice.actions
export default cartSlice.reducer
