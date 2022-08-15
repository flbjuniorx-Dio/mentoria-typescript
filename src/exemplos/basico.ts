const btn = document.getElementById('button');
const inp1 = document.getElementById('input1') as HTMLInputElement;
const inp2 = document.getElementById('input2') as HTMLInputElement;

/**
 * Exemplo de função com parâmetros tipados
 */
function somaValidaComPrint(numero1: number, numero2: number, printResultado: boolean, resultMsg: string) { 
    const resultado = numero1 + numero2;
    if (printResultado) {
        console.log(resultMsg + resultado);
    }
    return resultado;
}

// A variável abaixo tem seu tipo inferido pelo valor inicial
let printResultado = true;
// já nesse caso estamos dizendo explicitamente qual é o seu tipo
let resultMsg: string;
// E só depois iniciamos ela com um valor
resultMsg = "O número é ";

// Como a busca pelo button na linha 1 pode trazer um null (já que esse id pode não estar presente no index.html), é importante confirmar se ele tem um valor
if (button) {
    button.addEventListener('click', () => {
        console.log(somaValidaComPrint(Number(inp1.value), Number(inp2.value), printResultado, resultMsg));
    }); 
}