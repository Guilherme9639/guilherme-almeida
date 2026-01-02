

//Conforme solicitado no projeto:
// 1 variavel para armazenar as informações de gastos no formato descrição, valor e categoria.
// e uma função para cada informação que queremos. s



const gastos = [];

function adicionarGasto(descricao, valor, categoria) {
  if ( !descricao || valor <= 0 || !categoria) { //descrição e categoria não pode ser vazia, valor deve ser maior que 0
    console.log("Dados inválidos");
    return;
  }

  gastos.push({ descricao, valor, categoria });
}

function listarGastos() {
  if (gastos.length === 0) {
    console.log("Não houve nenhum gasto informado.");
    return;
  }

  for (let gasto of gastos) {
    console.log(`${gasto.descricao} - R$ ${gasto.valor}`);
  }
}

function calcularTotal() {
  let total = 0
  for (let gasto of gastos) { // o for of, vai ser utilizado para fazer o loop do campo gastos, e ai logo em seguida somamos e chamamos a variavel total
    total += gasto.valor
  }
  return total;
}

function filtrarPorCategoria(categoria) {
  const gastosFiltrados = [];

  gastos.forEach(gasto => {
    if (gasto.categoria === categoria) { //
      gastosFiltrados.push(gasto);
    }
    else
      console.log("Categoria não encontrada")
  });

  return gastosFiltrados;
}

adicionarGasto()
listarGastos()

