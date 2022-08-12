const person = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'desenvolvedora'
}

pessoa.idade = 25;

const andre: (nome: string, idade: number, profissao: string) = {
    nome: 'Andre',
    idade: 25,
    profissao: 'pintor'
}


// Problema: profissões podem ser escritas de formas diferentes
// Solução: enum + interface
enum Profissao {
    Professora,
    Atriz,
    Desenvolvedor,
    Jogador,
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

// Interface Estudante herda Pessoa
interface Estudante extends Pessoa {
    materias: string[]
}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedor
}

const monica: Estudante = {
    nome: 'Monica',
    idade: 29,
    materias: ['Matemática discreta', 'Álgebra booleana']
}
const jessica: Estudante = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profissao.Desenvolvedor,
    materias: ['Matemática discreta', 'Programação']
}

function listar(lista: string[]) {
    for (const item of lista) {
        console.log('- ', item);
    }
}

listar(monica.materias);