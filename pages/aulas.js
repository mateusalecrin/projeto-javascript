// // ------------------------------------------------- MENU ------------------------------------------------------------
function toggleDisplay(aula) {
    let toggleAula1 = document.getElementById("aula1");
    let toggleAula2 = document.getElementById("aula2");
    let toggleAula2Pt1 = document.getElementById("aula2parte1");
    let toggleAula2Pt2 = document.getElementById("aula2parte2");
    let toggleAula3 = document.getElementById("aula3");
    let toggleAula4 = document.getElementById("aula4");


    console.log(aula);
    switch(aula) {
        case "aula1":
            toggleAula1.classList.toggle("menu-on");
        
            toggleAula2.classList.remove("menu-on");
            toggleAula3.classList.remove("menu-on");
            toggleAula4.classList.remove("menu-on");
        break;
        case "aula2":
            toggleAula2.classList.toggle("menu-on");
            
            toggleAula1.classList.remove("menu-on");
            toggleAula3.classList.remove("menu-on");
            toggleAula4.classList.remove("menu-on");
        break;
        case "aula3":
            toggleAula3.classList.toggle("menu-on");
            
            toggleAula1.classList.remove("menu-on");
            toggleAula2.classList.remove("menu-on");
            toggleAula4.classList.remove("menu-on");
        break;
        case "aula4":
            toggleAula4.classList.toggle("menu-on");
            
            toggleAula1.classList.remove("menu-on");
            toggleAula2.classList.remove("menu-on");
            toggleAula3.classList.remove("menu-on");
        break;
        case "parte1":
            toggleAula2Pt1.classList.toggle("menu-on");
            toggleAula2Pt2.classList.remove("menu-on");
        break;
        case "parte2":
            toggleAula2Pt1.classList.remove("menu-on");
            toggleAula2Pt2.classList.toggle("menu-on");
        break;
    }
}

// Iniciar o contador em 1
var contador = 1;
// Variável para armazenar o ID do intervalo
var intervalId;
    
// Ao carregar a página inicializa as seguintes funções
window.onload = function() {
    gerarDados();
};







// ------------------------------------------------- AULA 1 ------------------------------------------------------------    
// ----------------------- PRIMEIRA ATIVIDADE  -----------------------
// Função para verificar o value do input bebida e tomar decisões
function verificar() {
    let aula1Ex1Input1 = document.getElementById("aula1Ex1Input1");
    let aula1Ex1Input2 = document.getElementById("aula1Ex1Input2");
    let texto = aula1Ex1Input1.value

    switch(texto) {
        case "Refrigerante":
            gifRefrigerante = document.getElementById("gif-refrigerante");
            gifRefrigerante.classList.toggle("on");
            aula1Ex1Input2.style.backgroundColor = "green";
            aula1Ex1Input2.value = "É pra já!!!";
            console.log(texto);
        
            setTimeout(function() {
                gifRefrigerante.classList.toggle("on");
                aula1Ex1Input1.value = "";
                aula1Ex1Input2.value = "";
                aula1Ex1Input2.style.backgroundColor = "black";
            }, 3000);
        break;

        case "Suco":
            gifSuco = document.getElementById("gif-suco");
            gifSuco.classList.toggle("on");
            aula1Ex1Input2.style.backgroundColor = "green";
            aula1Ex1Input2.value = "É pra já!!!";
            console.log(texto);

            setTimeout(function() {
                gifSuco.classList.toggle("on");
                aula1Ex1Input1.value = "";
                aula1Ex1Input2.value = "";
                aula1Ex1Input2.style.backgroundColor = "black";
            }, 3000);
        break;

        case "Sorvete":
            gifSorvete = document.getElementById("gif-sorvete");
            gifSorvete.classList.toggle("on");
            aula1Ex1Input2.style.backgroundColor = "green";
            aula1Ex1Input2.value = "É pra já!!!";
            console.log(texto);


            setTimeout(function() {
                gifSorvete.classList.toggle("on");
                aula1Ex1Input1.value = "";
                aula1Ex1Input2.value = "";
                aula1Ex1Input2.style.backgroundColor = "black";
            }, 3000);
        break;
        default:
            aula1Ex1Input2.style.backgroundColor = "red";
            aula1Ex1Input2.value = "Não temos :[";
    }
}

