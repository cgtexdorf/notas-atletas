# notas-atletas
Repositório criado para publicação do Projeto de certificação 1 - Pontuação dos atletas | Curso Devstart

Este projeto foi desenvolvido para calcular a média das notas de atletas em uma competição de ginástica artística. A média é calculada considerando apenas as três notas do meio, desconsiderando a maior e a menor nota de cada atleta.

Funcionalidade
A aplicação recebe o nome de cada atleta e as 5 notas atribuídas pelos jurados. Em seguida, ela realiza os seguintes passos:
Ordena as 5 notas do atleta.
Elimina a maior e a menor nota.
Calcula a média das 3 notas restantes.
Exibe o nome do atleta, as notas e a média calculada.

Estrutura dos Dados
A entrada é uma matriz de objetos, onde cada objeto representa um atleta, contendo:
nome: Nome do atleta.
notas: Um array de 5 notas atribuídas pelos jurados (de 1 a 10).

Exemplo de entrada
let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas:  [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];

Saída esperada
Para cada atleta, a saída será exibida no formato:
Atleta: [Nome do atleta]
Notas Obtidas: [Notas]
Média Válida: [Média calculada]

Como Executar
Clone o repositório:
git clone https://github.com/[seu_usuario]/notas-atletas.git
Abra o arquivo notas-atletas.js em um editor de texto.

Execute o código em qualquer ambiente JavaScript.

O código irá calcular e exibir a média das notas dos atletas no console.
