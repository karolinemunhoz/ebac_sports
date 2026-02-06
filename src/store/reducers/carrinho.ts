import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../models/Produtos'

type CarrinhoState = {
  itens: Produto[]
  erro?: string
}

const initialState: CarrinhoState = {
  itens: [],
  erro: undefined
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      const existe = state.itens.find((p) => p.id === produto.id)

      if (existe) {
        state.erro = 'Produto já adicionado'
      } else {
        state.itens.push(produto)
        state.erro = undefined
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