//  ----------------------- SEGUNDA ATIVIDADE  -----------------------
// Função para subtrair os números e exibir o resultado
function subtrair() {
    // Obtém os valores dos números digitados
    numero1 = document.getElementById("aula1Ex2Input1").value;
    numero2 = document.getElementById("aula1Ex2Input2").value;
    inputResultado = document.getElementById("aula1Ex2Input3");
    // Realiza a subtração e exibe o resultado
    resultado = numero1 - numero2;
    inputResultado.style.backgroundColor = "green";
    inputResultado.value = resultado;
    console.log(numero1 + " - " + numero2 + " = " + resultado + ".");
}

//  ----------------------- TERCEIRA ATIVIDADE  -----------------------
// Função para dividir os números e exibir o resultado
function dividir() {
    // Obtém os valores dos números digitados
    numero1 = document.getElementById("aula1Ex3Input1").value;
    numero2 = document.getElementById("aula1Ex3Input2").value;
    inputResultado = document.getElementById("aula1Ex3Input3");

        // Verifica se o segundo número não é zero
    if (numero2 == 0) {
        inputResultado.value = 0;
        inputResultado.style.backgroundColor = "red";
        console.log("Você não pode dividir por 0.");
        alert("Você não pode dividir por 0.");
    } else {
        resultado = numero1 / numero2;
        inputResultado.style.backgroundColor = "green";
        inputResultado.value = resultado;      
        console.log(numero1 + " / " + numero2 + " = " + resultado + ".");
    }
}

//  ----------------------- QUARTA ATIVIDADE  -----------------------
// Função para iniciar a contagem
function contar() {
    console.log("Iniciando a contagem!");
    if (intervalId) {
        clearInterval(intervalId); // Parar o intervalo anterior, se existir
    }
    contador = 1;
    document.getElementById("aula1Ex4Input1").value = contador;
    // Atualizar a contagem a cada segundo (1000 ms)
    intervalId = setInterval(atualizarContagem, 10);
}
// Função para atualizar a contagem
function atualizarContagem() {
    // Se contador for menor ou igual a 1000
    if (contador <= 1000) {
        console.log(contador);
        // Atualizar o valor do campo de entrada de texto
        document.getElementById("aula1Ex4Input1").value = contador; 
        // Incrementar o contador
        contador++;

    } else {
        // Parar o intervalo quando a contagem atingir 1000
        clearInterval(intervalId); 
    }
}

//  ----------------------- QUINTA ATIVIDADE  -----------------------
// Função para declarar informações de um objeto e imprimi-las.
function gerarDados() {
    console.log("Gerando dados...." + "\nRua:");
    var objetoPessoa = {
        rua: "Rua dos Pinheiros",
        numero: "123",
        bairro: "Centro",
        cidade: "Joinville"
    };

    document.getElementById("aula1Ex5rua").value = objetoPessoa.rua;
    document.getElementById("aula1Ex5numero").value = objetoPessoa.numero;
    document.getElementById("aula1Ex5bairro").value = objetoPessoa.bairro;
    document.getElementById("aula1Ex5cidade").value = objetoPessoa.cidade;
}

//  ----------------------- SEXTA ATIVIDADE  -----------------------
// Função para criar uma const String
function criarConst() {
    input1 = document.getElementById("aula1Ex6Input1");
    const bemVindo = "Bem vindo!";
    input1.value = bemVindo;
    console.log(bemVindo);
    alert(bemVindo);
}

