export default function apagarCartao(cartao){
    cartao.classList.add("escondido")
    const id = cartao.firstChild.nextElementSibling.childNodes[1].children[0].innerText
    const perguntasERespostas = JSON.parse(localStorage.getItem("perguntasERespostas")) || [];

    perguntasERespostas.forEach(element => {
        if(element.id == id){
            perguntasERespostas.splice(id, 1)
            window.location.href = "../index.html";
        }
    });
    reorganizarItens(perguntasERespostas)

    localStorage.setItem("perguntasERespostas", JSON.stringify(perguntasERespostas))
}

function reorganizarItens(cartoes){
    for (let index = 0; index < cartoes.length; index++) {
        const cartao = cartoes[index];
        cartao.id = index
    }
    return cartoes
}