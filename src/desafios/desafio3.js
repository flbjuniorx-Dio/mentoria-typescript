// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
var botaoAtualizar = document.getElementById('botaoAtualizar');
var botaoLimpar = document.getElementById('botaoLimpar');
var valorSoma = document.getElementById("valorSoma");
var valorSaldo = document.getElementById('valorSaldo');
var saldo = 0;
function somarAoSaldo(val) {
    return saldo += val;
}
function limparSaldo() {
    valorSaldo.innerHTML = '';
}
botaoAtualizar.addEventListener('click', function () {
    if (valorSoma.value) {
        var resultado = somarAoSaldo(parseFloat(valorSoma.value));
        valorSaldo.innerHTML = resultado;
    }
    else {
        alert('Digite um número válido.');
    }
});
botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */
