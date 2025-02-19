import { Container } from '../../styles'
import {
  ContainerApresentacao,
  NomeRestaurante,
  TipoCulinaria,
  Transparencia
} from './styles'

const Apresentacao = () => (
  <ContainerApresentacao>
    <Transparencia>
      <Container>
        <TipoCulinaria>Italiana</TipoCulinaria>
        <NomeRestaurante>La Dolce Vita Trattoria</NomeRestaurante>
      </Container>
    </Transparencia>
  </ContainerApresentacao>
)

export default Apresentacao
