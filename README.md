# Playwrightpokedex

PlaywrightPokedex é uma aplicação web projetada para explorar dados de Pokémon usando Playwright para testes de ponta a ponta. Ele utiliza a PokeAPI para buscar informações abrangentes sobre as espécies de Pokémon, permitindo aos usuários procurar, visualizar os detalhes e interagir com os dados dos Pokémon em um ambiente real de teste.

## Características principais:

1. **Busca de Pokémon:** Permite aos usuários buscar Pokémon pelo nome ou ID para acessar informações detalhadas sobre cada espécie.

2. **Visualização de Detalhes:** Exibe informações abrangentes sobre os Pokémon, como habilidades, tipos, estatísticas base e outros dados relevantes.

3. **Atualizações em Tempo Real:** Utiliza a PokeAPI para garantir que os dados exibidos estejam sempre atualizados com as informações mais recentes disponíveis.

4. **Testes Interativos:** Integra o Playwright para possibilitar testes automatizados de interações do usuário com a aplicação, assegurando que todas as funcionalidades estejam operando corretamente.

5. **Interface Amigável:** Oferece uma interface frontend intuitiva, construída com HTML, CSS e JavaScript, proporcionando uma experiência de usuário agradável e acessível.

6. **Configuração Simplificada:** Facilita a instalação e execução local através de um processo simples de instalação de dependências e inicialização do servidor.

## Tecnologias:

- **Playwright:** Fornece capacidades de automação para testar aplicações web, garantindo desempenho e funcionalidade confiáveis.
- **PokeAPI:** Uma API RESTful que oferece uma riqueza de dados de Pokémon, incluindo detalhes das espécies, habilidades, tipos e mais.
- **HTML/CSS/JavaScript:** Tecnologias web padrão para construir a interface frontend e lidar com interações.
- **Node.js:** Potencializa o backend para lidar com requisições à API e servir a aplicação.

### Jornada de Desenvolvimento:

A jornada de desenvolvimento do PlaywrightPokedex abrangeu diversas etapas e decisões cruciais, culminando na criação de uma aplicação funcional e eficaz para explorar dados de Pokémon. Utilizando Playwright para testes de ponta a ponta, nossa abordagem foi rigorosamente guiada pelo compromisso com qualidade, usabilidade e funcionalidade. O objetivo principal foi assegurar que o PlaywrightPokedex não apenas atendesse, mas superasse as expectativas dos usuários interessados em explorar e testar dados de Pokémon de forma interativa e automatizada.

## Como Rodar:

