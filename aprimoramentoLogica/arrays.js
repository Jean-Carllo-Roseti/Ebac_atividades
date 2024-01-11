let numero = [1, 2, 3, 4, 5];
console.log("imprimindo array: " + numero);

let frutas = ["banana", "laranja", "uva", "tomate", "kaki"];
console.log("fruta na segunda posição: " + frutas[2]);

let notas = [];

notas.push(7);
notas.push(8);
notas.push(9);
console.log(notas);

let nome = []

nome.push("juca");
nome.push("arnaldo");
nome.push("gorge");
nome.push("nazare");

console.log(nome);

let alunos = ['pedro', 'henrique', 'glauco', 'toto']
console.log(alunos);
alunos.pop(); // remove o ultimo elemento do array
console.log(alunos);
alunos.splice(1, 1); // remove o elemento q vc deseja atraves dos paramentros (posição, numero de elementos.) (1= henrique, 1= quantidade de elementos nessa posição.)
console.log(alunos);


let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    for(i = 1; i < numeros.length; i++) {
        console.log(numeros[i]);
    }


let cores = ['azul', 'amarelo', 'branco', 'cinza', 'coral', 'vermleho'];
console.log("imprimindo a primiera cor: " + cores[0]);
console.log("imprimindo a segunda cor: " + cores[cores.length -1]);


let nuumeros = [1, 2, 3, , 4, 5, 6, 7, 8, 9, 10, 11];
console.log(nuumeros.length);

let moveis = ['cadeira', 'mesa', 'armario', 'bancada'];
console.log(moveis);
moveis[2] = 'carrinho';
console.log(moveis);
moveis[1] = 'caminhão';
console.log(moveis);
moveis[0] = 'sapateira';
console.log(moveis);
moveis[moveis.length -1] = 'testeUltima';
console.log(moveis);



let part1 = [1, 2, 3, 4, 5];
let part2 = [6, 7, 8, 9, 10];
resultado = part1.concat(part2); // array1.concat(array2),  "conct"  comando resposnsavel por concatenar arrays.
console.log(resultado); 



let numericos = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let numerosInvertido = numericos.reverse(); 
console.log(numerosInvertido);

// estar atento as funções, necessário reforçar.

let nomes = [ 'jose', 'pedro', 'antonio', 'rubens', 'altair'];
function buscarNome (nome) {
    for (let i = 0; i < nomes.length; i++) {
        if (nomes [i] === nome) {
            return true;
        }
    }
    return false;
}

console.log(buscarNome('jose'));

//calcular o produto de duas listas

let listaA = [1, 2, 3]
let listaB = [4, 5, 6, 9]



function equacao (listaA, listaB) {

    if (listaA.length !== listaB.length) {
        throw new Error("Os vetores devem ter a mesma dimensão."); // esse erro aparece como um erro de sistema !! similar aos erros comuns q o sistema acusa.
    }

    let produto =0
    for (let i = 0; i < listaA.length; i++) {
        produto += listaA[i] * listaB[i];
    }
    return produto  
}

const resultado = equacao(listaA, listaB); // para exibir a função resolvida e chamala no console.log, "'é necessario criar uma varial para evoca la'".
console.log('Produto escalar: ' + resultado);


/*Desafio: Calcular a diferença simétrica de duas listas
Escreva um código que receba duas listas de números fornecidas pelo usuário e calcule a diferença simétrica dessas listas. 
A diferença simétrica é uma nova lista que contém apenas os elementos que aparecem em uma das listas, mas não em ambas. Imprima a nova lista resultante.
*/

let listaNumA = [2, 1, 5, 6, 77, 22, 11];
let listaNumB = [2, 1, 77, 6, 4, 90, 12];
let newList = [];


function novaLista (listaNumA, listaNumB) {
    for ( let i = 0; i < listaNumA.length; i++) {
    if (!listaNumB.includes(listaNumA[i]) && !newList.(listaNumA[i]) ) { // ter em mente q ao usar o comando "includes", neste caso tem de trabalhar primeiro a lista, "listaNumB" sem o [i].
        newList.push(listaNumA[i]);         
    }

    }
    for ( let i = 0; i < listaNumB.length; i++) {
    if (!listaNumA.includes(listaNumB[i]) && !newList.includes(listaNumB[i])) {
        newList.push(listaNumB[i]);
    }
    }
}
novaLista(listaNumA, listaNumB);
newList.sort((a, b) => a - b);
listaNumA.sort((a, b) => a - b);
listaNumB.sort((a, b) => a - b);
console.log("Lista A: " + listaNumA);
console.log("Lista B: " + listaNumB);
console.log(" nova lista: " + newList);


/*Desafio: Calcular a média dos elementos de uma lista
Escreva um código que receba uma lista de números fornecida pelo usuário e calcule a média dos elementos. Imprima o resultado.
*/

let vetorB = [2, 4, 7, 12, 2];
let vetor = [1, 3, 5, 9, 8];


function   mediaVetor (vetorB) { // lembrar de declarar quais variaveis vão ser utilizadas na "function"
    let soma = 0; // lembrar de declarar uma variavel para receber o valor das somas
    for (let i = 0; i < vetorB.length; i++) {
        soma += vetorB[i]; // soma = soma + vetorB[i] = lembrete!!
    }
    let media = soma / vetorB.length;
    return media
}

