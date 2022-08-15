// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

const botaoAtualizar = document.getElementById('botaoAtualizar') as HTMLButtonElement;
const botaoLimpar = document.getElementById('botaoLimpar') as HTMLButtonElement;
const valorSoma = document.getElementById("valorSoma") as HTMLInputElement;
const valorSaldo = document.getElementById('valorSaldo') as HTMLInputElement;

let saldo: number = 0;

function somarAoSaldo(val: number) {
    return saldo += val;
}

function limparSaldo() {
    valorSaldo.innerHTML = '';
}

botaoAtualizar.addEventListener('click', function () {
    if (valorSoma.value) {
        const resultado: any = somarAoSaldo(parseFloat(valorSoma.value));
        valorSaldo.innerHTML = resultado;
    } else {
        alert('Digite um número válido.')
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
