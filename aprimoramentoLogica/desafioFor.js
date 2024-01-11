// primero a ser concluido, sem ajuda do chat!!
for (let  i = 1; i < 20; i++){
    if (!i % 2 ===0){
    console.log("numero ìmpar :" + i );
    }
}

/*primeiro desafio com array, houve consulta
nessario se atentar a sintaxe e a construção da condição do "for" 
*/

const listaNumeros = [2, 9, 17, 22, 19];
let soma = 0;

for (let i = 0; i< listaNumeros.length; i++) {
    soma += listaNumeros[i];
}

const media = soma / listaNumeros.length;
console.log ("A média desta lista é: " + media);

/* multiplos de 3 de 1 a 30
SEMPRE COLOQUE A CONDIÇÃO DO IF U ELSE IF 

EX: ELSE IF (CONDIÇÃO); IF (CONDIÇÃO)
*/

for (let i = 1; i <= 30; i++) {
    if(i % 3 === 0){
    console.log("multiplos de 3: " + i)
    } else if (i % 2 === 0){ 
        console.log("multiplos de 2: " + i)
    }
}

/* 
usando nova IA, Bing AI.
neste desafio, 
*/

for (let i = 1; i <= 100; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
    console.log("Fizz Buzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

for ( let i = 1; 1 < n < 100; 1++);
    if (i % 3 === 0) {
        console.log()
    }


/*
atenção no comando "repeat" 
*/
    const n = 100;

for (let i = 1; i < n; i += 2) {
    console.log('*'.repeat(i));
}

/*
desafio usando o chat gpt, mt melhor dos outros q testei.
necessário se atentar a sintaxe, usando "palavra[i]" pude acessar a string, como se tivesse acessando os elementos do array.

*/

const palavra = "tentandoMuitoOBasico"       
const letra = "a"
let contador = 0 

for (let i = 0; i < palavra.length; i++) {
    if (palavra[i] === letra) {
        contador++;
    }
}
console.log("total de letras: " + contador);

/*
Desaio da string invertida, n sei qual o comando responsavel por inverter a string. continuo com dificuldades lógicas, n sei commo devo intensificar meus esforços...
1. estundando com o chat pude obeter a logica por trás desta condição "string - 1";
ao darmos a condição 'novaPalrava -1' sabendo a string em questão é banana, podemos obeter q banana detem 6 posições, para o [i] inicie na ultimo, temos de fazer com q o numero total de elementos seja colocar no loop.
da seguinte forma string - 1 resulta na posição final, fazendo com q o comando "for" inicie com o [I] na posição final e depois apenas decremente i--.
importante resaltar q o uso da length é de suma importancia para a interação com os elementos. "string.length -1".
Obs: necessário estar atento a variavel vazia " let = '' ".
*/

const novaPalavra ="banana";
let invertida = "";

for (let i = novaPalavra.length - 1; i>= 0; i --) {
    invertida += novaPalavra[i];
}
console.log(invertida);

/*
Desafio Fatorial
tive dificuldade no conceito matemático, o código ficou mais difícil por causa disso, pois ma estruta eu acertei em um determinado momento.
Obds: novamente onde eu deveria colocar "I" eu coloquei 1, devo corrir este erro.
*/

const num = 5;
let fatorial = 1;

for (let i = 1; i <= num; i++) {
    fatorial *= i; 
}
console.log("resultado :" + fatorial);

/*
Desafio, chegar em um sequencia quais são os numeros primos.
estar atentto ao utilizar o I "iteração" ATENÇÃO, N COLOQUE O 1 NO LUGAR DO I, formual para checar se o numer é primo, 
*/

function numPrimo(numero) {
    if (numero <= 1) {
        return false;
    }

for (let i = 2; i <= Math.sqrt(numero); i++) {
    if(numero % i === 0) {
        return false;
    }
}
return true;
}   

const numero = 
console.log(numPrimo(numero));

/*
resposta do chat, n consegui concluir este desafio, ainda é muito complexo para mim.
*/

function encontrarPrimos(inicio, fim) {
for (let numero = inicio; numero <= fim; numero++) {
    let ehPrimo = true;

    if (numero <= 1) {
    ehPrimo = false;
    } else {
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
        ehPrimo = false;
        break;
        }
    }
    }

    if (ehPrimo) {
    console.log(numero);
    }
}
}

encontrarPrimos(1, 25);


/*
Desafio: Contagem regressiva
Escreva um código que faça uma contagem regressiva a partir de um número fornecido até 0. Use o comando for para percorrer os números em ordem decrescente e imprima cada número.
n consegui concluir este código, vou tentar algo extremamente basico, e buscar evoluir aos poucos.
*/

function contagemRegressiva(numeroInicial) {
if (isNaN(numeroInicial) || !Number.isInteger(numeroInicial) || numeroInicial < 0) {
    console.log('Número inicial inválido. Digite um inteiro não negativo.');
    return;
}

for (let i = numeroInicial; i >= 0; i--) {
    console.log(i);
}

console.log('Contagem regressiva concluída!');
}