let resultadoMedia = mediaVetor(vetorB); // crair uma variavel para associar a "function", estar atento a isso.
console.log(" media do vetor: " + resultadoMedia);

/* Desafio: Encontrar o segundo maior elemento em uma lista
Escreva um código que receba uma lista de números fornecida pelo usuário e encontre o segundo maior elemento da lista. Imprima o resultado.
*/

let vetorTest = [2, 8, 9, 1, 4, 11, 21, 22, 4, 5, 13];

vetorTest.sort((a, b) => a - b)
console.log("exibindo o array: " + vetorTest)
console.log("exibindo o segundo maior numero do array: " + vetorTest[vetorTest.length - 2]);
console.log("exibindo o menor elemento do array: " + vetorTest[0])

/* Desafio: Calcular a soma dos elementos em uma lista de listas
Escreva um código que receba uma lista de listas de números fornecida pelo usuário e calcule a soma de todos os elementos presentes nas listas. Imprima o resultado.*/

let listaL = [
    [2, 7, 8, 4, 6],
    [1, 4, 7, 6, 5],
    [9, 8, 1, 4, 3],
    [5, 4, 1, 2, 7],
];

function listaOperando(lista) {
    let soma = 0;   
    let totalElementos = 0;

    // Percorrendo a lista de listas
    for (let i = 0; i < lista.length; i++) {
        const listaInterna = lista[i];
        totalElementos += listaInterna.length; // trecho responsavel por somar a quantidade de elementos nas listas da lista, n seria possivel realizar o códgio sem ele,
// a operção "media = soma / listanterna.lenth" n aconteceria, pois o "listaInterna.length " n é a soma de todos os elementos das listas da lista.
        for (let j = 0; j < listaInterna.length; j++) {
            soma += listaInterna[j];
        }  // totalElementos++ => essa tbm poderia ter sido uma opção.
    }

    const media = soma / totalElementos; //a minha operação n estava totalemente errada, faltou uma variável para contar a quantidade de elementos. "totalElementos"

    return { soma, media };
}

const { soma, media } = listaOperando(listaL); //tenho de entender melhor como evocar a função
console.log("Soma dos elementos:", soma);
console.log("Média dos elementos:", media);

// n consegui resolver, precisei de ajuda.

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*Desafio: Encontrar o elemento que mais se repete em uma lista
Escreva um código que receba uma lista de números fornecida pelo usuário e encontre o elemento que mais se repete na lista.
Caso haja mais de um elemento com a mesma quantidade máxima de repetições, imprima todos os elementos correspondentes.*/

let numeros = [2, 2, 2, 3, 3, 8, 8, 1, 5];
let outra = [];

function qualRepete(numeros) {
    let contador = {};

    // Contar as repetições de cada elemento
    for (let i = 0; i < numeros.length; i++) {
        let elemento = numeros[i];
        if (contador[elemento]) {
        contador[elemento]++;
        } else {
        contador[elemento] = 1;
        }
    }

    // Encontrar a quantidade máxima de repetições
    let maxRepeticoes = 0;
    for (let elemento in contador) {
        if (contador[elemento] > maxRepeticoes) {
        maxRepeticoes = contador[elemento];
        }
    }

    // Encontrar os elementos com a quantidade máxima de repetições
    for (let elemento in contador) {
        if (contador[elemento] === maxRepeticoes) {
        outra.push(parseInt(elemento)); // Converte o elemento para número (opcional)
        }
    }
}

qualRepete(numeros);
console.log("lista de números repetidos: " + outra);


//------------------------------------------------------------------------------------------------------------------------------------------------


//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* Desafio: Concatenar listas
Escreva um código que receba duas listas de números fornecidas pelo usuário e crie uma nova lista que seja a concatenação das duas listas originais.
Imprima a nova lista resultante.*/

let cinco = [1, 2, 3, 4, 5];
let zero = [6, 7, 8, 9, 0];
let novo = cinco.concat(zero);

console.log ("junção da listaA: " + cinco + " e listaB: " + zero);
console.log("resultante: " + novo); 
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------


//exemplos de "for in"
const pessoa = {
    nome: "João",
    idade: 30,
    profissao: "Engenheiro",
};

for (let propriedade in pessoa) {
    console.log(propriedade + ": " + pessoa[propriedade]);
}
//-----------------------------------------------------------------------------
const numeros = [1, 2, 3, 4, 5];
for (let indice in numeros) {
    console.log("Índice: " + indice + ", Valor: " + numeros[indice]);
}
//-----------------------------------------------------------------------------
let chamada = ["jorge", "izaias", "zacarias", "malmal", "yulla"];
for (let nomes in chamada) {
    console.log ("ordem numérica: " + nomes + ", nomes: " + chamada[nomes]);
}

/*Desafio: Encontrar o maior elemento em uma lista
Escreva um código que receba uma lista de números fornecida pelo usuário e encontre o maior elemento da lista utilizando o laço "for in". Imprima o resultado.*/

