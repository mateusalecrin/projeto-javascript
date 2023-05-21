// // ------------------------------------------------- MENU ------------------------------------------------------------
function toggleDisplay(aula) {
    let toggleAula1 = document.getElementById("aula1");
    let toggleAula2 = document.getElementById("aula2");
    let toggleAula2Pt1 = document.getElementById("aula2Parte1");
    let toggleAula2Pt2 = document.getElementById("aula2Parte2");
    let toggleAula3 = document.getElementById("aula3");
    let toggleAula3Pt1 = document.getElementById("aula3Parte1");
    let toggleAula3Pt2 = document.getElementById("aula3Parte2");
    let toggleAula3Pt3 = document.getElementById("aula3Parte3");
    let toggleAula3Pt4 = document.getElementById("aula3Parte4");
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
        case "aula2Parte1":
            toggleAula2Pt1.classList.toggle("menu-on");
            toggleAula2Pt2.classList.remove("menu-on");
        break;
        case "aula2Parte2":
            toggleAula2Pt1.classList.remove("menu-on");
            toggleAula2Pt2.classList.toggle("menu-on");
        break;
        case "aula3":
            toggleAula3.classList.toggle("menu-on");
            
            toggleAula1.classList.remove("menu-on");
            toggleAula2.classList.remove("menu-on");
            toggleAula4.classList.remove("menu-on");
        break;
        case "aula3Parte1":
            toggleAula3Pt1.classList.toggle("menu-on");
            toggleAula3Pt2.classList.remove("menu-on");
            toggleAula3Pt3.classList.remove("menu-on");
            toggleAula3Pt4.classList.remove("menu-on");
        break;
        case "aula3Parte2":
            toggleAula3Pt1.classList.remove("menu-on");
            toggleAula3Pt2.classList.toggle("menu-on");
            toggleAula3Pt3.classList.remove("menu-on");
            toggleAula3Pt4.classList.remove("menu-on");
        break;
        case "aula3Parte3":
            toggleAula3Pt1.classList.remove("menu-on");
            toggleAula3Pt2.classList.remove("menu-on");
            toggleAula3Pt3.classList.toggle("menu-on");
            toggleAula3Pt4.classList.remove("menu-on");
        break;
        case "aula3Parte4":
            toggleAula3Pt1.classList.remove("menu-on");
            toggleAula3Pt2.classList.remove("menu-on");
            toggleAula3Pt3.classList.remove("menu-on");
            toggleAula3Pt4.classList.toggle("menu-on");
        break;
        case "aula4":
            toggleAula4.classList.toggle("menu-on");
            
            toggleAula1.classList.remove("menu-on");
            toggleAula2.classList.remove("menu-on");
            toggleAula3.classList.remove("menu-on");
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
// ----------------------- EXERCÍCIO 1  -----------------------
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

//  ----------------------- EXERCÍCIO 2  -----------------------
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

//  ----------------------- EXERCÍCIO 3  -----------------------
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

//  ----------------------- EXERCÍCIO 4  -----------------------
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

//  ----------------------- EXERCÍCIO 5  -----------------------
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

//  ----------------------- EXERCÍCIO 6  -----------------------
// Função para criar uma const String
function criarConst() {
    input1 = document.getElementById("aula1Ex6Input1");
    const bemVindo = "Bem vindo!";
    input1.value = bemVindo;
    console.log(bemVindo);
    alert(bemVindo);
}

//  ----------------------- EXERCÍCIO 7  -----------------------
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
// ----------------------- EXERCÍCIO 1 -----------------------
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

// ----------------------- EXERCÍCIO 2  -----------------------
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
    let pt2Mostrar1 = document.getElementById("pt2Mostrar1");
    let pt2Resu1 = document.getElementById("pt2Resu1");

    switch (caracteres) {
        case "todos":
            mostrar2.value = frases[aleatorio];
            resu2.value = frases[aleatorio].length;     
        break;
        case "vogais":
            pt2Mostrar1.value = frases[aleatorio];

            pt2Resu1.value = frases[aleatorio].match(/[aeiouáàâãéèêíïóôõöú]/gi).length;
            stringArray = frases[aleatorio].match(/[aeiouáàâãéèêíïóôõöú]/gi);
            console.log(stringArray.toString());
        break;
    }
}

