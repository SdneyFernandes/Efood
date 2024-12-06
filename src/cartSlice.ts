import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartItem = {
  id: number
  titulo: string
  preco: number
  capa: string
}

type CartState = {
  items: CartItem[]
  total: number
}

const getInitialCartState = (): CartState => {
  const savedCart = localStorage.getItem('cartState')
  return savedCart
    ? JSON.parse(savedCart)
    : {
        items: [],
        total: 0,
      }
}

const initialState: CartState = getInitialCartState()

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload)
      state.total = state.items.reduce((acc, item) => acc + item.preco, 0)
      saveCartStateToLocalStorage(state)
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
      state.total = state.items.reduce((acc, item) => acc + item.preco, 0)
      saveCartStateToLocalStorage(state)
    },
    setCartItems: (state, action: PayloadAction<CartItem[]>) => {
      state.items = action.payload
      state.total = state.items.reduce((acc, item) => acc + item.preco, 0)
      saveCartStateToLocalStorage(state)
    },
  },
})

const saveCartStateToLocalStorage = (state: CartState) => {
  localStorage.setItem('cartState', JSON.stringify(state))
}

export const { addItem, removeItem, setCartItems } = cartSlice.actions
export default cartSlice.reducer