//  ----------------------- SÉTIMA ATIVIDADE  -----------------------
// Função para comparar notas
function compararNotas() {
    inputNotas = document.getElementById("aula1Ex7Input1");
    inputResultado = document.getElementById("aula1Ex7Input2");
    nota = inputNotas.value;

    if (nota >= 7) {
        inputResultado.style.backgroundColor = "green";
        inputResultado.value = "Aprovado! 👏";
    } else if ((nota < 7) && (nota >= 5)) {
        inputResultado.style.backgroundColor = "yellow";
        inputResultado.value = "Recuperação! 😕";
    } else {
        inputResultado.style.backgroundColor = "red";
        inputResultado.value = "Reprovado! 👎"
    }

    setTimeout( function() {
        inputNotas.value = "";
        inputResultado.value = "";
        inputResultado.style.backgroundColor = "black";
    }, 2000);
}







// ------------------------------------------------- AULA 2 ------------------------------------------------------------
// ----------------------- PRIMEIRA ATIVIDADE  -----------------------
// Função para gerar números aleatórios
function gerarNumeros() {
    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    inputMostrar = document.getElementById("mostrar1");
    inputResu = document.getElementById("resu1");
    texto = "";
    array = [];

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
function mostrarFrases(caracteres) {
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
    let mostrar10 = document.getElementById("mostrar10");
    let resu10 = document.getElementById("resu10");

    switch (caracteres) {
        case "todos":
            mostrar2.value = frases[aleatorio];
            resu2.value = frases[aleatorio].length;     
        break;
        case "vogais":
            mostrar10.value = frases[aleatorio];

            resu10.value = frases[aleatorio].match(/[aeiouáàâãéèêíïóôõöú]/gi).length;
            stringArray = frases[aleatorio].match(/[aeiouáàâãéèêíïóôõöú]/gi);
            console.log(stringArray.toString());
        break;
    }
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

// ------------------------------------------------- Exercicio 5 -------------------------------------------------------
function dobrar() {
    let valor = document.getElementById("mostrar5").value;
    let returnValor = document.getElementById("resu5");

    returnValor.value = valor * 2; 
}

// ------------------------------------------------- Exercicio 6 --------------------------------------------------------
function dobrarArray() {
    inputMostrar = document.getElementById("mostrar6");
    inputResu = document.getElementById("resu6");
    let dobrarArray = [];
    let array = [];

    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    for (let i = 0 ; i < 10 ; i++){
        array.push(getRandom(0,100));
    }
    
    dobrarArray = array.map(function(element) {
        return element * 2;
    });
    
    array.toString();
    console.log(array);
    dobrarArray.toString();
    console.log(dobrarArray);
    inputMostrar.value = array;
    inputResu.value = dobrarArray; 
}

// ------------------------------------------------- Exercicio 7 -------------------------------------------------------
function arrayLiteral() {
    let zoologico = ["Piton", "Surucucu", "Cascavel", "Naja", "Jiboia"];
    inputValue = document.getElementById("mostrar7");
    inputResu = document.getElementById("resu7");
    
    valor = inputValue.value;
    index = zoologico.indexOf(valor);
    inputResu.value = index;
    console.log(index);
    console.log(zoologico);
}

// ------------------------------------------------- Exercicio 8 -------------------------------------------------------
function upperCase() {
    inputMostrar = document.getElementById("mostrar8");
    inputResu = document.getElementById("resu8");

    stringMinuscula = "No dark sarcasm in the classroom.";
    inputMostrar.value = stringMinuscula;
    stringMaiscula = stringMinuscula.toUpperCase();
    inputResu.value = stringMaiscula;
}

// ------------------------------------------------- Exercicio 9 -------------------------------------------------------
function parametros() {
    inputValue = document.getElementById("mostrar9").value;
    inputResu = document.getElementById("resu9");

    inputResu.value = retornarParametro(inputValue);
    
    function retornarParametro(inputValue) {
        novaVariavel = inputValue;
        return novaVariavel;
    }
}