// ----------------------- EXERCÍCIO 3  -----------------------
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

// ----------------------- EXERCÍCIO 4  -----------------------

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

// ----------------------- EXERCÍCIO 5  -----------------------
function dobrar() {
    let valor = document.getElementById("mostrar5").value;
    let returnValor = document.getElementById("resu5");

    returnValor.value = valor * 2; 
}

// ----------------------- EXERCÍCIO 6  -----------------------
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

// ----------------------- EXERCÍCIO 7  -----------------------
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

// ----------------------- EXERCÍCIO 8  -----------------------
function upperCase() {
    inputMostrar = document.getElementById("mostrar8");
    inputResu = document.getElementById("resu8");

    stringMinuscula = "No dark sarcasm in the classroom.";
    inputMostrar.value = stringMinuscula;
    stringMaiscula = stringMinuscula.toUpperCase();
    inputResu.value = stringMaiscula;
}

// ----------------------- EXERCÍCIO 9  -----------------------
function parametros() {
    inputValue = document.getElementById("mostrar9").value;
    inputResu = document.getElementById("resu9");

    inputResu.value = retornarParametro(inputValue);
    
    function retornarParametro(inputValue) {
        novaVariavel = inputValue;
        return novaVariavel;
    }
}

// ------------------------------------------------- PARTE 2 -------------------------------------------------------
// ----------------------- EXERCÍCIO 1  -----------------------
// Crie uma função que receba uma string e retorne o número de vogais presentes nessa string.
// Acoplei junto ao exercício 2 da parte 1.

// ----------------------- EXERCÍCIO 2  -----------------------
// Crie uma função que receba um número e retorne o fatorial desse número.
function factorial() {
    pt2Mostrar2 = document.getElementById("pt2Mostrar2");
    pt2Resu2 = document.getElementById("pt2Resu2");
    numero = pt2Mostrar2.value;
    
    function formula(n) {
        var result = 1;
      
        while (n > 1) {
            result *= n;
            console.log(result);
            n--;
        }
      
        return result;
    }
    
    if (numero == "") {
        alert("Insira um número por favor!");
    } else {
        result = formula(numero);
        console.log("The factorial of " + numero + " is: " + result);
        pt2Resu2.value = result;
    }
}

// ----------------------- EXERCÍCIO 3  -----------------------
// Crie um formulário HTML que tenha um campo de entrada de texto para o nome e outro para o e-mail.
// Em seguida, crie uma função JavaScript que valide se os campos foram preenchidos corretamente 
// (ou seja, se o campo de nome não está vazio e se o campo de e-mail contém um endereço de e-mail válido).
function validarEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
    
    if ((usuario.length >=3) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (usuario.search(".")!=-1) &&
        (dominio.search(".")!=-1) &&
        (usuario.indexOf(".")>=1) &&
        (dominio.indexOf(".")>=1) &&
        (usuario.lastIndexOf(".") < usuario.length -1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
            document.getElementById("msgemail").innerHTML="E-mail válido";
            console.log("E-mail válido");
        } else {
            document.getElementById("msgemail").innerHTML="E-mail inválido";
            console.log("E-mail inválido");
        }
    }

function validarNome(field) {
    nome = field.value.substring(0, field.value.indexOf(" "));
    sobrenome = field.value.substring(field.value.indexOf(" ") + 1, field.value.length);

    if ((nome.lenght >=3) &&
        (nome.search(" ")==-1) && 
        (sobrenome.lenght >=3) &&
        (sobrenome.search(" ")==-1)) {
            document.getElementById("msgnome").innerHTML="Nome válido";
            console.log("Nome válido");
        } else {
            document.getElementById("msgnome").innerHTML="Nome inválido";
            console.log("Nome inválido");
    }
}
  
