// // ------------------------------------------------- MENU ------------------------------------------------------------
// // Função acender a luz
// function toggleLight() {
    //     let light = document.getElementById("light");    
    //     let lightArea = document.getElementById("light-areaid");
    //     let audio = document.getElementById("audio");
    //     let btn = document.querySelector("body");
    
    //     light.classList.toggle("on");
    //     lightArea.classList.toggle("on");
    //     light.classList.toggle("faillingLight");
    //     lightArea.classList.toggle("faillingLight");
    //     btn.classList.toggle("on");
    //     audio.play();
    //  }
// ------------------------------------------------- AULA 1 ------------------------------------------------------------    
// // Iniciar o contador em 1
// var contador = 1;
// // Variável para armazenar o ID do intervalo
// var intervalId;
    
// // Ao carregar a página inicializa as seguintes funções
// window.onload = function() {
//     gerarDados();
// };
// // ----------------------- PRIMEIRA ATIVIDADE  -----------------------
// // Função para verificar o value do input bebida e tomar decisões
// function verificar() {
//     let escolhaInput = document.getElementById("input-escolha");
//     let escResultado = document.getElementById("esc-resultado");
//     let texto = escolhaInput.value

//     switch(texto) {
//         case "Refrigerante":
//             escolhaInput.style.backgroundColor = "green";
//             escResultado.value = "É pra já!!!";
//             console.log(texto);
            
//             let gifRefrigerante = document.getElementById("gif-refrigerante");
//             gifRefrigerante.style.display = "block";

//             setTimeout(function() {
//                 gifRefrigerante.style.display = "none";
//                 escolhaInput.value = "";
//                 escResultado.value = "";
//                 escolhaInput.style.backgroundColor = "#f7e4bb";
//             }, 3000);
//         break;

//         case "Suco":
//             escolhaInput.style.backgroundColor = "green";
//             escResultado.value = "É pra já!!!";
//             console.log(texto);

//             let gifSuco = document.getElementById("gif-suco");
//             gifSuco.style.display = "block";

//             setTimeout(function() {
//                 gifSuco.style.display = "none";
//                 escolhaInput.value = "";
//                 escResultado.value = "";
//                 escolhaInput.style.backgroundColor = "#f7e4bb";
//             }, 3000);
//         break;

//         case "Sorvete":
//             escolhaInput.style.backgroundColor = "green";
//             escResultado.value = "É pra já!!!";
//             console.log(texto);

//             let gifSorvete = document.getElementById("gif-sorvete");
//             gifSorvete.style.display = "block";

//             setTimeout(function() {
//                 gifSorvete.style.display = "none";
//                 escolhaInput.value = "";
//                 escResultado.value = "";
//                 escolhaInput.style.backgroundColor = "#f7e4bb";
//             }, 3000);
//         break;
//         default:
//             escolhaInput.style.backgroundColor = "red";
//             escResultado.value = "Não temos :[";
//     }
// }

// //  ----------------------- SEGUNDA ATIVIDADE  -----------------------
// // Função para subtrair os números e exibir o resultado
// function subtrair() {
//     // Obtém os valores dos números digitados
//     let numero1 = document.getElementById("numero1").value;
//     let numero2 = document.getElementById("numero2").value;
//     let input = document.getElementById("resultado");
//     // Realiza a subtração e exibe o resultado
//     let resultado = numero1 - numero2;
//     input.style.backgroundColor = "green";
//     input.value = resultado;
//     console.log(numero1 + " - " + numero2 + " = " + resultado + ".");
// }

// //  ----------------------- TERCEIRA ATIVIDADE  -----------------------
// // Função para dividir os números e exibir o resultado
// function dividir() {
//     // Obtém os valores dos números digitados
//     let inputResultado = document.getElementById("div-resultado");
//     let numero1 = document.getElementById("div-numero1").value;
//     let numero2 = document.getElementById("div-numero2").value;

