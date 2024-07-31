# Playwrightpokedex

PlaywrightPokedex é um framework de testes para explorar dados de Pokémon usando Playwright para testes de ponta a ponta. Ele utiliza a PokeAPI para buscar informações abrangentes sobre as espécies de Pokémon, permitindo aos usuários procurar, visualizar os detalhes e interagir com os dados dos Pokémon em um ambiente real de teste.

## Tecnologias:

- **Playwright:** Fornece capacidades de automação para testar aplicações web, garantindo desempenho e funcionalidade confiáveis.
- **PokeAPI:** Uma API RESTful que oferece uma riqueza de dados de Pokémon, incluindo detalhes das espécies, habilidades, tipos e mais.
- **JavaScript:** Tecnologias web padrão para construir a interface frontend e lidar com interações.
- **Node.js:** Potencializa o backend para lidar com requisições à API e servir a aplicação.
  
## Jornada de Desenvolvimento:

O PlaywrightPokedex é um framework de testes projetado para explorar dados sobre Pokémon, utilizando o Playwright para realizar testes de ponta a ponta. Com a integração da PokeAPI, o framework permite acessar informações detalhadas sobre diversas espécies de Pokémon, oferecendo aos usuários a capacidade de pesquisar, visualizar detalhes e interagir com os dados em um ambiente de teste realista.
As tecnologias utilizadas foram Playwright, PokeAPI, JavaScript e Node.js.

Na primeira etapa, fizemos o desenvolvimento dos types, fossils e regions, porque existia uma performance muito ruim da parte da listagem dos pokémons por causa de um número de pokémons que era muito elevado. Portanto, nós priorizamos ter testes mais estáveis de automação nesta etapa. Dentro da nossa abordagem, nós estamos tentando estabelecer uns padrões ainda da automação, como por exemplo utilizar o base url, o page object modal e o test describe and test step.

## Como Rodar:

Instalação do PlaywrightPokedex:
1. Clone o repositório do [GitHub](https://github.com/brunomachadors/playwrightpokedex)

2. Instale todas as dependências
```bash
npm install
```

Comandos utéis:
1. Executar os testes 
```bash
npx playwright test
```
2. Para ver os relatórios abertos em HTML 
```bash
npx playwright report
```
3. Executar os testes no modo que usa a interface
```bash   
npx playwright test --ui
```

## Tarefas

- [x] Instalação e configuração do projeto 
- [x] Automação da página types, regions e fossils
- [ ] Page objects modal
- [ ] Base url
- [ ] Test describe 
- [ ] Test step

## Pré-visualização: (**Obs.: Colocar o Playwrigh para exibir no modo ui e colocar uma imagem funcionando.**)
![PlaywrightPokedex](PlaywrightPokedex.png)


## Desenvolvido por:

### **Bruno Machado**

- [GITHUB](https://github.com/brunomachadors)
- [LINKEDIN](https://www.linkedin.com/in/brunomrs/)
- [INSTAGRAM](https://www.instagram.com/brunomachadors/)

### **Débora Silva**

- [GITHUB](https://github.com/deborasilva2)
- [LINKEDIN](https://www.linkedin.com/in/debora1silva2/)

### **Karina Yamashita**

- [GITHUB](https://github.com/KarinaYamashita)
- [LINKEDIN](https://www.linkedin.com/in/karina-yamashita-b82b626b/)

### **Tatiana Honda**

- [GITHUB](https://github.com/TatianaHonda58)
- [LINKEDIN](https://www.linkedin.com/in/tatiana-honda/)

## Pacotes de Dependências de Desenvolvimento

1. **Playwright**: Framework de automação de testes para aplicativos web, utilizado para testes de ponta a ponta.
2. **Eslint**: Ferramenta de linting para identificar e reportar padrões de código problemáticos em JavaScript.
3. **Prettier**: Ferramenta de formatação de código que mantém o estilo consistente no projeto.

## API do PlaywrightPokedex: 

**PokéAPI**:
- Função: A principal API utilizada para obter dados sobre os Pokémons, como nome, tipo, estatísticas, habilidades, evoluções e sprites.
- Documentação: https://pokeapi.co/

## Documentação do PlaywrightPokedex:
• Repositório GitHub: A documentação oficial do PlaywrightPokedex está disponível no repositório GitHub do projeto. 
https://github.com/brunomachadors/playwrightpokedex

## Dificuldade Apresentada Durante o Processo de Desenvolvimento:

- A funcionalidade de pokémon retornava uma quantidade muito grande de pokémons, o que resultava em quebra. Por essa razão, decidimos não aautorizá-la dentro da automação. Sendo que um problema semelhante ocorre com a quantidade de itens listados.

## Considerações:
- Esse projeto de automação foi desenvolvido durante a Mentoria do projeto voluntário Diaristando, sendo o nosso mentor o Bruno Machado.
- Os dispositivos que estamos cobrindo são os navegadores Chrome, Firefox, Safari.
- Projeto Diaristando: O projeto visa simplificar e otimizar o processo de contratação de serviços de diaristas, proporcionando uma plataforma inovadora que conecta de forma eficiente clientes finais a prestadoras de serviços de limpeza.