// ----------------------- EXERCÍCIO 4  -----------------------
// Crie um formulário HTML que tenha um campo de entrada de número para a idade e outro para a altura em centímetros.
// Em seguida, crie uma função JavaScript que valide se os campos foram preenchidos corretamente 
// (ou seja, se a idade está entre 18 e 60 anos e se a altura está entre 150 e 200 centímetros).
function validarIdade(field) {
    idade = field.value;

    if ((idade >= 18) && (idade <= 60)) {
        document.getElementById("msgidade").innerHTML="Idade válida";
        console.log("Idade válida");
    } else if ((idade < 18) || (idade > 60)) {
        document.getElementById("msgidade").innerHTML="Idade inválida";
        console.log("Idade inválida")
    };
}

function validarAltura(field) {
    altura = field.value;

    if ((altura >= 150) && (altura <= 200)) {
        document.getElementById("msgaltura").innerHTML="Altura válida";
        console.log("Altura válida");
    } else {
        document.getElementById("msgaltura").innerHTML="Altura inválida";
        console.log("Altura inválida");
    }
}


// ------------------------------------------------- AULA 3 ------------------------------------------------------------
// ------------------------------------------------- TEMPLATE LITERALS ------------------------------------------------------------
// ----------------------- EXERCÍCIO 1  -----------------------
// Crie uma função que recebe um nome e retorna uma string utilizando template literals para dar boas-vindas ao usuário.
function aula3Ex1() {
    let inputNome = document.getElementById("aula3Pt1Ex1Input1");
    let inputMostrar = document.getElementById("aula3Pt1Ex1Input2"); 
    nome = inputNome.value;

    stringBemVindo = `Bem-vindo ${nome}`;
    if (nome == "") {
        inputMostrar.value = "Você não disse seu nome 😕"
    } else {
        inputMostrar.value = stringBemVindo;
        alert(stringBemVindo);
        console.log(stringBemVindo);   
    }
}

// ----------------------- EXERCÍCIO 2  -----------------------
// Crie uma função que recebe uma data e retorna uma string formatada utilizando template literals.
function aula3Ex2() {
    inputData = document.getElementById("aula3Pt1Ex2Input1");
    inputResu = document.getElementById("aula3Pt1Ex2Input2");
    data = inputData.value;
    dia = data.substring(8, 10);
    mes = data.substring(5, 7);
    ano = data.substring(0, 4);
    dataFormatada= `Dia ${dia} do ${mes} de ${ano}`;
    
    inputResu.value = dataFormatada;
    console.log(dataFormatada);
}

// ----------------------- EXERCÍCIO 3  -----------------------
// Crie uma função que recebe um objeto com as informações de um produto e retorna uma string utilizando 
// template literals para exibir as informações na tela.
function aula3Ex3() {
    input1 = document.getElementById("aula3Pt1Ex3Input1");

    const produto = {id: 1, nome: "Caneta", tipo: "Bic", espessura: 0.7, cor: "Azul", preco: 5.99};

    descricao = `${produto.nome} ${produto.tipo} ${produto.espessura} na cor ${produto.cor} por apenas R$ ${produto.preco} a unidade.`;
    input1.value = descricao;
}