//         // Verifica se o segundo número não é zero
//     if (numero2 == 0) {
//         inputResultado.value = 0;
//         inputResultado.style.backgroundColor = "red";
//         console.log("Você não pode dividir por 0.");
//         alert("Você não pode dividir por 0.");
//     } else {
//         let resultado = numero1 / numero2;
//         inputResultado.style.backgroundColor = "green";
//         inputResultado.value = resultado;      
//         console.log(numero1 + " / " + numero2 + " = " + resultado + ".");
//     }
// }

// //  ----------------------- QUARTA ATIVIDADE  -----------------------
// // Função para iniciar a contagem
// function contar() {
//     console.log("Iniciando a contagem!");
//     if (intervalId) {
//         clearInterval(intervalId); // Parar o intervalo anterior, se existir
//     }
//     contador = 1;
//     document.getElementById("input-contador").value = contador;
//     // Atualizar a contagem a cada segundo (1000 ms)
//     intervalId = setInterval(atualizarContagem, 10);
// }
// // Função para atualizar a contagem
// function atualizarContagem() {
//     // Se contador for menor ou igual a 1000
//     if (contador <= 1000) {
//         console.log(contador);
//         // Atualizar o valor do campo de entrada de texto
//         document.getElementById("input-contador").value = contador; 
//         // Incrementar o contador
//         contador++;

//     } else {
//         // Parar o intervalo quando a contagem atingir 1000
//         clearInterval(intervalId); 
//     }
// }

// //  ----------------------- QUINTA ATIVIDADE  -----------------------
// // Função para declarar informações de um objeto e imprimi-las.
// function gerarDados() {
//     console.log("Gerando dados...." + "\nRua:");
//     var objetoPessoa = {
//         rua: "Rua dos Pinheiros",
//         numero: "123",
//         bairro: "Centro",
//         cidade: "Joinville"
//     };

//     document.getElementById("input-rua").value = objetoPessoa.rua;
//     document.getElementById("input-numero").value = objetoPessoa.numero;
//     document.getElementById("input-bairro").value = objetoPessoa.bairro;
//     document.getElementById("input-cidade").value = objetoPessoa.cidade;
// }

// //  ----------------------- SEXTA ATIVIDADE  -----------------------
// // Função para criar uma const String
// function criarConst() {
//     const bemVindo = "Bem vindo!";
//     console.log(bemVindo);
//     alert(bemVindo);
// }

// //  ----------------------- SÉTIMA ATIVIDADE  -----------------------
// // Função para comparar notas
// function compararNotas() {
//     let inputNotas = document.getElementById("input-notas");
//     let notasResultado = document.getElementById("notas-resultado");
//     let nota = inputNotas.value;


//     if (nota >= 7) {
//         notasResultado.style.backgroundColor = "green";
//         notasResultado.value = "Aprovado! 👏";
//     } else if ((nota < 7) && (nota >= 5)) {
//         notasResultado.style.backgroundColor = "yellow";
//         notasResultado.value = "Recuperação! 😕";
//     } else {
//         notasResultado.style.backgroundColor = "red";
//         notasResultado.value = "Reprovado! 👎"
//     }

//     setTimeout( function() {
//         inputNotas.value = "";
//         notasResultado.value = "";
//         notasResultado.style.backgroundColor = "#f7e4bb";
//     }, 2000);
// }

// ------------------------------------------------- AULA 2 ------------------------------------------------------------
// ------------------------------------------------- Exercicio 1 -------------------------------------------------------
// Função para gerar números aleatórios
function gerarNumeros() {
    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    inputMostrar = document.getElementById("mostrar1");
    inputResu = document.getElementById("resu1");
    let texto = "";
    let array = [];

    for (let i = 0 ; i < 10 ; i++){
        array.push(getRandom(0,100));
        texto += array[i] + " ";
    }
    array.sort(function(a, b){return a - b});
    inputMostrar.value = texto;
    inputResu.value = array[array.length -1];
    console.log("Valores:"+inputMostrar);
    console.log("Maior valor:"+inputResu);
}

