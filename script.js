//Constantes que selcionam e armazenam o conteúdo de "titulo":
const titulo = document.querySelector('h1');
const texto = titulo.innerText;
//indice que controla os caracteres:
let i = 0;

//Efeito de digitação no elemento com id "titulo":
const digitacao = setInterval(() => {
    //Atualiza o texto exibido mostrando apenas o caractere atual:
    titulo.innerHTML = texto.slice(0, i);
    i++;
    //Se todo o texto já foi digitado, o intervalo é interrompido e o cursor "|" removido:
    if (i > texto.length) {
        clearInterval(digitacao);
        //Garante que o texto final não tenha o cursor:
        titulo.innerHTML = texto;
    } else {
        // Enquanto está digitando, adiciona "|":
        titulo.innerHTML += '|';
    }
}, 75);