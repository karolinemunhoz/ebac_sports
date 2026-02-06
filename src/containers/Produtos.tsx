import Produto from '../components/Produto'
import { useGetProdutosQuery } from '../store/services/produtoApi'
import { useDispatch, useSelector } from 'react-redux'
import { adicionar } from '../store/reducers/carrinho'
import { alternarFavorito } from '../store/reducers/favoritos'
import { RootState } from '../store'
import * as S from './styles'

const ProdutosComponent = () => {
  const { data: produtos = [] } = useGetProdutosQuery()
  const favoritos = useSelector((state: RootState) => state.favoritos.itens)
  const dispatch = useDispatch()

  const estaNosFavoritos = (produtoId: number) =>
    favoritos.some((f) => f.id === produtoId)

  return (
    <S.Produtos>
      {produtos.map((produto) => (
        <Produto
          key={produto.id}
          produto={produto}
          estaNosFavoritos={estaNosFavoritos(produto.id)}
          favoritar={() => dispatch(alternarFavorito(produto))}
          aoComprar={() => dispatch(adicionar(produto))}
        />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
