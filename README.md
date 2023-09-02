# Recly
### Aplicação Front End - desenvolvida com ReactJS Native v0.70.5 e expo v47.0.12
Desenvolvimento de uma aplicação voltada para incentivar e facilitar o processo de reciclagem para qualquer pessoa a ou organização.

-------------

## Equipe

- Erick de Araujo Ferreira 
- Adriel Correa Matielo
- Danilo Machado de Souza
- Gabriela Maria dos reis

## Descrição das telas e fluxos

- Autenticação (Login e registro) que encaminham para a home
- No topo pedemos vizualizar um atalho para a pagina do usuairio, atalho para a pagina de artigos marcados e um botão vizualizar as notificações
- No fundo podemos vizualizar o menu de navegação que contem as páginas "Home", "Locais", "Agenda" e "Perfil"
#### Home
- Tela inicial atalhos e os aritgos recém publicados
- Atalho "Cotações" exibe a lista de cotações dos mais populares itens reciclaveis
- Atalho "Meus itens" exibi a lista dos itens que o usuário reciclou
- Nessa mesma pagána é possivel adicionar mais 
- Voltando para a home, na lista de artigos tem o botão "ver todos" que encaminha para a página com todos os artigos publicados
- Ao clicar em um artigo, abre a página completa
#### Locais
- Exibe um mapa com os centros de reciclagens próximos
- Ao selecionar um, é possivel vizualizar os dados como, endereço, telefone, etc.
#### Agenda
- Exibi a lista de agendamentos do usuário
- Ao clicar no banner a cima, abre um modal com formulário para realizar o agendamento
- Ao clicar em editar no card da lista, abre o mesmo modal para edição, com a regra que so pode ser editado até 24 horas antes do horário agendado
#### Perfil
- No topo da página, contem o nome do usuário e o email
- Logo a abaixo tem as opções "Detalhes da conta", "Política de privacidade", "Segurança" e "Sair" 
- Em detalhes da conta, podemos vizualizar o total de itens que o usuário já reciclou e as informações cadastrais.
- Em política de privacidade, podemos vizualizar o termo da política do app
- Em segurança, podemos vizualizar as precauções com a segurança que o app garante
- E em sair podemos deslogar da conta e voltar para a página de autenticação



## Ferramentas Utilizadas

* [react-hook-form `<@hookform/resolvers & yup>`](https://react-hook-form.com/)
* [styled-components](https://styled-components.com/)
* [react-native-actions-sheet](https://www.npmjs.com/package/react-native-actions-sheet)
* [Axios](https://axios-http.com/ptbr/docs/intro)
* [react-native-maps](https://github.com/react-native-maps/react-native-maps)


