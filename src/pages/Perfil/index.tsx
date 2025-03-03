import Header from '../../components/Header'
import Apresentacao from '../../components/Apresentacao'
import ListaProdutos from '../../components/ListaProdutos'
import { useParams } from 'react-router-dom'
import { Restaurantes } from '../Home'
import { useEffect, useState } from 'react'

const Perfil = () => {
  const { id } = useParams()

  const [perfil, setPerfil] = useState<Restaurantes>({
    id: 0,
    titulo: '',
    destacado: false,
    tipo: '',
    avaliacao: 0,
    descricao: '',
    capa: '',
    cardapio: []
  })

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setPerfil(res))
  }, [id])

  return (
    <>
      <Header />
      <Apresentacao
        titulo={perfil.titulo}
        tipo={perfil.tipo}
        capa={perfil.capa}
      />
      <ListaProdutos cardapio={perfil.cardapio} />
    </>
  )
}

export default Perfil
