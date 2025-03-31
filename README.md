# EFOOD

EFOOD é uma plataforma de pedidos online que lista restaurantes e seus cardápios, permitindo que os usuários adicionem itens ao carrinho e simulem uma compra com entrega.

## Tecnologias Utilizadas

- **React** - Biblioteca para construção da interface do usuário
- **Styled Components** - Biblioteca para estilização dos componentes
- **React Router** - Gerenciamento de navegação entre páginas
- **Redux** - Gerenciamento de estado do carrinho
- **AJAX** - Requisições assíncronas para a API
- **Formik** - Gerenciamento de formulários de forma simplificada
- **Yup** - Validação de formulários
- **Vercel** - Hospedagem do projeto

## Funcionalidades

- Listagem de restaurantes e seus cardápios
- Adição de itens ao carrinho
- Cálculo dinâmico do valor total da compra
- Simulação de compra com envio de pedido via API
- Modal para confirmação de compra
- Tela de confirmação do pedido

## Como Rodar o Projeto Localmente

1. Clone o repositório:
   ```sh
   git clone https://github.com/David-Santos94/efood.git
   ```
2. Entre no diretório do projeto:
   ```sh
   cd efood
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```sh
   npm start
   ```
5. Acesse no navegador: `http://localhost:3000`

## API

A aplicação consome uma API para listar restaurantes, cardápios e processar pedidos. Certifique-se de que a API esteja funcionando corretamente antes de testar o fluxo completo.

1. API para requisições (GET):
   ```sh
   https://fake-api-tau.vercel.app/api/efood/restaurantes
   ```
   
1. API para checkout (POST):
   ```sh
   https://fake-api-tau.vercel.app/api/efood/checkout
   ```

## Deploy

O projeto está hospedado na **Vercel**. Para atualizar o deploy:
1. Faça commit das suas mudanças no repositório;
2. A Vercel automaticamente irá fazer o deploy das alterações.

## Contribuição

Sinta-se à vontade para contribuir com melhorias no projeto! Basta seguir os passos:
1. Faça um fork do repositório;
2. Crie uma nova branch (`git checkout -b minha-feature`);
3. Faça suas alterações e commit (`git commit -m 'Adicionando nova funcionalidade'`);
4. Envie para o repositório (`git push origin minha-feature`);
5. Abra um Pull Request.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---
Desenvolvido com ❤ por David Santos | Projeto final do curso Front End na EBAC

