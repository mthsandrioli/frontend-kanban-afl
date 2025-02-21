## Funcionalidades

- Criação e autenticação usuários.
- Criação e gerenciamento de espaços de trabalho com colaboração de membros da equipe.
- Criação e gerenciamento de quadros e suas respectivas tarefas.
- Gerenciamento de tarefas em visualização de tabela e etapas do kanban.
- Design responsivo criado com TailwindCSS.

## Instruções para rodar o projeto

**Instalar dependências:**

```bash
npm i
```

**Configurar variáveis de ambiente:**
   Criar arquivo `.env.local` na raiz do projeto e setar as variáveis a seguir:

```
NEXT_PUBLIC_APP_URL=http://localhost:3000

NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT=67b1db3d00307cf37f26

NEXT_PUBLIC_APPWRITE_DATABASE_ID=67b1e6a5001e8f4fac42
NEXT_PUBLIC_APPWRITE_WORKSPACES_ID=67b1e6c60034701dcf59
NEXT_PUBLIC_APPWRITE_MEMBERS_ID=67b1ea9300298ef96c1a
NEXT_PUBLIC_APPWRITE_PROJECTS_ID=67b1ed580019a9948ab5
NEXT_PUBLIC_APPWRITE_TASKS_ID=67b1ee2d000e56ff6019
NEXT_PUBLIC_APPWRITE_IMAGES_BUCKET_ID=67b1e82d001b9d625684

NEXT_APPWRITE_KEY=standard_72a6d5ab64d595b3e378db381785922fe256686dfb96253bff0947c31e29039983a9f0a618e2ba39389f65531b5c3e1aea3bc7c3120edd5aad43bf06175fe926ec71923d8a4c9d8d49712a915887db867728e8065170182fc71c1a0d90fc73ff2c7aa436fd95a4abba71a8ce59e065caa58641528615f91b69015a59032fd0ee
```

**Rodar projeto:**

```bash
npm run dev
```

