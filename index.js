

//Conforme solicitado no projeto:
// 1 variavel para armazenar as informações de gastos no formato descrição, valor e categoria.
// e uma função para cada informação que queremos. s



const gastos = [
  {
    descricao: "",
    valor: 0.0,
    categoria: ""
  }
];

function adicionarGasto(descricao, valor, categoria) {
  if (!descricao || valor <= 0 || !categoria) { //descrição e categoria não pode ser vazia, valor deve ser maior que 0
    console.log("Dados inválidos");
    return;
  }

  gastos.push({ descricao, valor, categoria });
}

function listarGastos() {
  if (adicionarGasto === true){
    console.log(`${gastos.descricao} - R$ ${gastos.valor}`);}
    else
      console.log("Não ouve nenhum gasto informado.")
  }

function cacularTotal() {
  let total = 0
  for (let gasto of gastos) { // o for of, vai ser utilizado para fazer o loop do campo gastos, e ai logo em seguida somamos e chamaos a variavel total
    total += gasto.valor
  }
}

function filtrarPorCategoria(categoria) {
  const gastosFiltrados = [];

  gastos.forEach(gasto => {
    if (gasto.categoria === categoria) {
      gastosFiltrados.push(gasto);
    }
  });

  return gastosFiltrados;
}

function 
