function verCartao(){
    const id = obterValorParametro("id")
    const perguntasERespostas = JSON.parse(localStorage.getItem("perguntasERespostas"))
    const containerPerguntaEResposta = document.querySelector(".container--pergunta-resposta")

    perguntasERespostas.forEach(element => {
        if(element.id == id){
            containerPerguntaEResposta.innerHTML += `
            <div class="container--pergunta">
                <h3 class="pergunta-label">Pergunta:</h3>
                <h3 class="pergunta">${element.pergunta}</h3>
            </div>

            <div class="container--resposta">
                <h3 class="resposta-label">Resposta:</h3>
                <h3 class="resposta">${element.resposta}</h3>
            </div>
            `
        }
    });
}

function obterValorParametro(parametro) {
    const urlAtual = window.location.search;
    const urlParametros = new URLSearchParams(urlAtual);
    return urlParametros.get(parametro);
}

verCartao()