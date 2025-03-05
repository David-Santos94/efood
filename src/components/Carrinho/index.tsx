import {
  BotaoContinuar,
  ContainerCarrinho,
  ContainerValorTotal,
  ContentCarrinho,
  Deletar,
  ImgDeletar,
  ImgProdutoCarrinho,
  PrecoProdutoCarrinho,
  ProdutoCarrinho,
  TituloProdutoCarrinho,
  ValorTotal
} from './styles'
import deletar from '../../assets/images/deletar.png'
import { Overlay } from '../../styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/carrinho'

const Carrinho = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.carrinho)
  const dispatch = useDispatch()

  const closeCarrinho = () => {
    dispatch(close())
  }

  const valorTotal = () => {
    return items
      .reduce((acumulador, valorAtual) => {
        return (acumulador += valorAtual.preco)
      }, 0)
      .toFixed(2)
  }

  const removerDoCarrinho = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <ContainerCarrinho className={isOpen ? 'open' : ''}>
      <ContentCarrinho>
        {items.map((item) => (
          <ProdutoCarrinho key={item.id}>
            <ImgProdutoCarrinho src={item.imagem} alt="foto produto" />
            <TituloProdutoCarrinho>{item.nome}</TituloProdutoCarrinho>
            <PrecoProdutoCarrinho>R$ {item.preco}</PrecoProdutoCarrinho>
            <Deletar
              onClick={() => {
                removerDoCarrinho(item.id)
              }}
            >
              <ImgDeletar src={deletar} alt="deletar" />
            </Deletar>
          </ProdutoCarrinho>
        ))}
        <ContainerValorTotal>
          <ValorTotal>Valor total</ValorTotal>
          <ValorTotal>R$ {valorTotal()}</ValorTotal>
        </ContainerValorTotal>
        <BotaoContinuar>Continuar com a entrega</BotaoContinuar>
      </ContentCarrinho>
      <Overlay onClick={closeCarrinho} />
    </ContainerCarrinho>
  )
}

export default Carrinho
