// Iniciar o contador em 1
var contador = 1;
// Variável para armazenar o ID do intervalo
var intervalId;

// Ao carregar a página inicializa duas funções
window.onload = function() {
   initializeMenu();
   gerarDados();
};

// ------------------------------------------------- MENU ------------------------------------------------------------
// Função para carregar as páginas com os menus fechados
function initializeMenu() {
    var submenus = document.getElementsByClassName("submenu");
    for (var i = 0; i < submenus.length; i++) {
      submenus[i].style.display = "none";
    }
}

// Função para manter somente um menu aberto
function toggleSubMenu(option) { 
    var submenu = document.getElementById("submenu" + option);
    var submenus = document.getElementsByClassName("submenu");
    console.clear();
    for (var i = 0; i < submenus.length; i++) {
        if (submenus[i] == submenu) {
            if (submenu.style.display == "none") {
                submenus[i].style.display = "block";
                console.log(submenus[i].id + " está aberto.");
            } else {
                submenus[i].style.display = "none";
                console.log(submenus[i].id + " está fechado.");
            }
        } else {
            submenus[i].style.display = "none";
            console.log(submenus[i].id + " está fechado.");
        }
    }
}  

// ------------------------------------------------- PRIMEIRA ATIVIDADE -----------------------------------------------
// Função para verificar o value do input bebida e tomar decisões
function verificar() {
    let escolhaInput = document.getElementById("input-escolha");
    let escResultado = document.getElementById("esc-resultado");
    let texto = escolhaInput.value

    switch(texto) {
        case "Refrigerante":
            escolhaInput.style.backgroundColor = "green";
            escResultado.value = "É pra já!!!";
            console.log(texto);
            
            let gifRefrigerante = document.getElementById("gif-refrigerante");
            gifRefrigerante.style.display = "block";

            setTimeout(function() {
                gifRefrigerante.style.display = "none";
                escolhaInput.value = "";
                escResultado.value = "";
                escolhaInput.style.backgroundColor = "#f7e4bb";
            }, 3000);
        break;

        case "Suco":
            escolhaInput.style.backgroundColor = "green";
            escResultado.value = "É pra já!!!";
            console.log(texto);

            let gifSuco = document.getElementById("gif-suco");
            gifSuco.style.display = "block";

            setTimeout(function() {
                gifSuco.style.display = "none";
                escolhaInput.value = "";
                escResultado.value = "";
                escolhaInput.style.backgroundColor = "#f7e4bb";
            }, 3000);
        break;

        case "Sorvete":
            escolhaInput.style.backgroundColor = "green";
            escResultado.value = "É pra já!!!";
            console.log(texto);

            let gifSorvete = document.getElementById("gif-sorvete");
            gifSorvete.style.display = "block";

            setTimeout(function() {
                gifSorvete.style.display = "none";
                escolhaInput.value = "";
                escResultado.value = "";
                escolhaInput.style.backgroundColor = "#f7e4bb";
            }, 3000);
        break;
        default:
            escolhaInput.style.backgroundColor = "red";
            escResultado.value = "Não temos :[";
    }
}

// ------------------------------------------------- SEGUNDA ATIVIDADE ------------------------------------------------
// Função para subtrair os números e exibir o resultado
function subtrair() {
    // Obtém os valores dos números digitados
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let input = document.getElementById("submenu2").getElementsByClassName("submenu-input");
    // Realiza a subtração e exibe o resultado
    let resultado = numero1 - numero2;
    input[2].style.backgroundColor = "green";
    document.getElementById("resultado").value = resultado;
    console.log(numero1 + " - " + numero2 + " = " + resultado + ".");
}

// ------------------------------------------------- TERCEIRA ATIVIDADE -----------------------------------------------
// Função para dividir os números e exibir o resultado
function dividir() {
    // Obtém os valores dos números digitados
    let divNumero1 = document.getElementById("div-numero1").value;
    let divNumero2 = document.getElementById("div-numero2").value;

    let input = document.getElementById("submenu3").getElementsByClassName("submenu-input");
    // Verifica se o segundo número não é zero
    if (divNumero2 == 0) {
        for (var i = 0; i < input.length; i++) {
            input[i].value = 0;
        }
        input[2].style.backgroundColor = "red"
        console.log("Você não pode dividir por 0.");
    } else {
        let resultado = divNumero1 / divNumero2;
        input[2].style.backgroundColor = "green";
        document.getElementById("div-resultado").value = resultado;      
        console.log(divNumero1 + " / " + divNumero2 + " = " + resultado + ".");
    }
}

// ------------------------------------------------- QUARTA ATIVIDADE -------------------------------------------------
// Função para iniciar a contagem
function contar() {
    console.log("Iniciando a contagem!");
    if (intervalId) {
        clearInterval(intervalId); // Parar o intervalo anterior, se existir
    }
    contador = 1;
    document.getElementById("input-contador").value = contador;
    // Atualizar a contagem a cada segundo (1000 ms)
    intervalId = setInterval(atualizarContagem, 10);
}
// Função para atualizar a contagem
function atualizarContagem() {
    // Se contador for menor ou igual a 1000
    if (contador <= 1000) {
        console.log(contador);
        // Atualizar o valor do campo de entrada de texto
        document.getElementById("input-contador").value = contador; 
        // Incrementar o contador
        contador++;

    } else {
        // Parar o intervalo quando a contagem atingir 1000
        clearInterval(intervalId); 
    }

}

// ------------------------------------------------- QUINTA ATIVIDADE -------------------------------------------------
// Função para declarar informações de um objeto e imprimi-las.
function gerarDados() {
    console.log("Gerando dados...." + "\nRua:");
    var objetoPessoa = {
        rua: "Rua dos Pinheiros nº 123",
        numero: "123",
        bairro: "Centro",
        cidade: "Joinville"
    };

    document.getElementById("input-rua").value = objetoPessoa.rua;
    document.getElementById("input-numero").value = objetoPessoa.numero;
    document.getElementById("input-bairro").value = objetoPessoa.bairro;
    document.getElementById("input-cidade").value = objetoPessoa.cidade;
}

// ------------------------------------------------- SEXTA ATIVIDADE --------------------------------------------------
// Função para criar uma const String
function criarConst() {
    const bemVindo = "Bem vindo!";
    console.log(bemVindo);
    alert(bemVindo);
}