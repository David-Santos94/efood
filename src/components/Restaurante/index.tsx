import {
  Cabecalho,
  Capa,
  Card,
  Descricao,
  Nome,
  Nota,
  SaibaMaisBtn,
  Sobre,
  Tag,
  TagDestaque,
  Valor
} from './styles'
import estrela from '../../assets/images/estrela.png'
import { Link } from 'react-router-dom'

type Props = {
  imagem: string
  destaque: boolean
  culinaria: string
  nome: string
  nota: number
  descricao: string
  id: number
}

const Restaurante = ({
  imagem,
  destaque,
  culinaria,
  nome,
  nota,
  descricao,
  id
}: Props) => (
  <Card>
    <Capa src={imagem} alt="restaurante" />
    {destaque && <TagDestaque>Destaque da semana</TagDestaque>}
    <Tag>{culinaria}</Tag>
    <Sobre>
      <Cabecalho>
        <Nome>{nome}</Nome>
        <Nota>
          <Valor>{nota}</Valor>
          <img src={estrela} alt="estrela" />
        </Nota>
      </Cabecalho>
      <Descricao>{descricao}</Descricao>
      <SaibaMaisBtn>
        <Link to={`/perfil/${id}`}>Saiba Mais</Link>
      </SaibaMaisBtn>
    </Sobre>
  </Card>
)

export default Restaurante
