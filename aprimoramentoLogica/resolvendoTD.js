//resolvendo o mesmo desafio de diversas maneiras diferente!!

//Encontrar o valor mínimo e máximo em um conjunto de dados de temperatura ao longo de uma semana.
//SORT()
function usandoSort (temperatura) {
    temperatura.sort((a, b) => a - b);
    console.log("temperatura mínima: " + temperatura[0]);
    console.log("temperatura máxima: " + temperatura[temperatura.length - 1]);
}

let temperatura = [22, 18, 35, 42, 10, 8, -1];
let naTela = usandoSort (temperatura);
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------
//LOOP FOR tradicional.
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
//---------------------------------------------------------------------------------------------------------------------------------------
//METODO FOR OF 
function usandoForOF (temperatura) {
    let tempMinima = temperatura[0]; // estar atento a sintaxe, como deve e declarar a variavel de maneira correta.
    let tempMaxima = temperatura[0]; //diferente do  loop for tradicional, aqui deve declarar um valor inicial de = "infinity" ou uma posição no array "temperatura[0]".

    for (let elemento of temperatura) {
        if ( elemento > tempMaxima) {
            tempMaxima = elemento;
        }  else if ( elemento < tempMinima) {
            tempMinima = elemento;
        }
    }
    return { maxima: tempMaxima, minima: tempMinima };
}

let temperatura = [22, 18, 35, 42, 10, 8, -1];
let maisModo = usandoForOF (temperatura);

console.log("temperatura máxima: " + maisModo.maxima);
console.log("temperatura mínima: " + maisModo.minima);
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Verificar se uma lista de compras contém um determinado item.
//usando o LOOP FOR TRADICIONAL

let item = "batata";
let listaMercado = ["arroz", "feijão", "carne", "mandioca", "salgados", "ovos", "batata"] // estar atento a ordem em q as variaveis são declaradas.
const mercado = compras(listaMercado); // ter certeza de qual "variavel" sera utilizada apenas na "function"

function compras (listaMercado) {

    for (let i = 0; i < listaMercado.length; i++) { 
        if(item === listaMercado[i]) {
            return true;
        }
    }
    return false; // colocar a "return false" fora da repetição, exlui lo do loop, colocar apenas dentro da "function"
}

