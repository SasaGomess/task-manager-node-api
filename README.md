# 📋 Task Manager API
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)


O **Task Manager API** é uma aplicação backend desenvolvida para gerenciar taferas. Este projeto foi construído com foco em colocar meus aprendizados em **Node.js** e **Express** em prática, utilizando **boas práticas de código** e **padrões de arquitetura**.

A API permite criar, listar, atualizar, iniciar, concluir e deletar tarefas, mantendo o controle completo do ciclo de vida de cada tarefa através de diferentes status.

---

## ✨ Funcionalidades

- ✅ **Listar todas as tarefas** - Visualize todas as tarefas cadastradas
- 🔍 **Buscar tarefa específica** - Encontre uma tarefa pelo ID
- ➕ **Criar nova tarefa** - Cadastre novas tarefas no sistema
- ▶️ **Iniciar tarefa** - Marque uma tarefa como "em andamento" com data de início
- ✔️ **Concluir tarefa** - Finalize tarefas alterando o status para "concluída"
- 🔄 **Atualizar tarefa** - Modifique qualquer campo da tarefa
- 🗑️ **Deletar tarefa** - Remova tarefas

---

## 🧩 Endpoints da API

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/tasks` | Lista todas as tarefas |
| `GET` | `/tasks/:id` | Busca uma tarefa específica |
| `POST` | `/tasks` | Cria uma nova tarefa |
| `PATCH` | `/tasks/start/:id` | Inicia uma tarefa (status: EM_ANDAMENTO) |
| `PATCH` | `/tasks/concludes/:id` | Conclui uma tarefa (status: CONCLUIDA) |
| `PUT` | `/tasks/:id` | Atualiza campos de uma tarefa |
| `DELETE` | `/tasks/:id` | Deleta uma tarefa |

### 📝 Exemplos de Requisições

**Criar uma tarefa:**
```json
POST /tasks
{
  "title": "Estudar Node.js",
  "description": "Aprender sobre Fastify e Prisma",
  "status": "PENDENTE"
  "priority": "ALTA",
  "endDate": "2026-02-28T23:59:59.000Z"
}
```

**Iniciar uma tarefa:**
```json
PATCH /tasks/start/1
```

**Atualizar uma tarefa:**
```json
PUT /tasks/1
{
  "title": "Estudar Estrutura de Dados",
  "description": "Aprofundar em conceitos de Árvores Binárias"
}
```

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi desenvolvido com as seguintes tecnologias:

- **Node.js** - Runtime JavaScript
- **Express** - Framework web minimalista
- **Prisma** - ORM
- **PostgreSQL** - Banco de dados
- **Docker** - Docker Compose para conteiner PostgreSQL
- **Nodemon** - Reinicialização automática durante desenvolvimento
- **dotenv** - Gerenciamento de variáveis de ambiente

---

## 📁 Estrutura de Pastas

```
task-manager/
│
├── prisma/
│   ├── migrations/          # Migrações do banco de dados
│   └── schema.prisma        # Schema do Prisma
│
├── src/
│   ├── controller/
│   │   └── taskController.js    # Controlador das tarefas
│   │
│   ├── routes/
│   │   └── taskRoutes.js        # Definição das rotas
│   │
│   └── server.js                # Arquivo principal da aplicação
│
├── .env                     # Variáveis de ambiente
├── .gitignore              # Arquivos ignorados pelo Git
├── docker-compose.yml      # Configuração do Docker
├── package.json            # Dependências do projeto
└── README.md              # Documentação do projeto
```

---

## 🔧 Como Executar o Projeto Localmente

### Pré-requisitos

Antes de começar, você precisa ter instalado:
- Node.js
- Docker e Docker Compose
- Git

### Passo a Passo

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/task-manager-node-api.git
cd task-manager
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**

Crie um arquivo `.env` na raiz do projeto:
```env
POSTGRES_USER=seu_usuario
POSTGRES_PASSWORD=sua_senha
POSTGRES_DB=nome_do_seu_banco_de_dados

PORT=3000

DATABASE_URL="postgresql://seu_usuario:sua_senha@localhost:5433/nome_do_seu_banco_de_dados?schema=public"
```

4. **Suba o container do PostgreSQL**
```bash
docker-compose up
```

5. **Execute as migrations do Prisma**
```bash
npx prisma migrate dev
```

6. **Inicie o servidor**
```bash
npm run start:dev
```

7. **Acesse a API**

O servidor estará rodando em: `http://localhost:3000`

Teste o endpoint principal:
```bash
curl http://localhost:3000/
```
Deve aparecer a seguinte mensagem: ``Servidor funcionando!``

---

## 🎓 Aprendizados

Este projeto foi desenvolvido com o objetivo de:
- Implementar uma **API REST** seguindo as melhores práticas
- Utilizar **Prisma ORM** para manipulação de dados
- Aplicar **padrões de arquitetura** (MVC - Model View Controller)
- Trabalhar com **PostgreSQL** containerizado via Docker
- Estruturar código de forma **limpa e manutenível**
---

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

