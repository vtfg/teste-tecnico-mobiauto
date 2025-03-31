<h1 align="center">
  Teste Técnico - Mobiauto
</h1>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-teste">Teste</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-executar">Como executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
</p>

## ✨ Tecnologias

Os projetos foram desenvolvido com as seguintes tecnologias:

- [Next.js](https://nextjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Material UI](https://mui.com)
- [React Query (TankStack Query)](https://tanstack.com/query/latest)
- [Axios](https://github.com/axios/axios)
- [Jest](https://jestjs.io/pt-BR)
- [Cypress](https://www.cypress.io)

## 💻 Teste

O teste técnico é divido em duas partes: 

1. `fipe`: Aplicação front-end que permite a consulta da tabela Fipe de qualquer carro;
2. `exercises`: Soluções para os exercícios listados no PDF. Cada exercício está em seu próprio arquivo dentro da pasta `src`, e seus respectivos testes na pasta `tests`.

## 🚀 Como executar

Certifique-se de possuir uma versão do Node.js compatível com o projeto (>= v18).

Se possuir o `nvm` ([Node Version Manager](https://github.com/nvm-sh/nvm)), execute `nvm install`. Esse comando instalará a versão informada no arquivo `.nvmrc`, versão no qual esse projeto foi desenvolvido.

### Tabela fipe (`fipe`)

- Clone o repositório
- Instale as dependências com `npm i`
- - Entre no diretório `fipe` com `cd ./fipe`
- Inicie o servidor do Next.js com `npm run dev`

A aplicação estará disponível na URL http://localhost:3000.

### Exercícios (`exercises`)

- Clone o repositório
- Instale as dependências com `npm i`
- Entre no diretório `exercises` com `cd ./exercises`
- Rode os testes com `npm run test`

## 📄 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