// ------------------------------------------------- ARROW FUNCTIONS ------------------------------------------------------------
// -----------------------  EXERCÍCIO 1  -----------------------
// Crie uma função que recebe um array de números e utiliza arrow function para retornar a soma de todos eles.
function aula3Pt2Ex1() {
    input1 = document.getElementById("aula3Pt2Ex1Input1");
    
    const getRandomArray = (length, min, max) => 
            Array.from({ length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
    
    const arrayDeNumeros = getRandomArray(5, 0, 100);
    
    arraySomado = arrayDeNumeros.reduce((accumulator,value) => accumulator + value,0);

    input1.value = arrayDeNumeros.join(" + ") + " = " + arraySomado;
}

// -----------------------  EXERCÍCIO 2  -----------------------
// Crie uma função que recebe um array de strings e utiliza arrow function para retornar o número total de 
// caracteres em todas as strings.
function aula3Pt2Ex2() {
    input1 = document.getElementById("aula3Pt2Ex2Input1");

    let frasesFilosofos = [
        "A vida examinada não vale a pena ser vivida. - Sócrates",
        "Penso, logo existo. - René Descartes",
        "O homem é a medida de todas as coisas. - Protágoras",
        "A religião é o ópio do povo. - Karl Marx",
        "O que sabemos é uma gota, o que ignoramos é um oceano. - Isaac Newton"
    ];
    console.log(frasesFilosofos.toString());

    const countTotalCharacters = (array) => array.reduce((total, string) => total + string.length, 0);
    totalCaracteres = countTotalCharacters(frasesFilosofos);
    input1.value = totalCaracteres;
}

// -----------------------  EXERCÍCIO 3  -----------------------
// Crie uma função que recebe um objeto com informações de um produto e utiliza arrow function para retornar
// a descrição do produto em uma string.
function aula3Pt2Ex3() {
    let produto = {id: 1, nome: "Caneta", tipo: "Bic", espessura: 0.7, cor: "Azul", preco: 5.99};
    
    let getProductDescription = (product) => {
        const { nome, tipo, espessura, cor, preco } = product;
        return `Produto: ${nome} | Tipo: ${tipo} | Espessura: ${espessura} | Cor: ${cor} | Preço: $${preco}`;
    };
    
    produtoDescrito = getProductDescription(produto);
    document.getElementById("aula3Pt2Ex3Input1").value = produtoDescrito;

}


// ------------------------------------------------- JSON ------------------------------------------------------------
// -----------------------  EXERCÍCIO 1  -----------------------
// Crie um objeto JSON com informações sobre uma pessoa, como nome, idade e endereço.
function aula3Pt3Ex1() {
    pessoa = {
        nome: "João",
        idade: 25,
        endereco: {
            rua: "Rua Principal",
            numero: 123,
            cidade: "Hogwarts",
            estado: "Uchoa isles",
            pais: "Silviolandia"
        }
    };
    console.log(JSON.stringify(pessoa));
    document.getElementById("aula3Pt3Ex1Input1").value = JSON.stringify(pessoa);
}

// -----------------------  EXERCÍCIO 2  -----------------------
// Crie uma função que recebe um objeto JSON com informações de um produto e retorna uma string com o nome
// e o preço do produto.
function aula3Pt3Ex2() {
    let getProductInfo = (product) => {
        let { nome, tipo, marca, modelo, preco } = product; // Desestruturação do objeto para obter as propriedades name e price
        return `Produto: ${nome} Tipo: ${tipo} Marca: ${marca} Modelo: ${modelo} Preco: $${preco}`;
      };

    let produto = {
        nome: "Celular",
        tipo: "Smartphone",
        marca: "Iphone",
        modelo: "XR MAX",
        preco: 1599.99
    };

    result = getProductInfo(produto);
    console.log(produto);

    document.getElementById("aula3Pt3Ex2Input1").value = result;
}

// -----------------------  EXERCÍCIO 3  -----------------------
// Crie uma função que recebe um array de objetos JSON com informações de produtos e retorna uma string com
// o nome e o preço de cada um dos produtos.
function aula3Pt3Ex3() {
    getProductInfo = (product) => {
       return product.map(product =>`${product.nome} ${product.tipo} ${product.marca} ${product.modelo} $${product.preco}`).join(', ');
      };

    let produto = [{nome: "Celular", tipo: "Smartphone", marca: "Iphone", modelo: "XR MAX", preco: 1599.99},
                  {nome: "Celular", tipo: "Smartphone", marca: "Samsumg", modelo: "S22", preco: 2029.99},
                  {nome: "Celular", tipo: "Smartphone", marca: "Redmi", modelo: "Note 9", preco: 1069.99}];
                
    result = getProductInfo(produto);
    
    console.log(result);
    document.getElementById("aula3Pt3Ex3Input1").value = result;
}


// --------------------------------------- TEMPLATE LITERALS + ARROW FUNCTIONS -----------------------------------------
// -----------------------  EXERCÍCIO 1  -----------------------
// Crie uma função que recebe um array de objetos JSON com informações de produtos e utiliza template literals 
// e arrow function para retornar uma string com o nome e o preço de cada um dos produtos.
function aula3Pt4Ex1() {
    // Mesmo que o exercicio anterior, pois já havia usado template literals como retorno.
    getProductInfo = (product) => {
        return product.map(product =>`${product.nome} ${product.tipo} ${product.marca} ${product.modelo} $${product.preco}`).join(', ');
    };
 
     let produto = [{nome: "Celular", tipo: "Smartphone", marca: "Iphone", modelo: "XR MAX", preco: 1599.99},
                   {nome: "Celular", tipo: "Smartphone", marca: "Samsumg", modelo: "S22", preco: 2029.99},
                   {nome: "Celular", tipo: "Smartphone", marca: "Redmi", modelo: "Note 9", preco: 1069.99}];
                 
     result = getProductInfo(produto);
     
     console.log(result);
     document.getElementById("aula3Pt4Ex1Input1").value = result;



}

// -----------------------  EXERCÍCIO 2  -----------------------
// Crie uma função que recebe um array de objetos JSON com informações de produtos e utiliza template literals
// e arrow function para retornar uma tabela HTML com as informações de cada produto.
function aula3Pt4Ex2() {
    let produto = [{nome: "Celular", tipo: "Smartphone", marca: "Iphone", modelo: "XR MAX", preco: 1599.99},
                  {nome: "Celular", tipo: "Smartphone", marca: "Samsumg", modelo: "S22", preco: 2029.99},
                  {nome: "Celular", tipo: "Smartphone", marca: "Redmi", modelo: "Note 9", preco: 1069.99}];
    
    createProductTable = (product) => {
        tableRows = product.map(product => `
        <tr>
            <td style="padding: 0.5px 5px">${product.nome}</td>
            <td style="padding: 0.5px 5px">${product.tipo}</td>
            <td style="padding: 0.5px 5px">${product.marca}</td>
            <td style="padding: 0.5px 5px">${product.modelo}</td>
            <td style="padding: 0.5px 5px">$${product.preco}</td>
        </tr>`);
        

        table = `
            <table>
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th>Tipo</th>
                        <th>Marca</th>
                        <th>Modelo</th>
                        <th>Preco</th>
                    </tr>
                </thead>
                <tbody>
                    ${tableRows.join('')}
                </tbody>
            </table>
        `;
                 
     return table;
    }

    tabelaHTML = createProductTable(produto);
    console.log(tabelaHTML);
    divEx2 = document.getElementById("aula3Pt4Ex2Input1");
    divEx2.innerHTML = tabelaHTML;

}

// -----------------------  EXERCÍCIO 3  -----------------------
function aula3Pt4Ex3() {
    let produto = [{nome: "Celular", tipo: "Smartphone", marca: "Iphone", modelo: "XR MAX", preco: 1599.99},
                  {nome: "Celular", tipo: "Smartphone", marca: "Samsumg", modelo: "S22", preco: 2029.99},
                  {nome: "Celular", tipo: "Smartphone", marca: "Redmi", modelo: "Note 9", preco: 1069.99}];
    
    createProductList = (product) => {
        listRows = product.map(product => `
        <li>
            <li style="padding: 3px 5px">${product.nome}</li>
            <li style="padding: 3px 5px">${product.tipo}</li>
            <li style="padding: 3px 5px">${product.marca}</li>
            <li style="padding: 3px 5px">${product.modelo}</li>
            <li style="padding: 3px 5px">$${product.preco}</li>        
        </li>`);
        

        list = `
        <ul style="columns: 3; list-style: none; padding: 20px">
            ${listRows.join('')}
        </ul>`;
                 
     return list;
    }

    listHTML = createProductList(produto);
    console.log(listHTML);
    divEx3 = document.getElementById("aula3Pt4Ex3Input1");
    divEx3.innerHTML = listHTML;

} 