// ------------------------------------------------- Exercicio 2 -------------------------------------------------------
function mostrarFrases() {
    let frases = [
        'Nossas dúvidas são traidoras e nos fazem perder o que, com frequência, poderíamos ganhar, por simples medo de arriscar.  -  William Shakespare',
        'Este CD-ROM pode conter mais informação do que todo estes papéis abaixo de mim - Bill Gates, 1994',
        'A pior coisa que eu posso ser é igual a todo mundo. Eu odeio isso. - Arnold Schwarzenegger',
        'Cada sonho que você deixa pra trás, é um pedaço do seu futuro que deixa de existir. - Steve Jobs ',
        'A História é um conjunto de mentiras sobre as quais se chegou a um acordo. - Napoleão Bonaparte ',
        'Ações não valem menos por não serem elogiadas. - Aragorn (Senhor dos anéis)',
        'Você tem inimigos? Bom. Significa que você brigou por algo, alguma vez na vida. - Winston Churchill ',
        'Um pouco de filosofia inclina a mente humana para o ateísmo, mas o aprofundamento na filosofia reaproxima a mente humana da religião - Francis Bacon',
        'Na maioria das vezes, a diferença entre vencer e perder consiste em não desistir. - Walt Disney',
        'Todo mundo é um gênio. Mas, se você julgar um peixe por sua capacidade de subir em uma árvore, ela vai gastar toda a sua vida acreditando que ele é estúpido. - Albert Einstein'];

    //Muda a frase sempre que a função é chamada
    let aleatorio = Math.floor(Math.random() * (frases.length));
    let mostrar2 = document.getElementById("mostrar2");
    let resu2 = document.getElementById("resu2");

    mostrar2.value = frases[aleatorio];
    resu2.value = frases[aleatorio].length;     
}

// ------------------------------------------------- Exercicio 3 -------------------------------------------------------
function mostrarEmail() {
    let mostrar3 = document.getElementById("mostrar3");
    let resu3 = document.getElementById("resu3");
    let nome = mostrar3.value;

    let arrayAssociativo = {
        Mateus: "mateus.alecrin@hotmail.com",
        Carlos: "carlos.uchoa@edu.sc.senai.br",
        Silvio: "silvio.sousa@edu.sc.senai.br" 
    }

    if (nome == "Mateus" || nome == "Silvio" || nome == "Carlos") {
        resu3.value = arrayAssociativo[nome];
    } else {
        resu3.value = "Dica: nome do aluno ou professores..."
        resu3.style.background = "red";
    }
}

// ------------------------------------------------- Exercicio 4 -------------------------------------------------------

function frutas() {
    let frutasInput = document.getElementById("mostrar4");
    let returnFrutas = document.getElementById("resu4"); 
    let frutas = ["banana","abacate","morango","kiwi"];
    let frutaEncontrada = false;
    let a;

    for (let i = 0; i < frutas.length; i ++) {
        if (frutasInput.value == frutas[i]) {
            frutaEncontrada = true;
            a = i;    
        }
    }
            
    if (frutaEncontrada == true) {
        returnFrutas.value = "Tem " + frutas[a] + " no array.";
    } else {
        returnFrutas.value = "Não tem " + frutasInput.value + " no array.";
    }
}

// ------------------------------------------------- Exercicio 4 -------------------------------------------------------
function dobro() {
    let valor = document.getElementById("mostrar5").value;
    let returnValor = document.getElementById("resu5");

    returnValor.value = valor * 2; 
}

// ------------------------------------------------- Exercicio 5 -------------------------------------------------------
// Crie uma função que receba um array de números como parâmetro e retorne um novo array com o dobro de cada número.
function dobroArray() {

}