//Objetos
//Criar objetos:
/*

  const pessoa = {
    nome: 'Yuri',
    sobrenome: 'Cestaro',
    idade: 16
};

*/
// acessar algo de dentro do objeto
// console.log(pessoa.idade);

//Criar funções que criam objetos desses pra mim 
/*
function criaPessoa(nome, sobrenome, idade) { 
    return { nome, sobrenome, idade };
}
*/ 

// const pessoa01 = criaPessoa('Yuri', 'Cestaro', 16); // argumentos passados para o parâmetro da função
// console.log(pessoa01.idade);

//função dentro do objeto
/*
const pessoa1 = {
    nome:'Luiz',
    sobrenome:'Jotinha',
    idade: 16,

    fala() { //Metodo
        console.log('Olá Mundo');

    }
};

pessoa1.fala();
*/

// This (se referencia algo objeto que está e no contexto q está)

const pessoa2 = {
    nome:'Jovem',
    sobrenome:'Jotinha',
    idade: 16,

    fala() { //Metodo
        console.log(`${this.nome} ${this.sobrenome} está dizendo oi...`);

    }
};

pessoa2.fala();
