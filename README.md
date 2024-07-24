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
![PlaywrightPokedex](public/pokedex.png)

## DESENVOLVIDO POR:

###Bruno Machado

- [GITHUB](https://github.com/brunomachadors)
- [LINKEDIN](https://www.linkedin.com/in/brunomrs/)
- [INSTAGRAM](https://www.instagram.com/brunomachadors/)

## Todos os pacotes


### Licença:

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](https://github.com/brunomachadors/playwrightpokedex/blob/main/LICENSE) para detalhes.

### Agradecimentos:

- Agradecimentos aos criadores da [PokeAPI](https://pokeapi.co/) por fornecerem o extenso conjunto de dados de Pokémon.
- Inspirado pelas capacidades do [Playwright](https://playwright.dev/) para automação confiável de web e testes.