contagemRegressiva(10); // Exemplo de uso

/*
Vou tentar retornar ao básico, n estou progredindo desta maneira.
*/

for (let i = 1; i <= 10; i++) {
    console.log("sequência: " + i);
}


/*
muita falta de atenção, epreciso reforçar o basico!!
trabalhar com funções!!
*/
function imprimirTabuada (numero) {
    for (let i =1; i <= 10; i++) {
        let resultado = numero * i
        console.log(numero + "x" + i + "=" + resultado);
    }
}
const daVez = 8 
imprimirTabuada(daVez)

/*
Desafio: Calcular a soma dos números de 1 a 100
Escreva um código que calcule e imprima a soma dos números de 1 a 100.
*/

let soma = 0 

for (let i = 1; i <= 100; i++) {
    soma += i;
}
console.log("A soma total de 1 ate 100: " + soma);

let num1 = 1
let num2 = 4

soma = num1 + num2

console.log("resultado: " + soma);

let idade = 18 

if (idade >= 18) {
    console.log("vc é maior de idade")
} else {
    console.log("Sua idade é menor q 18") 
}

        for (let i = 1; i <= 10; i++) {
        console.log("imprimindo os números: " + i);
    }

function calculaQuadrado (a) {
    let resultado = a * a;
    return resultado;
}

let nuumero = 5;
let resultado = calculaQuadrado(nuumero);
console.log("Resultado da equação: ", resultado);

let nome = "Arnaldo";
let comprimento = nome.length;

console.log("total de letras: " + comprimento);

let valor1 = 7;
let valor2 = 7;

let resultado = multiplica(valor1, valor2);
console.log(resultado)

function multiplica (a, b) {
    let resultado = a * b;
    return resultado;
}

let numero = -1

if (numero < 0 ) {
    console.log("este numero é negativo: " + numero)
} else if (numero === 0) {
    console.log("esse numero é neutro: " + numero)
} else {
    console.log("este numero é positivo: " + numero)
}

for ( let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log("numero par: " + i)
    } else {
        console.log("numero impar" + i);
    }
}

function calculaCubo (a) {
    let resulta = a * a * a;
    return resulta;
}

let vava = 4;
teste = calculaCubo(vava);
console.log("Resultado da equação: " +  teste);


let peso = 76;
let altura = 1.85;

function calculaImc(a, b) {
    let resultado =  a/(b * b);
    return resultado;
}

let imc = calculaImc(peso, altura)
console.log("IMC ideal  é de: " + imc);

let nota = 75

if (nota < 70) {
    console.log("Nota D")
} else if (nota >= 90) {
    console.log ("Nota a")
} else if (nota >= 80) {
    console.log("Nota B")
} else if (nota >= 70) {
    console.log("Nota c")
}


let frase = "estou tentando aprender, progresso lento.";
let fraseUperCase = frase.toUpperCase()
let caractere = fraseUperCase.charAt(7);

console.log("caractere na posição 7: " + caractere);


let hora = 23;

if (hora >= 0 &&  hora < 6) {
    console.log("madrugada");
} else if (hora >=6 && hora < 12) {
    console.log("manhã");
} else if (hora >=12 && hora < 18) {
    console.log("tarde");
} else if (hora >=18 &&  hora< 24) {
    console.log("noite");
}


for (i = 1; i <= 30; i++) {
    if (i % 3 === 0 ) {
        console.log("multiplos de 3: " + i);
    } 
}

function contarValoresUnicos(lista) {
    let contador = {};

    for (let i = 0; i < lista.length; i++) {
        let elemento = lista[i];
        contador[elemento] = (contador[elemento] || 0) + 1;
    }

    let valoresUnicos = {};
    for (let chave in contador) {
        if (contador[chave] === 1) {
            valoresUnicos[chave] = contador[chave];
        }
    }

    return valoresUnicos;
}

let lista = [2, 3, 5, 3, 7, 9, 3];
let resultado = contarValoresUnicos(lista);
console.log(resultado);



function numeroPerfeito (entrada) {



    for (  ; resto >= 1; ) {
        if (resto % 2 === 1) {
            console.log(resto);
        } else {
            resto / 2;
            console.log(resto);
        }
    
    }
}
let entrada = 28;
numeroPerfeito (entrada);









function notaArray(entrada) {
    let soma = 0;

    for (let i = 0; i < entrada.length; i++) {
        soma += entrada[i];
    }
    
    let media = soma / entrada.length;

    if (media >= 8) {
        console.log("Sua média é A");
    } else if (media >= 5) {
        console.log("Sua média é B");
    } else if (media >= 3) {
        console.log("Sua média é C");
    } else {
        console.log("Sua média é D");
    }
}

let entrada = [7.5, 8.0, 6.5];
notaArray(entrada);










