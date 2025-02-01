//OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o proximo cartao da lista

// variaves
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

//passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
btnAvancar.addEventListener("click", function () {
    if (cartaoAtual === cartoes.length - 1) return;

    // passo 3 - fazer aparecer o próximo cartão da lista
    cartaoAtual++;
    cartoes[cartaoAtual].classList.add("selecionado");

    // passo 4 - buscar o cartão que esta selecionado e esconder
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");

});

/*OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o cartão 
anterior da lista */

btnVoltar.addEventListener("click", function () {

    if (cartaoAtual === 0) return;

    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");

    cartaoAtual--;
    cartoes[cartaoAtual].classList.add("selecionado");

});