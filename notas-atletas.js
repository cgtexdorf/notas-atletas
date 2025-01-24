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

function calcularMedia(atletas) {
  for (let i = 0; i < atletas.length; i++) {
    // Ordena as notas em ordem crescente
    let notas = atletas[i].notas.sort((a, b) => a - b);
    
    // Elimina a menor e maior nota
    let notasComputadas = notas.slice(1, 4);
    
    // Calcula a média
    let somaNotas = notasComputadas.reduce((acc, nota) => acc + nota, 0);
    let media = somaNotas / notasComputadas.length;
    
    // Exibe o resultado
    console.log(`Atleta: ${atletas[i].nome}`);
    console.log(`Notas Obtidas: ${notas.join(", ")}`);
    console.log(`Média Válida: ${media.toFixed(9)}`); // Formata a média com 9 casas decimais
    console.log("");
  }
}

calcularMedia(atletas);
