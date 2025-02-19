import ProdutoInfos from '../../models/ProdutoInfos'
import { Container } from '../../styles'
import Produto from '../Produto'
import { Cardapio } from './styles'

type Props = {
  produtoinfos: ProdutoInfos[]
}

const ListaProdutos = ({ produtoinfos }: Props) => (
  <Container>
    <Cardapio>
      {produtoinfos.map((produtoinfos) => (
        <Produto
          key={produtoinfos.id}
          imagem={produtoinfos.imagem}
          nome={produtoinfos.nome}
          descricao={produtoinfos.descricao}
        />
      ))}
    </Cardapio>
  </Container>
)

export default ListaProdutos
