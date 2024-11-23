## O QUE É A SPACE
A SPACE é uma comunidade cientifica que visa manter seus usuários atualizados com as informações sobre os astros do nosso sistema solar e a vastidão que é nossa galaxia.

O backend da SPACE é feito com `Nest.Js`, `Prisma` e `PostgreSQL`

Este repositório contém uma versão da API da space, vale realçar que as alterações feitas aqui não vão afetar a API official da SPACE.

## Biaxar e instalar a API

> **Atenção**: deve ter instalado em seu computador o `node.js 20` e o `postgreSQL` <br/>


1. Baixe o pacote zipado do projeto no github;

2. Abra o terminal e navege até o diretório principal do projeto;

3. No diretório principal execute um dos seguintes comandos: `npm ci` ou `npm install` ou `npm i` para instalar as dependencias do projeto;

4. Verifique se existe um arquivo `.env` na raiz do projeto, nele deve estar o caminho para o banco de dados postgres, caso não tenha então crie um arquivo *.end* na raiz e nele crie uma variável **DATABASE_URL = "caminho-do-banco-de dados"** 

5. Use o prisma para executar todas as migrations e criar a estrutura correta do banco de dados, use o comando `npx prisma migrate dev`

6. Execute o projeto usando o comando `npm run start` ou suba em modo de desenvolvimento com `npm run start:dev`

7. Use o **insomnia**, **rest-client** ou **postman** para fazer requisições http e testar a API

8. Na raiz do projeto tem um arquivo **request.http** nele existem algumas requisições feitas por mim, dê uma olhada.

> **Atenção**: antes instalar Rest Client no vscode e só assim poderás testar a API pelo arquivo request.http

## Tecnologias em destaque
* **Prisma**: ORM utilizado para manipulação do banco de dados pela API omitindo uma serie de comandos em instruções simples adicionando performace em deenvolvimento e pronto para produção.

* **class-transformer** e **class-validator**: utilizados como uma especie de middleware nos DTO's (data transfer objects) para verificar se as informações vindas do exterior seguem as regras pre-definidas.
* **@nestjs/websockets** e **@nestjs/platform-socket.io**: para adicionar eventos websockets entre o cliente e o servidor permitindo a comunicação bidirecional entre eles.

> Não esqueça de deixar uma estrela no repositório

<a href="#" style="color:blue; font-weight:700 ;">Baixe o frontend do projeto<a/>
