import mostrarTopicos from './mostrar-topicos.js';
import redirecionarCriarTopico from './botao-adicionar.js';

mostrarTopicos()
redirecionarCriarTopico()
pegarInformacoes()

const perguntasERespostas = JSON.parse(localStorage.getItem("perguntasERespostas")) || [];

function armazenarCartao(){

    const pergunta = document.querySelector("#form--pergunta-input");
    const resposta = document.querySelector("#form--resposta-input");
    const tag = document.querySelector("#form--tag-input");
    const id = perguntasERespostas.length;

    const cartaoAtual = {
        "id": id,
        "pergunta": pergunta.value,
        "resposta": resposta.value,
        "tag": tag.value
    }

    const existe = perguntasERespostas.find(element => element.pergunta == cartaoAtual.pergunta);
    if(existe){
        atualizarCartao(cartaoAtual, existe)
    }else{
        perguntasERespostas.push(cartaoAtual)
        localStorage.setItem("perguntasERespostas", JSON.stringify(perguntasERespostas))
    }
}

function atualizarCartao(cartao, cartaoExistente){
    cartaoExistente.resposta = cartao.resposta;
    cartaoExistente.tag = cartao.tag;
    localStorage.setItem("perguntasERespostas", JSON.stringify(perguntasERespostas))
}

const form = document.querySelector("#form")
form.addEventListener("submit", function(e){
    e.preventDefault();
    armazenarCartao();
    window.location.href = "../index.html";
})

function pegarInformacoes(){
    const pergunta = obterValorParametro("pergunta")
    const inputPergunta = document.querySelector("#form--pergunta-input")
    
    if(pergunta){
        inputPergunta.value = `${pergunta}`
    }else{
        inputPergunta.value = ""
    }
    
}

function obterValorParametro(parametro) {
    const urlAtual = window.location.search;
    const urlParametros = new URLSearchParams(urlAtual);
    return urlParametros.get(parametro);
}