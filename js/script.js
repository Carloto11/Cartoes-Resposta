import mostrarCartao from './mostrar-cartao.js';
import mostrarTopicos from './mostrar-topicos.js';
import filtrarCartoes from './filtrando-cartoes.js';
import apagarCartao from './apagar-cartoes.js';

const criarNovoCartao = document.querySelector(".criar-novo-cartao");
const lapisEditar = document.querySelectorAll("#editar");
const perguntasERespostas = JSON.parse(localStorage.getItem("perguntasERespostas")) || [];

mostrarTopicos()

criarNovoCartao.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "./pages/criar-cartao.html";
})

perguntasERespostas.forEach(element => {
    mostrarCartao(element.id, element.pergunta, element.tag)
});

const criarTopico = document.querySelector("#adicionar")
criarTopico.addEventListener("click", (e) => {
    e.preventDefault()
    window.location.href = "./pages/criar-topico.html";
})

const cartoesResposta = document.querySelectorAll(".cartao-resposta")
cartoesResposta.forEach(cartao => {
    
    const id = cartao.firstChild.nextElementSibling.childNodes[1].children[0].innerText

    const lapis = cartao.children[1].children[2]
    const pergunta = cartao.children[0].children[0].innerText
    lapis.addEventListener("click", (e) => {
        e.preventDefault()
        window.location.href = `./pages/criar-cartao.html?id=${id}&pergunta=${pergunta}`
    })

    const lixeira = cartao.children[1].children[1]
    lixeira.addEventListener("click", (e) => {
        e.preventDefault()
        apagarCartao(cartao)
    })

    const divClicavel = cartao.children[0]
    divClicavel.addEventListener("click", (e) => {
        e.preventDefault()
        window.location.href = `./pages/ver-cartao.html?id=${id}`
    })
})

const filtros = document.querySelectorAll(".cartoes--filtro")
filtros.forEach(filtro => {
    filtro.addEventListener("click", (e) => {
        e.preventDefault()
        const filtroTag = filtro.children[0].value
        filtrarCartoes(filtroTag, perguntasERespostas)
    })
})