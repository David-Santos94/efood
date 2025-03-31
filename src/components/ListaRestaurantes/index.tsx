import { Restaurantes } from '../../pages/Home'
import Restaurante from '../Restaurante'

import { Container } from '../../styles'
import { Lista } from './styles'

type Props = {
  restauranteinfos: Restaurantes[]
}

const ListaRestaurantes = ({ restauranteinfos }: Props) => (
  <Container>
    <Lista>
      {restauranteinfos.map((restauranteinfos) => (
        <Restaurante
          key={restauranteinfos.id}
          imagem={restauranteinfos.capa}
          destaque={restauranteinfos.destacado}
          culinaria={restauranteinfos.tipo}
          nome={restauranteinfos.titulo}
          nota={restauranteinfos.avaliacao}
          descricao={restauranteinfos.descricao}
          id={restauranteinfos.id}
        />
      ))}
    </Lista>
  </Container>
)

export default ListaRestaurantes
