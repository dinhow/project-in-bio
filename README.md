<p align="center">
  <img src="public/only_logo.png" alt="Portfly Logo" width="150">
</p>

<h1 align="center">
  Portfly
</h1>

<p align="center">
  ✨ Crie seu portfólio e centralize seus links em um único lugar. Simples, rápido e profissional. ✨
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15.0.2-black?style=for-the-badge&logo=next.js" alt="Next.js">
  <img src="https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Stripe-blueviolet?style=for-the-badge&logo=stripe" alt="Stripe">
  <img src="https://img.shields.io/badge/Firebase-ffca28?style=for-the-badge&logo=firebase" alt="Firebase">
</p>

## 🚀 Sobre o Projeto

O **Portfly** é a solução perfeita para profissionais, desenvolvedores e criadores de conteúdo que desejam ter uma página de "link na bio" elegante e funcional. Com ele, você pode criar um perfil personalizado, adicionar seus links mais importantes, exibir seus projetos e muito mais.

## ✨ Principais Funcionalidades

- **Perfil Personalizável:** Adicione sua foto, nome, e uma breve biografia.
- **Links Ilimitados:** Adicione quantos links personalizados desejar.
- **Projetos:** Crie cartões para exibir seus principais projetos com imagem, título e descrição.
- **Métricas de Visitas:** Acompanhe o número de visitas em seu perfil e em seus projetos.
- **Autenticação Segura:** Login com provedores OAuth (Google, GitHub, etc.) para uma experiência segura.
- **Planos e Assinaturas:** Ofereça planos (ex: Básico, Pro) com funcionalidades exclusivas, gerenciados via Stripe.
- **Design Responsivo:** Seu portfólio ficará incrível em qualquer dispositivo, seja desktop, tablet ou mobile.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias:

- **Frontend:**
  - [Next.js](https://nextjs.org/) (com App Router)
  - [React](https://react.dev/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [TypeScript](https://www.typescriptlang.org/)

- **Backend:**
  - [Next-Auth](https://next-auth.js.org/) para autenticação
  - [Firebase](https://firebase.google.com/) (Firestore/Storage) como banco de dados
  - [Stripe](https://stripe.com/) para processamento de pagamentos e assinaturas

## 🏁 Como Começar

Siga os passos abaixo para rodar o projeto em seu ambiente local.

### Pré-requisitos

- [Node.js](https://nodejs.org/en/) (versão 20 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/edmilsons2025/project-in-bio.git
   ```

2. **Navegue até o diretório do projeto:**

   ```bash
   cd project-in-bio
   ```

3. **Instale as dependências:**

   ```bash
   npm install
   # ou
   yarn install
   ```

4. **Configure as variáveis de ambiente:**
   - Crie um arquivo `.env.local` na raiz do projeto.
   - Adicione as chaves de API do Firebase, Stripe e Next-Auth. Consulte o arquivo `.env.example` (se houver) para ver as variáveis necessárias.

5. **Rode o servidor de desenvolvimento:**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

Abra [http://localhost:3000](http://localhost:3000) em seu navegador para ver o resultado.

## 🤝 Contribuindo

Contribuições são o que tornam a comunidade open source um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que você fizer será **muito apreciada**.

1. Faça um _Fork_ do projeto
2. Crie uma _Branch_ para sua feature (`git checkout -b feature/AmazingFeature`)
3. Faça o _Commit_ de suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Faça o _Push_ da sua _Branch_ (`git push origin feature/AmazingFeature`)
5. Abra um _Pull Request_

## 📄 Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.
