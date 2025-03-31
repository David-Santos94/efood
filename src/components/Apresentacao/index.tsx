import { Restaurantes } from '../../pages/Home'

import { Container } from '../../styles'
import {
  ContainerApresentacao,
  NomeRestaurante,
  TipoCulinaria,
  Transparencia
} from './styles'

const Apresentacao = ({
  titulo,
  tipo,
  capa
}: Omit<
  Restaurantes,
  'id' | 'destacado' | 'avaliacao' | 'descricao' | 'cardapio'
>) => (
  <ContainerApresentacao style={{ backgroundImage: `url(${capa})` }}>
    <Transparencia>
      <Container>
        <TipoCulinaria>{tipo}</TipoCulinaria>
        <NomeRestaurante>{titulo}</NomeRestaurante>
      </Container>
    </Transparencia>
  </ContainerApresentacao>
)

export default Apresentacao
