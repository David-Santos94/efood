import RestauranteInfos from '../../models/RestauranteInfos'
import { Container } from '../../styles'
import Restaurante from '../Restaurante'
import { Lista } from './styles'

type Props = {
  restauranteinfos: RestauranteInfos[]
}

const ListaRestaurantes = ({ restauranteinfos }: Props) => (
  <Container>
    <Lista>
      {restauranteinfos.map((restauranteinfos) => (
        <Restaurante
          key={restauranteinfos.id}
          imagem={restauranteinfos.imagem}
          destaque={restauranteinfos.destaque}
          culinaria={restauranteinfos.culinaria}
          nome={restauranteinfos.nome}
          nota={restauranteinfos.nota}
          descricao={restauranteinfos.descricao}
        />
      ))}
    </Lista>
  </Container>
)

export default ListaRestaurantes
