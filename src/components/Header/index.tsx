import * as S from './styles'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { useEffect } from 'react'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'

const Header = () => {
  const { itens, erro } = useSelector((state: RootState) => state.carrinho)

  const favoritos = useSelector((state: RootState) => state.favoritos.itens)

  const valorTotal = itens.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  useEffect(() => {
    if (erro) {
      alert(erro)
    }
  }, [erro])

  return (
    <S.Header>
      <h1>EBAC Sports</h1>

      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} />
        <span>
          {itens.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