if (mercado) {
    console.log("o carrinho já possui este item: " + item);
} else {
    console.log("necessario acrescentar este item no carrinho. " +item);
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
//usando o LOOP FOR OF
material = "cimento";

function carregamento (obraCivil) {

    for (let elemento of obraCivil) {
        if ( material === elemento) {
            return true;
        } 
    }
    return false;
}

let obraCivil = ["cimento",  "armação",  "mardeira",  "brita",  "terra", "bloco", "cal"];
const construcao = carregamento (obraCivil); 

if (construcao) {
    console.log(" A obra ja possui este material: " + material);
} else {
    console.log("necessário adicionar esse material a obra: " + material);
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let jogos = "spider-man";

function lojaDeJogos (lancamentos) {

    for (let game in lancamentos) {
        let queroJogar = lancamentos[game]; 
        if (jogos === queroJogar) {
            return  true;
        }
    }
    return  false;
}

let lancamentos = ["lol", "cod", "fifa23", "nba23", "ff23"];
const vitrini = lojaDeJogos (lancamentos);

if (vitrini) {
    console.log("ja tenho esse, mes q vem compro outro: " + jogos)
} else {
    console.log("esse eu consigo comprar: " + jogos)
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Contar quantas vezes um elemento específico aparece em uma lista.

let numLista = [2, 5, 4, 7, 3, 12, 21, 5, 3, 21, 9, 32];
let listaNova = [];

function contForOF(numLista) {
    let contagem = {};

    for (let algarismo of numLista) {
        if (contagem[algarismo]) {
            contagem[algarismo]++;
        } else {
            contagem[algarismo] = 1;
        }
    }

    for (let algarismo of Object.keys(contagem)) {
        if (contagem[algarismo] > 1) {
            listaNova.push(Number(algarismo));
        }
    }
}

contForOF(numLista);
console.log("Números repetidos: " + listaNova);

// necessário praticar mais, mt mais
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Calcular a média de idade de um grupo de pessoas.
//usando o LOOP TRADICIONAL
let idade = [10, 10, 10, 10, 10];

    function calIdade (idade) {
        let soma = 0;

        for (let i = 0; i < idade.length; i++) {
            soma += idade[i];
        }
        let media = soma / idade.length;
        return media; 
    }

let faixaEtaria = calIdade (idade);
console.log("media da daixa étaria este grupode: " + faixaEtaria);
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------
//USANDO O LOOP FOR OF
let idade = [10, 10, 10, 8, 10];

function idadeForOF(idade) {
    let soma = 0;

    for (anos of idade) {
        soma += anos; // alteração simples.
    }
    let media = soma / idade.length; // trecho em questão a ser substituido,  eu poderia substituir de q maneira??
    return media
}


let testando = idadeForOF(idade); 
console.log("media de idade: " + testando);
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Verificar se uma palavra fornecida pelo usuário é um palíndromo.
// usando o LOOP TRADICIONAL
let objeto = "alberto";

function words (objeto) {

    let resultado = objeto.length / 2;
    let metade = Math.floor(resultado); // importante criar variaveis algumas variaveis para o uso em uma function.

    for (let i = 0; i < metade; i++) {
        if (objeto[i] !== objeto[objeto.length - 1 - i]) { //boa expressão.
            return false; // estar atento ao uso da condição, posicionar o true e false da maneira adequada. 
        }
    }
    return true; //nem sempre o true vira primeiro.
}

let seiLa = words (objeto);

if (seiLa) {
    console.log("a palavra " + objeto +" é um políndromo: ");
} else {
    console.log("a palavra " + objeto + " não é um políndromo: ");
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------
//usando o LOOP FOR OF (neste tipo de problema, usar o loop tradicional é mais indicado, "for (let i = 0; i < metade; i++)" ,
//esse trecho n funciona de maneira adequda no "for of".

let palavras = "hannah";

function palaLoopOF(palavras){

    let calculo = palavras.length / 2;
    let metade = Math.floor(calculo);

    for(let letras of metade) {                                // o parametro n funciona de maneira adequada "for (let i = 0, i < metade; i++)"
        if (letras !== palavras[palavras.length - 1]) {
            return false;
        }
    }
    return true;
}

let outraFunção = palaLoopOF(palavras);
if (outraFunção){
    console.log("essa palavra " + palavras + " é um políndromo.")
} else {
    console.log("essa palavra " + palavras + " é um políndromo.")
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Verificar se um número fornecido pelo usuário é um número primo.
//usando o LOOP tradicional. 
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Calcular a soma de todos os elementos de uma lista de números.
//usando o LOOP tradicional

let lista = [1,2,3];

function somando(lista) {
    let soma = 0

    for (let i = 0; i < lista.length; i++) {
        soma += lista[i];
    }
    return soma;
}

let total = somando(lista);
console.log("Resulto da soma " + total);
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------

let lista = [ 1, 2, 3, 4]; 

function somaSoma(lista) {
    let soma = 0;
    
    for(num of lista) {
        soma+= num
    }
    return soma;
}

let maisMais = somaSoma(lista);

console.log("soma:" + maisMais);
//------------------------------------------------------------------------------------------------------------------------------------
//usando o LOOP FOR IN

let lista = [1, 2, 3, 4];

function contas(lista) {
    let soma = 0

    for ( let vava in lista) {
        let adicicao = lista[vava];
        soma += adicicao;
    }
    return soma;
}

let kiki = contas(lista);
console.log("soma; " + kiki);
//-------------------------------------------------------------------------------------------------------------------------------------------------------
//Encontrar o segundo maior elemento em uma lista de números.
//usando o sort()

let numeroos = [2, 4, 6, 8, 10, 11, 3, 1, 7, 5, 0];


function organiza(numeroos) {

numeroos.sort((a, b) => a - b);
console.log("lista em ordem: " + numeroos);
console.log("Primeiro maior valor da lista: " + numeroos[numeroos.length -1]);
console.log("segundo maior valor da lista: " + numeroos[numeroos.length - 2]);
console.log("terceiro maior valor da lista: " + numeroos[numeroos.length - 3]);
}

organiza(numeroos);
//---------------------------------------------------------------------------------------------------------------------------------------------------------
//usando LOOP FOR tradicional; boas interpretações parabens.
//minha lógica estava mt boa, quase acertei o exercício
let numeroos = [109, 110 , 108, 62, , -14, , -71, 74, 110, 24, 39,  , 1, 81, 57, 50];

function organizaLoopTra(numeroos) {

    let primeiro = 0;
    let segundo = Infinity;
    let terceiro = Infinity;

    for (let i = 0; i < numeroos.length; i++) {
        
        if (primeiro < numeroos[i]) {
            terceiro = segundo;
            segundo = primeiro;
            primeiro = numeroos[i];
        }  else if (terceiro < numeroos[i] && numeroos[i] < segundo ) {  //atentar se ao sinal "<" significa MENOR!! 
                terceiro = numeroos[i];                                  //um pequeno engano, me confundiu, tente ler o código com calma, isso ajuda mt.
        }   else if (segundo < numeroos[i] && numeroos[i] < primeiro) {
            segundo = numeroos[i];
        }
    }
    console.log("O numero com o mairo valor da lista: " + primeiro);
    console.log("O segundo com o maior valor da lista: " + segundo);
    console.log("O segundo com o maior valor da lista: " + terceiro);
} 

organizaLoopTra(numeroos);
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Contar quantas vezes um elemento específico aparece em uma lista.
//exemplo de output : O numero x apreceu y vezes.

        function contarElemento(x, y) { // n importa com a função é declarada, apenas deve se sertificar de q, quando a mesma for evocada, use os parametros adequados.
        let contador = 0;

        for (let i = 0; i < lista.length; i++) {
            if (x[i] === y) {
            contador++;
            }
        }

        return contador;
        }

        let lista = [2, 3, 5, 3, 7, 9, 3, 5];
        let elementoDesejado = 5;
        let resultado = contarElemento(lista, elementoDesejado);

        console.log(`O número ${elementoDesejado} apareceu ${resultado} vezes.`);
//-------------------------------------------------------------------------------------------------------------------
//exemplo de uso de "contador{}" 

    function contarElementos(lista) {
    let contador = {};

    for (let i = 0; i < lista.length; i++) {
        let elemento = lista[i];

        if (contador[elemento] === undefined) {
        contador[elemento] = 1;
        } else {
        contador[elemento]++;
        }
    }

    return contador;
    }

    let lista = [2, 3, 5, 3, 7, 9, 3];
    let resultado = contarElementos(lista);

    console.log(resultado);
//----------------------------------------------------------------
//Resolução similar, mas é necessario a repetição para memorizar.
/*Desafio 1: Contagem de caracteres
Escreva uma função chamada contarCaracteres que recebe uma string como parâmetro e retorna um objeto contendo a contagem de cada caractere presente na string.

Exemplo:
Entrada: "banana"
Saída: { 'b': 1, 'a': 3, 'n': 2 }*/

let aleatorio = "opala" ;

function contarCaractere (aleatorio) {
    contador = {};
    
    for ( let i = 0; i < aleatorio.length; i++) {
            let elemento = aleatorio[i];

            if ( contador[elemento] ) {
                contador[elemento]++;
            } else { 
                contador[elemento] = 1;
        }
    }
    console.log(aleatorio);
    return contador;
}

let final = contarCaractere (aleatorio);
console.log(final);

//-----------------------------------------------------------------------------------------------------------------------------------------------------
/*
Desafio 2: Contagem de palavras
Escreva uma função chamada contarPalavras que recebe uma string como parâmetro e retorna um objeto contendo a contagem de cada palavra presente na string.

Exemplo:
Entrada: "o rato roeu a roupa do rei de roma"
Saída: { 'o': 2, 'rato': 1, 'roeu': 1, 'a': 1, 'roupa': 1, 'do': 1, 'rei': 1, 'de': 1, 'roma': 1 }
resposta do chat.
*/
function contarPalavras(frase) {
    const palavras = frase.split(" "); // estar atento ao uso do recurso "split" = array.split ("") ou strig.split ("").
    let contador = {};

    for (let palavra of palavras) {
        if (contador[palavra]) {
            contador[palavra]++;
        } else {
            contador[palavra] = 1;
        }
    }

    return contador;
}

let frase = "o rato rato roeu a roupa do rei de roma";
let resultado = contarPalavras(frase);
console.log(resultado);
//-----------------------------------------------------------------------------------------
//exemplo de como usar o FOR IN apenas para exibição.

function imprimirFraseComPosicao(frase) {
    const palavras = frase.split(" ");

    for (let index in palavras) {                                          // index é =  a posição do elemento no array."palvra[index]" é o elemento do array. 
        console.log(`Posição: ${index}, Palavra: ${palavras[index]}`); // mesmo significado == console.log("Posição, " + index + "palavra " + palavras[index]); 
    }                                                                     
}      

let frase = "o rato roeu a roupa do rei de roma";
imprimirFraseComPosicao(frase);
//----------------------------------------------------------------------------------------------------------------------------------------------------------------
/*

Desafio 3: Contagem de elementos em listas
Escreva uma função chamada contarElementosLista que recebe uma lista de elementos como parâmetro e retorna um objeto contendo a contagem de cada elemento presente na lista.

Exemplo:
Entrada: [2, 3, 5, 3, 7, 9, 3]
Saída: { '2': 1, '3': 3, '5': 1, '7': 1, '9': 1 }

*/

let lista = [2, 2, 3, 5, 3, 7, 9, 3];

function contarElementosLista (lista) {
    let contador = {};

    for (let i = 0; i < lista.length; i++) {
        let elemento = lista[i];
        if (contador[elemento]) {
            contador[elemento]++; //estar atento a inclusão do iterado "[elemento]"
        } else {
            contador[elemento] = 1;  
        }
    }
    return contador 
}

let abc = contarElementosLista (lista);
console.log(abc);
//----------------------------------------------------------------------------------------------------------------------------------------------
/*
Desafio 4: Contagem de vogais e consoantes
Escreva uma função chamada contarVogaisConsoantes que recebe uma string como parâmetro e retorna um objeto contendo a contagem de vogais e consoantes presentes na string.

Exemplo:
Entrada: "banana"
Saída: { 'vogais': 3, 'consoantes': 3 }
tentativa de resolução, errada.
*/

let palavra = "SouthKorea"

function contarVogaisConsoantes (palavra) {
    let vogal = {};
    let consoantes = {};

    for (let i = 0; i < palavra.length; i++) {
        let letras = palavra[i]
        if (vogal[letras] === "a" || "e" || "i" || "o" || "u") {
            vogal[letras] = 1; 
        } else if (vogal[letras] = 1) {
            vogal[letras]++;
        } else if (consoantes[letras] !== "a" || "e"|| "i" || "o" || "u") {
            consoantes[letras] = 1
        } else if (consoantes[letras] = 1) {
            consoantes[letras]++
        }
    }
    console.log("Quantidade de vogais: " + vogal + "Quantidade de consoantes: " + consoantes);
}

let cba = contarVogaisConsoantes ( palavra);
console.log(cba);
//----------------------------------------------------------------------------------------------------------------------
/*
Desafio 4: Contagem de vogais e consoantes
Escreva uma função chamada contarVogaisConsoantes que recebe uma string como parâmetro e retorna um objeto contendo a contagem de vogais e consoantes presentes na string.

Exemplo:
Entrada: "banana"
Saída: { 'vogais': 3, 'consoantes': 3 }
*/

let frase = "mais um dia vamo q vamos.";

function contarVogaisConsoantes(frase) {
    let vogal = {};
    let consoantes = {};
    const palavra = frase  

    for (let i = 0; i < palavra.length; i++) {
        let letra = palavra[i].toLowerCase(); // Convertendo para minúsculo para comparar corretamente
        if ("aeiou".includes(letra)) { // esse grupo de vogais "aeiou", pode ser utilizado desta maneira
            if (vogal[letra]) {
                vogal[letra]++;
            } else {
                vogal[letra] = 1;
            }
        } else {
            if (consoantes[letra]) {
                consoantes[letra]++;
            } else {
                consoantes[letra] = 1;
            }
        }
    }

    console.log(frase);
    console.log("Quantidade de vogais: ", vogal);
    console.log("Quantidade de consoantes: ", consoantes);
}

contarVogaisConsoantes(frase);
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
Desafio 5: Contagem de valores únicos em listas
Escreva uma função chamada contarValoresUnicos que recebe uma lista de elementos como parâmetro e retorna um objeto contendo a contagem de valores únicos presentes na lista.

Exemplo:
Entrada: [2, 3, 5, 3, 7, 9, 3]
Saída: { '2': 1, '5': 1, '7': 1, '9': 1 }
tentativa e falha, 
*/
let alma = [2, 3, 5, 3, 7, 9, 3];
let unica = [];
function contarValoresUnicos (alma) {

    let contador = {};

    for (let i = 0; i < alma.length; i++) {
        let elemento = alma[i];
        if (!unica.includes(elemento)) {
            unica.push(elemento);
            contador[elemento] = 1;
        } 
    }
    return contador
}

let chamaFun = contarValoresUnicos (alma);
console.log(chamaFun);

//resposta do chat. resposta referênte ao ultimo código corrigida, de qualquer maneira n era essa a lógica a ser seguida.

let alma = [2, 3, 5, 3, 7, 9, 3];
let unica = [];

function contarValoresUnicos(alma) {
    let contador = {};

    for (let i = 0; i < alma.length; i++) {
        let elemento = alma[i];
        if (!unica.includes(elemento)) {
            unica.push(elemento);
        }
        contador[elemento] = (contador[elemento] || 0) + 1;
    }
    return contador;
}

let chamaFun = contarValoresUnicos(alma);
console.log(chamaFun);
console.log("Valores únicos: " + unica);

//resposta correta do chat.
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
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
/*Desafio 7: Contagem de Pares e Ímpares
Escreva uma função chamada contarParesImpares que recebe uma lista de números como parâmetro e retorna um objeto contendo a contagem de números pares e ímpares presentes na lista.
Exemplo:
Entrada: [2, 3, 5, 6, 8, 9, 10]
Saída: { 'pares': 4, 'ímpares': 3 }*/

function contarParesImpares (lista) {
    let pares = {};
    let impares = {};

    for (let i = 0; i < lista.length; i++) {
        let elemento = lista[i];
        if (elemento % 2 === 1) {      // tinha escrito "elemento % 3 === 0", expressão errada para checar se um numero é impar, essa é a certa, (elemento % 2 === 1);
            if (impares[elemento]) {
            impares[elemento]++;
        } else {
            impares[elemento] = 1;
        }
        } else {
            if (pares[elemento]) {
            pares[elemento]++;
            } else { 
                pares[elemento] = 1;
            }
        }
    }

    return {impar: impares, par: pares};     //    return {maxima: temMaxima, minima: tempMinima};  
}

let lista = [2, 3, 5, 6, 8, 9, 10];
let contagem = contarParesImpares (lista);
console.log("Contagem dos números ímpares: ", contagem.impar); //concatenar desta maneira 
console.log("Contagem dos números pares: ", contagem.par); // N DESTA ""console.log("Contagem dos números ímpares: "+ contagem.impar); ""
//console.log("contagem dos numero impares: " + contagem.impar + " e pares: " + contagem.par); essa concatenção n funciona da maneira adequada 
/* maneira adequada 
console.log("Contagem dos numeros impares: " + JSON.stringify(contagem.impar));
console.log("Contagem dos numeros pares: " + JSON.stringify(contagem.par));
*/
//-----------------------------------------------------------------------------------------------------------------------
/*
Desafio 6: Frequência de Palavras
Escreva uma função chamada frequenciaPalavras que recebe uma string como parâmetro e retorna um objeto contendo a frequência de cada palavra presente na string (quantas vezes cada palavra aparece).

Exemplo:
Entrada: "o rato roeu a roupa do rei de roma rato rato"
Saída: { 'o': 1, 'rato': 3, 'roeu': 1, 'a': 1, 'roupa': 1, 'do': 1, 'rei': 1, 'de': 1, 'roma': 1 }
repetindo exercício, trabalhando melhor.
*/

let frase = "santos santos sempre santos, dentro ou fora do alçapão";

function contandorPalvras (frase) {
    let oracao = frase.split(" ");
    let contador = {};

    for (let i = 0; i < oracao.length; i++ ) {
        let elemento = oracao[i];  
        if (contador[elemento]) {
            contador[elemento]++;
        } else {
            contador[elemento] = 1;
        }
    }

    return contador 
}

let olaFuncao = contandorPalvras (frase);

console.log(olaFuncao);

//--------------------------------------------------------------------------------------------------------------------------------------
/*
Desafio 8: Frequência de Caracteres
Escreva uma função chamada frequenciaCaracteres que recebe uma string como parâmetro e retorna um objeto contendo a frequência de cada caractere presente na string (quantas vezes cada caractere aparece).

Exemplo:
Entrada: "banana"
Saída: { 'b': 1, 'a': 3, 'n': 2 }
*/

let sobremesa = "cocada";

function contaLetras (sobremesa) {
    contador = {};

    for (elemento of sobremesa) {
        if (contador[elemento]) {
            contador[elemento]++;
        } else {
            contador[elemento] = 1;
        }
    }

    return contador 
}

let novaFunction = contaLetras(sobremesa);
console.log(novaFunction);

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
Desafio 9: Contagem de Elementos Únicos em Matriz
Escreva uma função chamada contarElementosUnicosMatriz que recebe uma matriz de números como parâmetro e retorna um objeto contendo a contagem de elementos únicos presentes na matriz.

Exemplo:
Entrada: [[2, 3, 5], [3, 7, 9], [3, 5, 9], ]
Saída: { '2': 1, '3': 3, '5': 2, '7': 1, '9': 2 };
concluido com 100% de exito, otima logica de analisar a ideia de percorrer matriz,  "entrada[elemento[compente[i]]]".
*/

let Entrada = [[2, 3, 5], [3, 7, 9], [3, 5, 9], [7, 2, 6]];

function contarElementosUnicosMatriz (Entrada) {
    let contador = {};

    for (elemento of Entrada) {
        for (componentes of elemento) {
            if ( contador[componentes]) {
                contador[componentes]++;
            } else {
                contador[componentes] = 1;
            }
        }
    }

    return contador

}

let maisUmaFunction = contarElementosUnicosMatriz (Entrada);
console.log(maisUmaFunction);
//---------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
Desafio 10: Contagem de Dígitos
Escreva uma função chamada contarDigitos que recebe um número inteiro como parâmetro e retorna um objeto contendo a contagem de cada dígito presente no número.

Exemplo:
Entrada: 123355
Saída: { '1': 1, '2': 1, '3': 2, '5': 2 }
*/
function checkNumero (numeroGrande) {
let contador = {};

for (elemento of numeroGrande) {
    if (contador[elemento]) {
        contador[elemento]++;
    } else {
        contador[elemento] = 1;
    }
}

return contador
}
// para iterar com o "contador = {}", é necessario declarar a varia neste caso "numeroGrande" como uma string "123355" ou array "[1, 2, 3, 3, 5, 5]";
let numeroGrande = [1, 2, 3, 3, 5, 5]; 
let chamaNumero = checkNumero (numeroGrande);

console.log(chamaNumero);
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
Desafio 11: Frequência de Números Primos
Escreva uma função chamada frequenciaNumerosPrimos que recebe uma lista de números como parâmetro e retorna um objeto contendo
a frequência de números primos presentes na lista.

por enquento n estou conseguindo enxergar com clareza as codições de numeros primos.

Exemplo:
Entrada: [2, 3, 4, 5, 6, 7, 8, 9, 10]
Saída: { '2': 1, '3': 1, '5': 1, '7': 1 }
*/

function frequenciaDeNumeros (lista) {
    let contador = {};

    for( elemento of lista) {
        if (elemento )
    }

}
//------------------------------------------------------------------------------------------------------------------------------------------------------------
/*Desafio 14: Contagem de Vogais em Palavras
Escreva uma função chamada contarVogaisPalavras que recebe uma string como parâmetro e retorna um objeto contendo a contagem de vogais presentes em cada palavra da string.

Exemplo:
Entrada: "o rato roeu a roupa do rei de roma"
Saída: { 'rato': 2, 'roeu': 3, 'a': 2, 'roupa': 3, 'do': 1, 'rei': 1, 'de': 1, 'roma': 2 }*/


function contadorVogaisPalavras (entrada) {
    let contador = {}; //ATENTAR SE A SINTAXE 
//n foi concluido devido ao erro de "contadodr" quando o correto seria "contador" atenção na escrita.
    for (let i = 0; i < entrada.length; i++) {
        let elemento = entrada[i];
        if ("aeiou".includes(elemento)) {  // estar atento ao utilizar o elemento quando o mesmo for declarado!!.
            if(contador[elemento]){
                contador[elemento]++;
            } else {
                contador[elemento] = 1;
            }
        }
    }

return contador;
}

let entrada = "o rato roeu a roupa do rei de roma"; 
let resultado = contadorVogaisPalavras (entrada);
console.log(entrada);
console.log(resultado);
//--------------------------------------------------------------------------------------------------------------------------------------
/*Desafio 15: Contagem de Dígitos Únicos em Lista
Escreva uma função chamada contarDigitosUnicosLista que recebe uma lista de números como parâmetro
e retorna um objeto contendo a contagem de dígitos únicos presentes nos números da lista.

Exemplo:
Entrada: [123, 355, 789, 22]
Saída: { '1': 1, '2': 1, '3': 1, '5': 1, '7': 1, '8': 1, '9': 1 }
*/

function contarDigitos (entrada) {
    let contador = {};

    for (elemento of entrada) {
        for (componentes of elemento) {
        if (contador[componentes]) {
            contador[componentes]++;
        } else {
            contador[componentes] = 1;
        }
    }
}

    return contador;
}


let entrada = [[123, 355, 789, 22, 22], [12, 34, 55, 66, 78], [87, 90, 8, 43, 32]]
let maisUma = contarDigitos (entrada);
console.log(maisUma);
//-----------------------------------------------------------------------------------------------------------------------------
//respsota do chat.
function contarDigitosUnicosLista(lista) {
    let contador = {};

    for (let numero of lista) {
    let digitos = numero.toString().split(''); //NOVOS COMANDOS, "toString" e "Set" == neste trecho numero.
//tostring().split(" ")== ocorreu a conversão do array para string "toString" e separado "split" 
//para q seja tratado como uma string de numeros de um unico digito.
    let digitosUnicos = new Set(digitos); // "Set(digitos)" esta ocorrendo a criação de um novo objeto, 
//neste caso o array ja existia e foi associado a ele o objeto "Set"
    for (let digito of digitosUnicos) {
        if (contador[digito]) {
        contador[digito]++;
        } else {
        contador[digito] = 1;
        }
    }
    }

    return contador;
}

let lista = [123, 355, 789, 22];
let resultado = contarDigitosUnicosLista(lista);
console.log(resultado); // Saída: { '1': 1, '2': 1, '3': 1, '5': 1, '7': 1, '8': 1, '9': 1 }
//----------------------------------------------------------------------------------------------------------------------------------------------
function contagem (entrada) {
    let contador = {};

    for (let algarismo of entrada) {
    let alga = algarismo.toString().split(''); // para q cada numero seja considerado um array, o "espaço" n pode ser utlizado,
//  caso seja o código ira esperar q apareça um "espaço" na entrada em questão;
let unicos = new Set(alga);
    for (let alvo of unicos) {
        if (contador[alvo]) {
            contador[alvo]++;
        } else { 
            contador[alvo] = 1;
        }
    }
    }

    return contador;
}

let entrada = [123, 355, 789, 22];
let chama = contagem (entrada);
console.log(chama);
//-------------------------------------------------------------------------------------------------------------------
/*
Desafio 13: Frequência de Números Únicos em Matriz
Escreva uma função chamada frequenciaNumerosUnicosMatriz que recebe uma matriz de números como parâmetro e retorna um objeto contendo a frequência de números únicos presentes na matriz.

Exemplo:
Entrada: [[2, 3, 5], [3, 7, 9], [3, 5, 9]]
Saída: { '2': 1, '7': 1 };
*/

function unicosMatrix (entrada) {
    let contador = {};

    for (elemento of entrada) {
        for (componentes of elemento) {
            contador[componentes] = (contador[componentes] || 0) + 1; //(contador[componentes] || 0): Aqui, usamos o operador lógico OR ||. 
        }//Se contador[componentes] for um valor truthy (ou seja, diferente de zero, vazio, null, false, undefined, etc.), o valor será usado.  
    }//Caso contrário, o valor 0 será utilizado. 

    /*MANEIRA Q ESTOU ACOSTUMADO A REALIZAR. | (PRIMEIRA DIFICULDADE DO DESADIO usar o código a cima "contador[componentes] = (contador[componentes] || 0) + 1;")
        for (elemento of entrada) {          | // este for representa o mesmo q for q esta sendo utlizado,
        for (componentes of elemento) {      | // a unica diferença é a maneira de ser escrita
            if (contador[componentes]) {     | // o primeiro previne q o resultado q ser memorizado no "contador = {}"
                contador[componentes]++;     | // seja = undefined
            } else {                         |
                contador[componentes] = 1;   |
            }
        }
    }
    */

    let valoresUnicos = {}; //fazer com q o segundo contador percorra o primiero, procurando os valores únicos, estar atento a isso, da mesma maneira q se usa contador,
    for (let chave in contador) { // estar atento ao uso do "FOR IN", este foi usado para verificar a quantidade de vezes q um valor foi  armazenado no primiero contador 
        if ( contador[chave] === 1) {// se  a quantidade de vezes for igual a 1, então inclua no segundo contador "valoresUnicos"
            valoresUnicos[chave] = contador[chave];
        }
    }

    return valoresUnicos;
}

let entrada = [[2, 3, 5], [3, 7, 9], [3, 5, 9], [7, 4, 8]];
let chamando = unicosMatrix (entrada);
console.log(chamando);
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
Desafio 12: Contagem de Caracteres Especiais
Escreva uma função chamada contarCaracteresEspeciais que recebe uma string como parâmetro e retorna um objeto contendo a contagem de caracteres especiais presentes na string. Caracteres especiais são aqueles que não são letras (maiúsculas e minúsculas) nem números.

Exemplo:
Entrada: "Hello, World!"
Saída: { ',': 1, '!': 1 }*/

function contaPontuacao (escrita) {
    let contador = {};


    for (sinais of escrita) {
        if (!/[a-zA-Z0-9]/.test(sinais)) {  //expressão alfanuméricos, seguida da função "test" , q ira testar as expressaão regular do if no objeto "sinais".
            if (contador[sinais]) {
                contador[sinais]++;
            } else {
                contador[sinais] = 1;
            }
        }
    }

    return contador;
}

let escrita = "tenho de usar alguns.. pontos, n sei bem quais pontos devo usar. Eu realmente to mandando bem??"
let taAqui = contaPontuacao (escrita);
console.log(taAqui);


//-----------------------------------------------------------------------------------------------------------------------
function contarCaracteresEspeciais(escrita) {
    let contador = {};

    for (let caractere of escrita) {
        // Verifica se o caractere não é uma letra (maiúscula ou minúscula) e nem um número e testar na variavel em questão "!/[a-zA-Z0-9]/.test(caractere)".
        if (!/[a-zA-Z0-9]/.test(caractere)) {
            if (contador[caractere]) {
                contador[caractere]++;
            } else {
                contador[caractere] = 1;
            }
        }
    }

    return contador;
}

let escrita = "tenho de usar alguns pontos, n sei bem quais pontos devo usar. Eu realmente to mandando bem??";
let resultado = contarCaracteresEspeciais(escrita);
console.log(resultado);

//--------------------------------------------------------------------------------------------------------------------------------------------------
//METODO WHILE;
let contador = 1;

while (contador <= 10) {
    console.log("Contador: " + contador);
    contador++;
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------
/*
Desafio 1: Soma dos dígitos
Escreva uma função chamada somaDigitos que recebe um número inteiro como parâmetro e retorna a soma de seus dígitos.

Exemplo:
Entrada: 123
Saída: 6 (1 + 2 + 3)*/



let entrada = 5;

while (entrada >= 0) { // estar atento lófica, "<=, >=", se a entrada for menor q o numero final do loop, leva o <=, se for maior leva >=.
    console.log("O x da questão: " + entrada);
    entrada--;
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------
//teste while e if


function repetiçãoTeste (entrada) {
let par = [];
let impar = [];

    while (entrada <= 10) {
        if (entrada % 2 === 1) {
            impar.push(entrada);
        } else {
            par.push(entrada);
        }
        entrada++;
    }

    return { impar, par }; // tentar lembrar dessa sintaxe!!
}

let entrada = 1;
let chamaTeste = repetiçãoTeste(entrada);
console.log('Numeros impares: ', chamaTeste.impar); // tentar lembrar dessa sintaxe! "+ = ," === nesse caso esses sinais são iguais, tentar sempre usar a ",".
console.log('Numeros pares: ' , chamaTeste.par ); // lembra de como chamar o resultado espécifico do "return" presente na função, "chamaTeste.par".


//---------------------------------------------------------------

function repetiçãoTeste (começo, fim) {
    for (let i = começo; i <= fim; i++) {
        if (i % 2 == 1) {
            console.log('este número é impar: ' + i);
        } else {
            console.log('este número é par: ' + i);
        }
    }
}

let começo = 1;
let fim = 13;
repetiçãoTeste(começo, fim);


//------------------------------------------------------------------------
/*
Desafio 4: Fatorial
Escreva uma função chamada fatorial que recebe um número inteiro como parâmetro e retorna o fatorial desse número.

Exemplo:
Entrada: 5
Saída: 120 (pois o fatorial de 5 é 5 x 4 x 3 x 2 x 1 = 120)
*/
let entrada = 5;
let resultado = 0;

    while (entrada >= 0) {
        resultado = entrada * (entrada -1)
        console.log( resultado);
        entrada--;
        
    }

//------------------------------------------------------------------

function fotor (entra) {
    let resultado = 1;// estar a atendo a um número q n altera a equação, mas afaça com q a primeira opeção inicie e a mesma variavel armazene a mesma;

    for (let i = 1; i <= entra; i++) {
        resultado *= i; // a ordem dos fatores n alteram o resultado, fazer com q o i === 1 para começar a fatoração e estipular o final no numero de entrada é perfeito
     //   console.log(resultado);
    }

    return resultado
}

let entra = 5;
let soTeste = fotor (entra);
console.log('fatorial de numero 5: ', soTeste );
//----------------------------------------------------------------------------------------------------------------------------------------------------
/*
Desafio 3: Soma de números pares
Escreva uma função chamada somaNumerosPares que recebe um número inteiro como parâmetro e retorna a soma de todos os números pares de 1 até esse número (inclusive).

Exemplo:
Entrada: 6
Saída: 12 (pois a soma dos números pares de 1 a 6 é 2 + 4 + 6 = 12)
*/

function somaPar (a) {

    let soma = 0;

    for (let i = 1; i <= a; i++) {
        if (i % 2 == 0) {
            soma += i;
            console.log(soma);
        }
    }
}

let entrada = 6;
somaPar (entrada)
//----------------------------------------------------------------------------------------------------------------------------------------------------
/*
Desafio 2: Verificar número perfeito
Escreva uma função chamada numeroPerfeito que recebe um número inteiro como parâmetro e verifica se ele é um número perfeito.
Um número perfeito é aquele que é igual à soma de seus divisores, excluindo ele mesmo.

Exemplo:
Entrada: 28
Saída: true (28 é igual a 1 + 2 + 4 + 7 + 14);
n sabia com funcionava a ideia do numero perfeito, minha lógica n foi muito boa.
*/


function numeroPerfeito (entrada) {
    let resto = entrada / 2;
    let sobra = resto;

    entrada / 2;
    while (entrada >= 2) {
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

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
//resposta do chat, eu estava bem longe...
function numeroPerfeito(numero) {
    let somaDivisores = 0;
    let divisores = [];

    for (let i = 1; i <= numero / 2; i++) {
        if (numero % i === 0) {
            somaDivisores += i;
            divisores.push(i);
        }
    }

    if (somaDivisores === numero) {
        return `${numero} = ${divisores.join(' + ')}`;
    } else {
        return `${numero} não é um número perfeito.`;
    }
}

let numero = 28;
let resultado = numeroPerfeito(numero);
console.log(resultado);
//-----------------------------------------------------------------------
//um teste: 

function randon (entrada) {
    let armazem =[];

    for (let i = 1; i <= entrada; i++) {
        if (entrada % i == 0) {
            armazem.push(i);
        } 
    }

    return armazem;
}

let entrada = 50;
let hadouKen = randon (entrada);
console.log(hadouKen);
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
array = [1, 2, 3]
somar elementos
saida= [1, ,2 ,3] = 6
*/

let entrada = [1, 2, 3];

function somaArray (entrada) {
    let soma = 0;

    for (elemento of entrada) {
        soma += elemento;
    }

    return soma;
}

let chamaEla = somaArray (entrada);
console.log(' o resultado das somas do array: '+ JSON.stringify(entrada) + ' =', chamaEla);
//-------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
Desafio 7: Jogo de Adivinhação
Crie um jogo de adivinhação em que o computador escolhe um número aleatório entre 1 e 100, e o jogador tem que adivinhar qual é esse número.
A cada tentativa, o computador deve dizer se o número correto é maior ou menor do que o número que o jogador tentou.
*/


function joguinho (x) {
    let min = 1;
    let max = 100;
    let maquinaN =  numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

    if (x === maquinaN) {
        console.log('acertou mizeravi!')
    } else if (x < maquinaN) {
        console.log('o numero citado: ' + x + ', esta a baixo do escolhido.');
        console.log(maquinaN);
    } else { 
        console.log('o numero citado: ' + x + ', esta a cima do escolhido.');
        console.log(maquinaN);
    }

}

let x = 79;
joguinho (x);


/*
let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min; // Intervalo fechado
// ou
let numeroAleatorio = Math.ceil(Math.random() * (max - min)) + min; // Intervalo semi-aberto

let numeroAleatorio = min + Math.floor(Math.random() * (max - min + 1)); // Intervalo fechado
// ou

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let numeroAleatorio = gerarNumeroAleatorio(1, 100);
*/
    //----------------------------------------------------------------------------------------------------------------

const randomNumber = Math.floor(Math.random() * 100) + 1;
let guessedNumber = 8
while (guessedNumber !== randomNumber) {

    if (guessedNumber < randomNumber) {
        console.log("Tente um número maior!");
    } else if (guessedNumber > randomNumber) {
        console.log("Tente um número menor!");
    } else {
        console.log("Parabéns! Você acertou o número.");
    }
    break;
}
console.log(randomNumber);
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
//fazer o numero ser dividido por dois e o resultado continuar sendo dividido.


function divideNumero(entrada) {
    let resto = entrada; // Inicializa o resto com o valor de entrada

    do {
        resto = resto / 2; // Divide o resto por 2
        console.log(resto); // Exibe o resultado da divisão
    } while (resto !== 0 && resto !== 1); // Repete enquanto o resto for diferente de 0 e diferente de 1
}

let entrada = 12;
divideNumero(entrada);
//----------------------------------------------------------------------------------------------------------------
// quantas vezes um numero aparece no array.


function contando (entrada) {
    let contador = {};
    let novinho = [];

    for (elemento of entrada) {
        if (contador[elemento]) {
            contador[elemento]++;
        } else {
            contador[elemento] = 1;
        }
    }
    for (componentes in contador) {
        if (contador[componentes] == 1 ) {
            novinho.push(Number(componentes));
        }
    }

return {contador, novinho};
}

let entrada = [2, 3, 6, 2, 4, 4, 1, 0, 0];
let oie = contando (entrada);
console.log(oie);
//-----------------------------------------------------------------------------------------------------------------------------------------------------
/*
Desafio 4: Média de Notas
Escreva uma função que calcula a média das notas de um estudante e retorna seu conceito de acordo com a escala.

Exemplo:
Entrada: [7.5, 8.0, 6.5]
Saída: "B"
*/

function notaArray (entrada) {
    let soma = 0;

    for (let i = 0; i < entrada.length; i++) {
        soma+= entrada[i];
    }

    let media = soma / entrada.length; 

    if (media >= 8) {
        console.log("sua média é A")
    } else if ( media >= 5) {
        console.log("sua média é B")
    } else if (media >= 3) {
        console.log("sua média é C")
    } else {
        console.log("Sua média é D")
    }
}

let entrada = [7.5, 8.0, 6.5];
notaArray (entrada);
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*Desafio 5: Verificar Anagramas
Escreva uma função que verifica se duas palavras são anagramas, ou seja, se elas possuem as mesmas letras em ordens diferentes.

Exemplo:
Entrada: "listen", "silent"
Saída: true
*/

function checkAnagrama (palabras) {
    
}
























/*

Desafio 3: Inversão de número
Escreva uma função chamada inverterNumero que recebe um número inteiro como parâmetro e retorna o número invertido. Por exemplo, o número 123 invertido é 321.

Exemplo:
Entrada: 123
Saída: 321

Desafio 4: Verificar número primo
Escreva uma função chamada numeroPrimo que recebe um número inteiro como parâmetro e verifica se ele é um número primo. Um número primo é aquele que é divisível apenas por 1 e por ele mesmo.

Exemplo:
Entrada: 17
Saída: true (17 é primo)

Desafio 5: Contagem regressiva
Escreva uma função chamada contagemRegressiva que recebe um número inteiro como parâmetro e imprime uma contagem regressiva a partir desse número até zero.

Exemplo:
Entrada: 5
Saída:
5
4
3
2
1
0

Desafio 6: Sequência de Fibonacci
Escreva uma função chamada fibonacci que recebe um número inteiro como parâmetro e retorna uma lista contendo os n primeiros termos da sequência de Fibonacci.

Exemplo:
Entrada: 7
Saída: [0, 1, 1, 2, 3, 5, 8]



Esses desafios devem ser um bom ponto de partida para praticar o uso do laço while. Boa diversão!
*/





















