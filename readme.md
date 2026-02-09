# 🏁 Desafio de programação - Vaga Front-End 🏁

**Nível:** Intermediário  
**Entrega:** até 2 dias (≈ 12–16h)  
**Obrigatório:** **React + TypeScript**, **integração com API**, **deploy público**

***

## 1) Objetivo

Construir uma SPA pequena e bem acabada para **descobrir conteúdo via API** e **guardar itens numa coleção local**. O foco é avaliar: organização, tipagem, integração com API, estados de UI e entrega em produção (deploy).

***

## 2) O que vais construir: **Brut Discover (Mini Curadoria)**

Uma app com **3 ecrãs**:

1.  **Explorar** (pesquisa + lista de resultados via API)
2.  **Detalhe** (dados completos do item via API + ação “guardar”)
3.  **Coleções** (gestão local: criar coleção e gerir itens guardados)

***

## 3) API (obrigatória)

Usa **uma API pública real**. Recomendação por simplicidade (sem chave):

### Wikipedia (PT)

*   Pesquisa:  
    `https://pt.wikipedia.org/w/rest.php/v1/search/title?q=TERMO&limit=20`
*   Detalhe/Resumo:  
    `https://pt.wikipedia.org/api/rest_v1/page/summary/TITULO`

> Podes usar outra API, desde que:
>
> *   tenha **pelo menos 2 endpoints** (lista/pesquisa + detalhe),
> *   e seja consumida com tipagem em TypeScript.

***

## 4) Requisitos funcionais (mínimo viável para 1 dia)

### 4.1 Explorar (Pesquisa + Resultados)

**Funcionalidades:**

*   Campo de pesquisa.
*   Buscar resultados na API e listar itens.
*   Estados obrigatórios:
    *   **loading**
    *   **erro** (com botão “tentar novamente”)
    *   **vazio** (“sem resultados”)
*   Clique num item → navegar para **Detalhe**.

**Regras:**

*   Implementar **debounce** (300–500ms) para evitar chamadas excessivas.
*   Implementar **paginação simples**: botão **“Carregar mais”** (ou paginação por páginas).

***

### 4.2 Detalhe (Item completo)

**Funcionalidades:**

*   Ao abrir um item, fazer chamada ao endpoint de detalhe.
*   Mostrar pelo menos:
    *   título
    *   resumo/descrição
    *   imagem (se existir)
    *   link para a fonte (abrir em nova aba)
*   Botão: **“Guardar na coleção”**
    *   Se não existir coleção ainda, permitir criar uma rapidamente (ex.: modal ou input simples).

***

### 4.3 Coleções (Persistência local)

**Funcionalidades:**

*   Criar coleção (nome obrigatório).
*   Listar coleções existentes.
*   Abrir uma coleção e ver os itens guardados.
*   Remover item da coleção.
*   **Persistir em `localStorage`** (coleções + itens).

**Modelo mínimo sugerido (podes adaptar):**

*   Coleção: `id`, `nome`, `criadaEm`
*   Item guardado: `id` (ou `title`), `title`, `url`, `resumoCurto?`, `imagem?`

***

## 5) Requisitos técnicos (obrigatórios)

### TypeScript e Qualidade

*   Projeto **100% TypeScript**.
*   Tipar respostas da API (DTOs) e mapear para modelos internos quando fizer sentido.
*   ESLint + Prettier (ou configuração equivalente).

### Arquitetura mínima

*   React Router (ou equivalente) para rotas:
    *   `/` (Explorar)
    *   `/item/:id` (Detalhe)
    *   `/colecoes` (Coleções)
*   Separar:
    *   camada de API (ex.: `services/api.ts`)
    *   UI components
    *   estado local (coleções)

### Integração com API

*   Usar `fetch` ou `axios`.
*   Tratamento de:
    *   timeouts/abort (recomendado, mas opcional)
    *   erros HTTP e erros de rede

### Testes (mínimo)

*   **Pelo menos 2 testes** (para caber no dia), por exemplo:
    *   1 teste de componente (render e estados)
    *   1 teste de fluxo simples (guardar item em coleção)
*   Ferramentas sugeridas: Vitest + Testing Library.

***

## 6) Deploy (obrigatório)

*   Deploy público em **Vercel**, **Netlify** ou **GitHub Pages**.
*   A entrega deve incluir:
    *   link do repositório
    *   link do deploy
    *   `README.md` com:
        *   como correr localmente
        *   como correr testes
        *   breve lista de decisões técnicas (3–6 bullets)

***

## 7) Bónus (se sobrar tempo — opcional)

Escolhe **apenas 1**:

*   Pesquisa recente (persistida em localStorage)
*   Skeleton loading no detalhe
*   “Favoritar” itens dentro da coleção
*   Pequeno modo escuro (toggle)

***

## 8) Entregáveis

1.  Repositório Git
2.  Link do deploy
3.  README completo (instruções + decisões técnicas)
