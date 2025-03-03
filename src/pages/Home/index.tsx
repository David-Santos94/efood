import Hero from '../../components/Hero'
import ListaRestaurantes from '../../components/ListaRestaurantes'
import { useEffect, useState } from 'react'

export type Restaurantes = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }[]
}

const Home = () => {
  const [dados, setDados] = useState<Restaurantes[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setDados(res))
  }, [])

  return (
    <>
      <Hero />
      <ListaRestaurantes restauranteinfos={dados} />
    </>
  )
}

export default Home
