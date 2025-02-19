import Hero from '../../components/Hero'
import ListaRestaurantes from '../../components/ListaRestaurantes'
import RestauranteInfos from '../../models/RestauranteInfos'
import hioki from '../../assets/images/hioki_sushi.png'
import ladolcevita from '../../assets/images/la_dolce_vita.png'

const dados: RestauranteInfos[] = [
  {
    id: 1,
    imagem: hioki,
    destaque: true,
    culinaria: 'Japonesa',
    nome: 'Hioki Sushi',
    nota: '4.9',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
  },
  {
    id: 2,
    imagem: ladolcevita,
    destaque: false,
    culinaria: 'Italiana',
    nome: 'La Dolce Vita Trattoria',
    nota: '4.6',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 3,
    imagem: ladolcevita,
    destaque: false,
    culinaria: 'Italiana',
    nome: 'La Dolce Vita Trattoria',
    nota: '4.6',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 4,
    imagem: ladolcevita,
    destaque: false,
    culinaria: 'Italiana',
    nome: 'La Dolce Vita Trattoria',
    nota: '4.6',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 5,
    imagem: ladolcevita,
    destaque: false,
    culinaria: 'Italiana',
    nome: 'La Dolce Vita Trattoria',
    nota: '4.6',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 6,
    imagem: ladolcevita,
    destaque: false,
    culinaria: 'Italiana',
    nome: 'La Dolce Vita Trattoria',
    nota: '4.6',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  }
]

const Home = () => (
  <>
    <Hero />
    <ListaRestaurantes restauranteinfos={dados} />
  </>
)

export default Home
