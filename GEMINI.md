# Guia do Projeto para o Gemini

Este documento fornece um resumo do projeto para o assistente de IA Gemini, ajudando-o a entender a estrutura, as tecnologias e os fluxos de trabalho.

## 1. Sobre o Projeto

(Descreva aqui em 1-2 frases o objetivo principal do seu projeto. Ex: "Este é um agregador de links no estilo Linktree, onde usuários podem criar um perfil, adicionar links para seus projetos e redes sociais, e customizar sua página. Inclui integração com Stripe para planos de assinatura.")

## 2. Stack de Tecnologia

*   **Framework:** Next.js (com App Router)
*   **Linguagem:** TypeScript
*   **Estilização:** Tailwind CSS
*   **Autenticação:** NextAuth.js
*   **Banco de Dados/Backend:** Firebase (Firestore)
*   **Pagamentos:** Stripe
*   **Linting:** ESLint

## 3. Estrutura do Projeto

*   `app/(pages)`: Contém as rotas principais da aplicação (páginas públicas e de usuário).
*   `app/api`: Endpoints de API, incluindo rotas do NextAuth.js e webhooks do Stripe.
*   `app/actions`: Server Actions do Next.js para mutações de dados (criar links, salvar perfil, etc.).
*   `app/components`: Componentes React reutilizáveis.
*   `app/lib`: Lógica de negócios principal, inicialização de serviços (Firebase, Stripe) e funções utilitárias.
*   `app/hooks`: Hooks React customizados.
*   `public`: Arquivos estáticos como imagens e fontes.

## 4. Como Rodar o Projeto

1.  **Instalar dependências:**
    ```bash
    npm install
    ```
2.  **Executar o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

## 5. Comandos Importantes

*   **Build para produção:** `npm run build`
*   **Análise de código (Lint):** `npm run lint`

## 6. Variáveis de Ambiente

É crucial listar as variáveis de ambiente necessárias para o projeto em um arquivo `.env.local`.

**Exemplos de variáveis necessárias:**
*   `NEXT_PUBLIC_STRIPE_PUBLIC_KEY`
*   `FIREBASE_API_KEY`
*   `FIREBASE_AUTH_DOMAIN`
*   `STRIPE_SECRET_KEY`
*   `STRIPE_WEBHOOK_SECRET`
*   `NEXTAUTH_URL`
*   `NEXTAUTH_SECRET`

**Importante:** Nunca inclua os valores reais das chaves no `GEMINI.md`. Apenas os nomes das variáveis.
