
// Desafio 1
// Exercicio para Criação de classes

class Usuario {
    constructor(name, mail){
        this.nome = name;
        this.email = mail;
        this.admin = false;
    }
    
    isAdmin() {
        return this.admin;
    }

}


class Admin extends Usuario {
    constructor(name, mail) {
        super(name, mail);
        this.admin = true;

    }

}

const user1 = new Usuario('Jefferson', 'jesouza@gmail.com');
const admin1 = new Admin('Jeff','admin@jsol.com');


console.log(user1);
console.log(admin1);

console.log(user1.isAdmin());
console.log(admin1.isAdmin());


// Desafio 2
// De acordo com o vetor e utilizando os métodos de array (map, reduce, filter e find):


//UTILIZANDO MAP
// Retornando idade dos usuários
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat'}, 
    { nome: 'Lucas', idade: 30, empresa: 'Facebook'}
]


const newInfo = [ usuarios.map(function(value) {
        return value.idade;
})];

console.log('Idade dos usuários: ' + newInfo);


// Filter
// variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18
// anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]

const filt = usuarios.filter((item) => { return item.empresa === 'Rocketseat' && item.idade >= 18 });


console.table(`Valor a ser retornado: ${filt}`);


// FIND
// variável que procura por um usuário que trabalhe na empresa Google: undefined

const find = usuarios.find(function(item) {
    return item.empresa === 'Google';
})

console.table(`Busca de valor: ${find}`);


// Operações

const operations1 = usuarios.map((itens) => { return itens.idade * 2 });

const operations = operations1.filter((itens) => { return itens <= 50 });

console.log(operations);


// Desafio 3
// Alterando para Arrow Functions

/* 3.1
const arr = [1, 2, 3, 4, 5];
arr.map(function(item) {
 return item + 10;
});
*/

// 3.1 Alterado
const arr = [1, 2, 3, 4, 5];

const newArr = arr.map((item) => { return item + 10 });

console.log(newArr);

// 3.2
// Dica: Utilize uma constante pra function



// Desafio 4 - Desestruturação

const empresa = {
    name: 'Rocketseat',
    endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
    }
   };

   
   const { name , endereco: { cidade, estado}} = empresa

   console.table(`Realizando Desestruturação: ${name} e ${cidade} e ${estado}`);

// Desafio 7
// Utilize a sintaxe curta de objetos (Object Short Syntax) no seguinte objeto:


const nome = 'Diego';
const idade = 23;
const usuario = {
 nome,
 idade,
 cidade: 'Rio do Sul',
};

console.log(usuario)