function encontrarMaiorElemento(lista) {
    let maiorElemento = lista[0];

    for (let indice in lista) {                     // fazendo a iteração,
    if (lista[indice] > maiorElemento) {            // "lista [indice]", esse item é reposnsavel por percorrer tds as posições do array, "array = lista" e "indice = i"
        maiorElemento = lista[indice];              // "maiorElemento" sendo associado ao maior resultado encontrado no array, essa variavel "maiorElemento" começou na posição 0
    }
    }

    return maiorElemento;
}

// Exemplo de uso
const listaDeNumeros = [10, 5, 8, 15, 3, 12];
const maior = encontrarMaiorElemento(listaDeNumeros);
console.log("O maior elemento da lista é: " + maior);
 //--------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*Desafio: Verificar se uma palavra é um palíndromo
Escreva um código que receba uma palavra fornecida pelo usuário e verifique se ela é um palíndromo (ou seja, 
se pode ser lida da mesma forma de trás para frente) utilizando o laço "for in". Imprima uma mensagem correspondente..*/

let palavra = "salas";
const tentaiva = checkpalavra(palavra)


function checkpalavra (palavra) {
    if (palavra[palavra.length - 1] === palavra[0] && palavra[palavra.length -2] === palavra[1] && palavra[palavra.length - 3] === palavra[2]) {
        return true;
    }
    
    return false;
}

if (tentaiva) {
    console.log("essa palavra é: " + palavra +" é um políndromo");
} else {
    console.log("essa palavra não é: " + palavra +" é um políndromo ")
}


//----------------------------------------------------------------------------------------------------------------------------------------------------------------------
// resposata do chat, 

function verificarPalindromo(palavra) {
    let tamanho = palavra.length;
    let metade = Math.floor(tamanho / 2);

    for (let i = 0; i < metade; i++) {
        let primeiroCaractere = palavra[i];
        let ultimoCaractere = palavra[tamanho - 1 - i]; //importante observar, essa iterção de "tras pra frente" occore de maneira simultanêa com o "i", 

        if (primeiroCaractere !== ultimoCaractere) {
            return false; // Se algum caractere não corresponder, não é um palíndromo
        }
    }

    return true; // Se todos os caracteres corresponderem, é um palíndromo
}

const palavraUsuario = "local";
const ehPalindromo = verificarPalindromo(palavraUsuario);

if (ehPalindromo) {
    console.log("A palavra é um palíndromo! " + palavraUsuario);
} else {
    console.log("A palavra não é um palíndromo. " + palavraUsuario);
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Calcular a média de notas de um grupo de alunos.  ESTAR ATENTO A SINTAXE "+=" ESTAVA ERRADA!!!

function mediaAlunos (notas) {
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i]; // estar atento a sintaxe "=+" esta errado, o código n funciona desta maneira. "+=" CORRETO
    }
    let media =  (soma / notas.length);
    if (media < 7 ) {
        console.log("O aluno não atingiu a média, n foi aprovado: " + media);
    } else {
        console.log("o aluno atigiu a média, foi aprovado: " + media);
    }
}

let notas = [2, 10, 7.7, 8, 10];
let soma = 0;
let tela = mediaAlunos (notas);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

function usandoSort (temperatura) {
    temperatura.sort((a, b) => a - b);
    console.log("temperatura mínima: " + temperatura[0]);
    console.log("temperatura máxima: " + temperatura[temperatura.length - 1]);
}

let temperatura = [22, 18, 35, 42, 10, 8, -1];
let naTela = usandoSort (temperatura);

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------


function usandoLoop (temperatura) {
    let tempMinima = 0;
    let temMaxima = 0;

    for (let i = 0; i < temperatura.length; i++) {
        if (temMaxima > temperatura[i]) {
            temMaxima = temperatura[i]
        } else if (tempMinima < temperatura[i]) {
            tempMinima = temperatura[i];
        }
    }
    return {maxima: temMaxima, minima: tempMinima};  //necessario trabalhar mais com "Retun", deixa a exibição de output mais organizada; oberver como foi escrito 
}                                                    // a sintaxe "return { maxima: tempMaxima, minima: tempMinima}". associando outras palabras as variaveis da função

let temperatura = [22, 18, 35, 42, 10, 8, -1];
let novoModo = usandoLoop (temperatura)

console.log("temperatura máxima: " + novoModo.maxima); //exibindo o variavel apresentada pelo "return" importa ter em mente.
console.log("temperatura mínima: " + novoModo.minima);

















function usandoForOF(temperatura) {
    let tempMinima = temperatura[0];
    let tempMaxima = temperatura[0];

    for (let elemento of temperatura) {
        if (elemento > tempMaxima) {
            tempMaxima = elemento;
        } else if (elemento < tempMinima) {
            tempMinima = elemento;
        }
    }
    return { maxima: tempMaxima, minima: tempMinima };
}

let temperatura = [22, 18, 35, 42, 10, 8, -1];
let maisModo = usandoForOF(temperatura);

console.log("temperatura máxima: " + maisModo.maxima);
console.log("temperatura mínima: " + maisModo.minima);



















// desafio usando "contador{}".























