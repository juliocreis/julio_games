let jogosAlugados = 0;


function quantidadeJogosAlugados(){
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

function alterarStatus(gameId) {
    let jogoClicado = document.getElementById(`game-${gameId}`);
    let imagem = jogoClicado.querySelector('.dashboard__item__img');
    let botao = jogoClicado.querySelector('.dashboard__item__button');
    let mensagemConfirmacao;

    if(imagem.classList.contains('dashboard__item__img--rented')) {
        mensagemConfirmacao = 'Você realmente deseja devolver este jogo?';
    }
    else {
        mensagemConfirmacao = 'Você realmente deseja alugar este jogo?';
    }

    let confirmar = confirm(mensagemConfirmacao);

    if(confirmar){
        if(imagem.classList.contains('dashboard__item__img--rented')){
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
            jogosAlugados--;
        }
        else {
            imagem.classList.add('dashboard__item__img--rented');
            botao.textContent = 'Devolver';
            botao.classList.add('dashboard__item__button--return');
            jogosAlugados++;
        }
    }

    quantidadeJogosAlugados();
}

document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});
