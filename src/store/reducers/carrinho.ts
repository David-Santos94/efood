import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ModalState } from '../../components/ListaProdutos'

type CarrinhoState = {
  items: ModalState[]
  isOpen: boolean
}

const initialState: CarrinhoState = {
  items: [],
  isOpen: false
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ModalState>) => {
      const produto = state.items.find((item) => item.id === action.payload.id)

      if (!produto) {
        state.items.push(action.payload)
      } else {
        alert('O Produto já foi adicionado')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, remove, open, close } = carrinhoSlice.actions
export default carrinhoSlice.reducer
