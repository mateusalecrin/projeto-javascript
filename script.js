// Carregar background
document.addEventListener("DOMContentLoaded", function() {
    // Função para gerar um valor aleatório entre 0 e max
    function random(max) {
        return Math.floor(Math.random() * max);
    }
      
    // Função para gerar múltiplos box-shadows
    function multipleBoxShadow(n) {
        let value = `${random(2000)}px ${random(2000)}px #FFF`;
        for (let i = 2; i <= n; i++) {
          value += `, ${random(2000)}px ${random(2000)}px #FFF`;
        }
        return value;
    }
      
    // Chamadas à função multipleBoxShadow com diferentes valores de n
    const shadowsSmall = multipleBoxShadow(700);
    const shadowsMedium = multipleBoxShadow(200);
    const shadowsBig = multipleBoxShadow(100);
  
    document.documentElement.style.setProperty('--box-shadowsSmall', shadowsSmall);
    document.documentElement.style.setProperty('--box-shadowsMedium', shadowsMedium);
    document.documentElement.style.setProperty('--box-shadowsBig', shadowsBig);
    
}, false);

// Expandir Menu
function expandir() {
    let containerMenu = document.getElementById("containerMenu");
    if (containerMenu.style.maxHeight) {
      // Se estiver visível, oculta o menu
      containerMenu.style.maxHeight = null;
    } else {
      // Se estiver oculto, exibe o menu
      containerMenu.style.maxHeight = '200px';
    }
}