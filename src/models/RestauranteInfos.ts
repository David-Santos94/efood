class RestauranteInfos {
  imagem: string
  destaque: boolean
  culinaria: string
  nome: string
  nota: string
  descricao: string
  id: number

  constructor(
    imagem: string,
    destaque: boolean,
    culinaria: string,
    nome: string,
    nota: string,
    descricao: string,
    id: number
  ) {
    this.imagem = imagem
    this.destaque = destaque
    this.culinaria = culinaria
    this.nome = nome
    this.nota = nota
    this.descricao = descricao
    this.id = id
  }
}

export default RestauranteInfos
