const button = document.getElementById("button");
const input1 = document.getElementById("input1") as HTMLInputElement;
const input2 = document.getElementById("input2") as HTMLInputElement;
let devePrintar = true;
const frase = 'O valor da soma é: ';

function adicionarNumero(numero1: number, numero2:number, devePrintar: boolean, frase:string) {
    let resultado = numero1 + numero2
    if(devePrintar) {
        console.log(frase + resultado)
    }
    return numero1 + numero2
}



if (button) {
    button.addEventListener('click', () => {
        if (input1 && input2) {
            console.log(adicionarNumero(Number(input1.value), Number(input2.value), devePrintar, frase));
        }
    })
}
