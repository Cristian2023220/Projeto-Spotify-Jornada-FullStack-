🎵 Spotify Clone - Jornada Full Stack
Este projeto é uma réplica da interface do Spotify, desenvolvida durante a Jornada Full Stack. A aplicação permite navegar por artistas e músicas, consumindo dados de uma API integrada com um banco de dados NoSQL.

🚀 Tecnologias Utilizadas
Front-end
React 19

Vite (Build tool rápida)

React Router Dom (Navegação SPA)

Axios (Consumo de API)

FontAwesome (Ícones)

Back-end
Node.js

Express (Framework web)

MongoDB Native Driver (Conexão com banco de dados)

CORS (Segurança de acesso)

Dotenv (Gerenciamento de variáveis de ambiente)

🛠️ Configuração e Instalação
Pré-requisitos
Node.js instalado.

Conta no MongoDB Atlas (ou banco local).

1. Clonar o Repositório
Bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
2. Configurar o Back-end
Acesse a pasta: cd gabarito-jornada-full-stack/back-end.

Instale as dependências: npm install.

Crie um arquivo .env na raiz da pasta back-end e adicione:

Snippet de código
MONGO_URI=sua_uri_do_mongodb
ALLOWED_ORIGIN=http://localhost:5173
PORT=3001
Inicie o servidor: npm start.

3. Configurar o Front-end
Acesse a pasta: cd ../front-end.

Instale as dependências: npm install.

Crie um arquivo .env na raiz da pasta front-end e adicione:

Snippet de código
VITE_API_URL=http://localhost:3001
Inicie a aplicação: npm run dev.

🌐 Endpoints da API
O servidor backend disponibiliza os seguintes endpoints:

GET /artists: Retorna a lista completa de artistas.

GET /songs: Retorna a lista completa de músicas.

🔒 Segurança e Boas Práticas
O projeto foi atualizado para seguir padrões de segurança para deploy:

Variáveis de Ambiente: Credenciais sensíveis (como a senha do MongoDB) são protegidas via arquivos .env, que são ignorados pelo Git.

Porta Dinâmica: O servidor está configurado para usar a porta definida pelo ambiente (process.env.PORT), essencial para plataformas de deploy como Render e Railway.

CORS Configurado: Acesso restrito apenas a origens autorizadas.

✒️ Autor
Desenvolvido por Cristian durante a Jornada Full Stack.