Para configurar e executar o PlaywrightPokedex localmente:
1. Clone o repositório do [GitHub](https://github.com/brunomachadors/playwrightpokedex)
2. instalação do Playwright no terminal do VS Code
```bash
npm init playwright@latest
```
3. O Playwright baixará os navegadores necessários e também criará os seguintes arquivos
- playwright.config.ts
- package.json
- package-lock.json
- tests/example.spec.ts
- tests-examples/demo-todo-app.spec.ts
4. Certifique-se de ter Node.js e npm instalados na sua máquina
5. Instale as dependências
```bash
npm install
```
6. Inicie a execução da aplicação localmente
```bash
npm start
```
7. Abra seu navegador e acesse `http://localhost:3000` para usar o PlaywrightPokedex.
8. Execução de testes automatizados
```bash
npm test
```
9. Após a conclusão do seu teste, o relatório HTML é aberto automaticamente
```bash
npx playwright show-report
```
10.   Execução dos testes com o Modo de IU para uma melhor experiência do desenvolvedor com depuração de viagem no tempo
```bash   
npx playwright test --ui
```
11.  Para executar um teste com um título específico, use o -g sinalizador seguido do título do teste
npx playwright test -g "add a todo item"

## Tarefas

- [x] Definição de Requisitos
- [x] Pesquisa e Análise
- [x] Implementação de Funcionalidades
- [x] Integração com a PokeAPI
- [x] Implementação de Testes Automatizados
- [x] Testes Manuais
- [x] Otimização de Desempenho
- [x] Documentação
- [x] Feedback e Melhoria Contínua

### Pré-visualização:
![PlaywrightPokedex](PlaywrightPokedex.png)

## Desenvolvido por:

### Bruno Machado

- [GITHUB](https://github.com/brunomachadors)
- [LINKEDIN](https://www.linkedin.com/in/brunomrs/)
- [INSTAGRAM](https://www.instagram.com/brunomachadors/)

### Débora Silva

- [GITHUB](https://github.com/deborasilva2)
- [LINKEDIN](https://www.linkedin.com/in/debora1silva2/)

### Karina Yamashita

- [GITHUB](https://github.com/KarinaYamashita)
- [LINKEDIN](https://www.linkedin.com/in/karina-yamashita-b82b626b/)

### Tatiana Honda

- [GITHUB](https://github.com/TatianaHonda58)
- [LINKEDIN](https://www.linkedin.com/in/tatiana-honda/)

## Todos os pacotes
### Dependências Principais

1. **express**: Framework web para Node.js que facilita a criação de aplicativos web e APIs.
2. **axios**: Cliente HTTP baseado em promises para fazer requisições à PokeAPI ou outras APIs externas.
3. **react**: Biblioteca JavaScript para construção de interfaces de usuário (se estiver utilizando React no frontend).
4. **react-dom**: Pacote específico para manipulação do DOM e renderização de componentes React.
5. **node-fetch**: Módulo para fazer requisições HTTP nativamente no Node.js.
6. **dotenv**: Carrega variáveis de ambiente de um arquivo `.env` para configurar variáveis de configuração.

### Dependências de Desenvolvimento

1. **playwright**: Framework de automação de testes para aplicativos web, utilizado para testes de ponta a ponta.
2. **jest**: Framework de testes para JavaScript, usado para escrever e executar testes automatizados.
3. **babel**: Transpilador JavaScript moderno que permite usar recursos JavaScript recentes em versões mais antigas do Node.js.
4. **eslint**: Ferramenta de linting para identificar e reportar padrões de código problemáticos em JavaScript.
5. **prettier**: Ferramenta de formatação de código que mantém o estilo consistente no projeto.
6. **nodemon**: Utilitário que monitora alterações nos arquivos e reinicia automaticamente o servidor Node.js durante o desenvolvimento.

## APIs do PlaywrightPokedex: 

1. PokéAPI:
•	Função: A principal API utilizada para obter dados sobre os Pokémons, como nome, tipo, estatísticas, habilidades, evoluções e sprites.
• Documentação: https://pokeapi.co/
2. Playwright:
• Função: Uma biblioteca de teste de ponta a ponta para navegadores da web. Ela permite automatizar tarefas como clicar em botões, preencher formulários e navegar em páginas da web.
• Documentação: https://playwright.dev/
3. Express.js:
• Função: Um framework web minimalista e flexível para Node.js. Ele é usado para criar o servidor web do PlaywrightPokedex.
• Documentação: https://expressjs.com/
4. Mongoose:
• Função: Um Object Document Mapper (ODM) para Node.js. Ele facilita o trabalho com bancos de dados MongoDB.
• Documentação: https://www.mongodb.com/developer/languages/javascript/getting-started-with-mongodb-and-mongoose/
5. Webpack:
• Função: Um bundler de módulos estático para JavaScript. Ele agrupa e otimiza o código JavaScript para melhor desempenho.
• Documentação: https://webpack.js.org/configuration/

## Documentação do PlaywrightPokedex:
• Repositório GitHub: A documentação oficial do PlaywrightPokedex está disponível no repositório GitHub do projeto: https://github.com/brunomachadors/playwrightpokedex
• Wiki do GitHub: O repositório GitHub do PlaywrightPokedex também possui uma wiki que pode conter informações adicionais sobre o projeto: [URL inválido removido]
• Comunidade online: Você pode encontrar informações e discussões sobre o PlaywrightPokedex em comunidades online como Reddit e fóruns de desenvolvedores.

## Dificuldades apresentadas durante o processo de desenvolvimento:
 ### 1. Integração com a PokeAPI

- **Limitações da API:** A PokeAPI pode ter limitações de taxa de requisições ou de dados disponíveis, o que poderia exigir estratégias de cache ou gerenciamento cuidadoso das requisições para garantir desempenho e conformidade com os limites da API.

- **Estrutura Complexa dos Dados:** Lidar com a estrutura complexa dos dados retornados pela PokeAPI e garantir a formatação correta para exibição na interface do usuário pode ter sido desafiador.

### 2. Configuração do Ambiente de Desenvolvimento

- **Configuração de Ambiente:** Configurar corretamente o ambiente de desenvolvimento com todas as dependências, incluindo Node.js, pacotes npm, e ferramentas como Playwright e Jest, pode ter sido um desafio inicial.

- **Compatibilidade de Versões:** Garantir que todas as versões de pacotes e dependências sejam compatíveis entre si para evitar conflitos e problemas de compatibilidade.

### 3. Implementação de Funcionalidades

- **Complexidade das Funcionalidades:** Implementar funcionalidades como a busca de Pokémon, a exibição detalhada dos dados e a integração com Playwright para testes automatizados pode ter exigido tempo e esforço significativos para garantir que todas as partes funcionassem harmoniosamente.

- **Lógica Assíncrona:** Lidar com operações assíncronas, como requisições à API e carregamento dinâmico de dados, pode ter sido desafiador, especialmente ao garantir que a aplicação seja responsiva e eficiente.

### 4. Testes e Qualidade

- **Testes Automatizados:** Escrever testes automatizados robustos usando Playwright e Jest para garantir a funcionalidade adequada da aplicação em diferentes cenários e interações do usuário.

- **Garantia de Qualidade:** Assegurar a qualidade geral da aplicação, incluindo testes manuais, revisões de código e correção de bugs identificados durante o desenvolvimento.

### 5. Otimização e Desempenho

- **Otimização de Desempenho:** Identificar e resolver problemas de desempenho, como tempos de carregamento longos ou uso excessivo de recursos, para garantir uma experiência de usuário fluida.

### 6. Documentação e Comunicação

- **Documentação:** Manter a documentação do projeto atualizada e clara, incluindo o README.md e possíveis outras documentações técnicas para facilitar a colaboração e o entendimento do projeto por parte de outros desenvolvedores.

## Licença:

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](https://github.com/brunomachadors/playwrightpokedex/blob/main/LICENSE) para detalhes.

## Agradecimentos:

- Agradecimentos aos criadores da [PokeAPI](https://pokeapi.co/) por fornecerem o extenso conjunto de dados de Pokémon.
- Inspirado pelas capacidades do [Playwright](https://playwright.dev/) para automação confiável de web e testes.
