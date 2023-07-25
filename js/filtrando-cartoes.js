import mostrarCartao from './mostrar-cartao.js';

export default function filtrarCartoes(filtro){
    const cartoes = JSON.parse(localStorage.getItem("perguntasERespostas")) || [];
    const containerCartoes = document.querySelector("#perguntas")

    if (filtro == "Todos") {
        containerCartoes.innerHTML = ""
        filtroTodos(cartoes)
    }else{
        containerCartoes.innerHTML = ""
        cartoes.forEach(cartao => {
            if(cartao.tag == filtro){
                filtroTag(cartao)
            }
        })
    }

    const cartoesResposta = document.querySelectorAll(".cartao-resposta")
    cartoesResposta.forEach(cartao => {
        cartao.addEventListener("click", (e) => {
            e.preventDefault()
            const id = cartao.firstChild.nextElementSibling.childNodes[1].children[0].innerText
            window.location.href = `./pages/ver-cartao.html?id=${id}`
        })
    })
}

function filtroTag(cartao){
    mostrarCartao(cartao.id, cartao.pergunta, cartao.tag)
}

function filtroTodos(cartoes){
    cartoes.forEach(cartao => {
        mostrarCartao(cartao.id, cartao.pergunta, cartao.tag)
    })
}