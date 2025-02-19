import {
  Cabecalho,
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
  nota: string
  descricao: string
}

const Restaurante = ({
  imagem,
  destaque,
  culinaria,
  nome,
  nota,
  descricao
}: Props) => (
  <Card>
    <img src={imagem} alt="restaurante" />
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
        <Link to="/perfil">Saiba Mais</Link>
      </SaibaMaisBtn>
    </Sobre>
  </Card>
)

export default Restaurante
