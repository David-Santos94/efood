import { Container, Overlay } from '../../styles'
import Produto from '../Produto'
import {
  Adicionar,
  BotaoAdicionarModal,
  Cardapio,
  CloseModal,
  DescricaoProdutoModal,
  ImgModal,
  Modal,
  ModalBox,
  ModalContent,
  NomeProdutoModal
} from './styles'
import fechar from '../../assets/images/close_modal.png'
import { useState } from 'react'
import { Restaurantes } from '../../pages/Home'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/carrinho'

export type ModalState = {
  id: number
  imagem: string
  nome: string
  descricao: string
  serve: string
  preco: number
  visivel: boolean
}

const ListaProdutos = ({
  cardapio
}: Omit<
  Restaurantes,
  'id' | 'titulo' | 'destacado' | 'tipo' | 'avaliacao' | 'descricao' | 'capa'
>) => {
  const [modal, setModal] = useState<ModalState>({
    id: 0,
    imagem: '',
    nome: '',
    descricao: '',
    serve: '',
    preco: 0,
    visivel: false
  })

  const dispatch = useDispatch()

  const adicionarAoCarrinho = () => {
    dispatch(add(modal))
    dispatch(open())
  }

  return (
    <Container>
      <Cardapio>
        {cardapio.map((cardapio) => (
          <>
            <Adicionar
              onClick={() => {
                setModal({
                  id: cardapio.id,
                  imagem: cardapio.foto,
                  nome: cardapio.nome,
                  descricao: cardapio.descricao,
                  serve: cardapio.porcao,
                  preco: cardapio.preco,
                  visivel: true
                })
              }}
            >
              <Produto
                key={cardapio.id}
                imagem={cardapio.foto}
                nome={cardapio.nome}
                descricao={cardapio.descricao}
              />
            </Adicionar>
          </>
        ))}
      </Cardapio>
      <Modal className={modal.visivel ? 'visivel' : ''}>
        <ModalBox>
          <CloseModal
            onClick={() => {
              setModal({
                id: 0,
                imagem: '',
                nome: '',
                descricao: '',
                serve: '',
                preco: 0,
                visivel: false
              })
            }}
            src={fechar}
            alt="fechar modal"
          />
          <ModalContent>
            <ImgModal src={modal.imagem} alt="imagem do produto" />
            <NomeProdutoModal>{modal.nome}</NomeProdutoModal>
            <DescricaoProdutoModal>
              {modal.descricao}
              <br />
              <br /> Serve: {modal.serve}
            </DescricaoProdutoModal>
            <BotaoAdicionarModal
              onClick={() => {
                adicionarAoCarrinho()
                setModal({
                  id: 0,
                  imagem: '',
                  nome: '',
                  descricao: '',
                  serve: '',
                  preco: 0,
                  visivel: false
                })
              }}
            >
              Adicionar ao carrinho - R$ {modal.preco.toFixed(2)}
            </BotaoAdicionarModal>
          </ModalContent>
        </ModalBox>
        <Overlay />
      </Modal>
    </Container>
  )
}

export default ListaProdutos
