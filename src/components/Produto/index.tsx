import {
  BotaoAdicionar,
  CardProduto,
  DescricaoProduto,
  ImgProduto,
  NomeProduto
} from './styles'

type Props = {
  imagem: string
  nome: string
  descricao: string
}

const Produto = ({ imagem, nome, descricao }: Props) => (
  <CardProduto>
    <ImgProduto src={imagem} alt="comida" />
    <NomeProduto>{nome}</NomeProduto>
    <DescricaoProduto>{descricao}</DescricaoProduto>
    <BotaoAdicionar>Adicionar ao carrinho</BotaoAdicionar>
  </CardProduto>
)

export default Produto
