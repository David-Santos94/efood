import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import deletar from '../../assets/images/deletar.png'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/carrinho'

import {
  BotaoContinuar,
  ContainerCarrinho,
  ContainerValorTotal,
  ContentCarrinho,
  Deletar,
  ImgDeletar,
  ImgProdutoCarrinho,
  PrecoProdutoCarrinho,
  ProdutoCarrinho,
  TituloProdutoCarrinho,
  Text,
  ContentFormDelivery,
  ContentFormPayment,
  Campo,
  Input
} from './styles'
import { Overlay } from '../../styles'

type Screen = {
  cart: boolean
  delivery: boolean
  payment: boolean
  order: boolean
}

type Order = {
  products: { id: number; price: number }[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

type ApiResponse = {
  orderId: number
}

const Carrinho = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.carrinho)
  const dispatch = useDispatch()

  const closeCarrinho = () => {
    dispatch(close())
  }

  const valorTotal = () => {
    return items
      .reduce((acumulador, valorAtual) => {
        return (acumulador += valorAtual.preco)
      }, 0)
      .toFixed(2)
  }

  const removerDoCarrinho = (id: number) => {
    dispatch(remove(id))
  }

  const navigate = useNavigate()

  useEffect(() => {
    setOrder((prev) => ({
      ...prev,
      products: items.map((item) => ({ id: item.id, price: item.preco }))
    }))
  }, [items])

  const [cartScreen, setcartScreen] = useState<Screen>({
    cart: true,
    delivery: false,
    payment: false,
    order: false
  })

  const goToNextStep = (nextStep: keyof Screen) => {
    setcartScreen(() => ({
      cart: nextStep === 'cart',
      delivery: nextStep === 'delivery',
      payment: nextStep === 'payment',
      order: nextStep === 'order'
    }))
  }

  const [response, setResponse] = useState<ApiResponse | null>(null)
  const [order, setOrder] = useState<Order>({
    products: [],
    delivery: {
      receiver: '',
      address: {
        description: '',
        city: '',
        zipCode: '',
        number: 0,
        complement: ''
      }
    },
    payment: {
      card: {
        name: '',
        number: '',
        code: 0,
        expires: {
          month: 0,
          year: 0
        }
      }
    }
  })

  const submitOrder = async (
    order: Order,
    setResponse: (data: ApiResponse) => void
  ) => {
    try {
      const response = await fetch(
        'https://fake-api-tau.vercel.app/api/efood/checkout',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(order)
        }
      )

      if (!response.ok) {
        throw new Error('Erro ao enviar pedido')
      }

      const data = await response.json()
      setResponse(data)
      console.log('Pedido enviado com sucesso:', data)
    } catch (error) {
      console.error('Erro ao enviar pedido:', error)
    }
  }

  const fieldConfig: Record<
    string,
    { label: string; size?: string; area: string; margin?: string }
  > = {
    receiver: { label: 'Quem irá receber', area: 'a' },
    address: { label: 'Endereço', area: 'b' },
    city: { label: 'Cidade', area: 'c' },
    zip: { label: 'CEP', size: '155px', area: 'd' },
    number: { label: 'Número', size: '155px', area: 'e' },
    complement: { label: 'Complemento (opcional)', area: 'f', margin: '16px' },
    cardName: { label: 'Nome no cartão', area: 'a' },
    cardNumber: { label: 'Número do cartão', size: '228px', area: 'b' },
    cvv: { label: 'CVV', size: '87px', area: 'c' },
    expMonth: {
      label: 'Mês de vencimento',
      size: '155px',
      area: 'd',
      margin: '16px'
    },
    expYear: {
      label: 'Ano de vencimento',
      size: '155px',
      area: 'g',
      margin: '16px'
    }
  }

  const formikDelivery = useFormik({
    initialValues: {
      receiver: '',
      address: '',
      city: '',
      zip: '',
      number: '',
      complement: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string().required('Obrigatório'),
      address: Yup.string().required('Obrigatório'),
      city: Yup.string().required('Obrigatório'),
      zip: Yup.string()
        .matches(/^\d{5}-\d{3}$/, 'CEP inválido')
        .required('Obrigatório'),
      number: Yup.string().required('Obrigatório')
    }),
    onSubmit: (values) => {
      setOrder((prev) => ({
        ...prev,
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.zip,
            number: Number(values.number),
            complement: values.complement
          }
        }
      }))
      console.log(order)
    }
  })

  const formikPayment = useFormik({
    initialValues: {
      cardName: '',
      cardNumber: '',
      cvv: '',
      expMonth: '',
      expYear: ''
    },
    validationSchema: Yup.object({
      cardName: Yup.string().required('Obrigatório'),
      cardNumber: Yup.string()
        .matches(/^\d{16}$/, 'Número inválido')
        .required('Obrigatório'),
      cvv: Yup.string()
        .matches(/^\d{3,4}$/, 'CVV inválido')
        .required('Obrigatório'),
      expMonth: Yup.string()
        .matches(/^(0[1-9]|1[0-2])$/, 'Mês inválido')
        .required('Obrigatório'),
      expYear: Yup.string()
        .matches(/^\d{4}$/, 'Ano inválido')
        .required('Obrigatório')
    }),
    onSubmit: (values) => {
      const updatedOrder = {
        ...order,
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cvv),
            expires: {
              month: Number(values.expMonth),
              year: Number(values.expYear)
            }
          }
        }
      }
      setOrder(updatedOrder)
      submitOrder(updatedOrder, setResponse)
      goToNextStep('order')
    }
  })

  return (
    <ContainerCarrinho className={isOpen ? 'open' : ''}>
      <ContentCarrinho display={cartScreen.cart}>
        {items.map((item) => (
          <ProdutoCarrinho key={item.id}>
            <ImgProdutoCarrinho src={item.imagem} alt="foto produto" />
            <TituloProdutoCarrinho>{item.nome}</TituloProdutoCarrinho>
            <PrecoProdutoCarrinho>
              R$ {item.preco.toFixed(2)}
            </PrecoProdutoCarrinho>
            <Deletar
              onClick={() => {
                removerDoCarrinho(item.id)
              }}
            >
              <ImgDeletar src={deletar} alt="deletar" />
            </Deletar>
          </ProdutoCarrinho>
        ))}
        <ContainerValorTotal>
          <Text>Valor total</Text>
          <Text>R$ {valorTotal()}</Text>
        </ContainerValorTotal>
        <BotaoContinuar
          onClick={() => {
            items.length == 0 ? closeCarrinho() : goToNextStep('delivery')
          }}
        >
          Continuar com a entrega
        </BotaoContinuar>
      </ContentCarrinho>

      <ContentFormDelivery display={cartScreen.delivery}>
        <Text font="16px">Entrega</Text>
        <form onSubmit={formikDelivery.handleSubmit}>
          {Object.keys(formikDelivery.initialValues).map((field) => (
            <Campo
              key={field}
              area={fieldConfig[field].area}
              size={fieldConfig[field].size}
              margin={fieldConfig[field].margin}
            >
              <Text>{fieldConfig[field].label}</Text>
              <Input
                type="text"
                name={field}
                size={fieldConfig[field].size}
                onChange={formikDelivery.handleChange}
                onBlur={formikDelivery.handleBlur}
                value={
                  formikDelivery.values[
                    field as keyof typeof formikDelivery.values
                  ]
                }
              />
              {formikDelivery.touched[
                field as keyof typeof formikDelivery.values
              ] &&
                formikDelivery.errors[
                  field as keyof typeof formikDelivery.errors
                ] && (
                  <div style={{ color: 'red' }}>
                    {
                      formikDelivery.errors[
                        field as keyof typeof formikDelivery.errors
                      ]
                    }
                  </div>
                )}
            </Campo>
          ))}
          <BotaoContinuar
            type="submit"
            disabled={
              !formikDelivery.isValid ||
              !formikDelivery.dirty ||
              formikDelivery.isSubmitting
            }
            onClick={(e) => {
              if (!formikDelivery.isValid) {
                e.preventDefault()
              } else {
                goToNextStep('payment')
              }
            }}
          >
            Continuar com o pagamento
          </BotaoContinuar>
        </form>
        <BotaoContinuar onClick={() => goToNextStep('cart')}>
          Voltar para o carrinho
        </BotaoContinuar>
      </ContentFormDelivery>

      <ContentFormPayment display={cartScreen.payment}>
        <Text font="16px">Pagamento - Valor a pagar R$ {valorTotal()}</Text>
        <form onSubmit={formikPayment.handleSubmit}>
          {Object.keys(formikPayment.initialValues).map((field) => (
            <Campo
              key={field}
              area={fieldConfig[field].area}
              size={fieldConfig[field].size}
              margin={fieldConfig[field].margin}
            >
              <Text>{fieldConfig[field].label}</Text>
              <Input
                type="text"
                name={field}
                size={fieldConfig[field].size}
                onChange={formikPayment.handleChange}
                onBlur={formikPayment.handleBlur}
                value={
                  formikPayment.values[
                    field as keyof typeof formikPayment.values
                  ]
                }
              />
              {formikPayment.touched[
                field as keyof typeof formikPayment.values
              ] &&
                formikPayment.errors[
                  field as keyof typeof formikPayment.errors
                ] && (
                  <div style={{ color: 'red' }}>
                    {
                      formikPayment.errors[
                        field as keyof typeof formikPayment.errors
                      ]
                    }
                  </div>
                )}
            </Campo>
          ))}
          <BotaoContinuar
            type="submit"
            disabled={
              !formikPayment.isValid ||
              !formikPayment.dirty ||
              formikPayment.isSubmitting
            }
          >
            Finalizar pagamento
          </BotaoContinuar>
        </form>
        <BotaoContinuar onClick={() => goToNextStep('delivery')}>
          Voltar para a edição de endereço
        </BotaoContinuar>
      </ContentFormPayment>

      <ContentCarrinho display={cartScreen.order}>
        {response ? (
          <Text font="16px">Pedido Realizado - {response.orderId}</Text>
        ) : (
          <Text font="16px">Erro no pedido</Text>
        )}
        {response && (
          <>
            <Text font="14px" weight="400px" margin="16px">
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
              <br />
              <br />
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
              <br />
              <br />
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
              <br />
              <br />
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </Text>
            <BotaoContinuar
              onClick={() => {
                items.map((item) => removerDoCarrinho(item.id))
                goToNextStep('cart')
                closeCarrinho()
                navigate('/')
              }}
            >
              Concluir
            </BotaoContinuar>
          </>
        )}
      </ContentCarrinho>

      <Overlay onClick={closeCarrinho} />
    </ContainerCarrinho>
  )
}

export default Carrinho
