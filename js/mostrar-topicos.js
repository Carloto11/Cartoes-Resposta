export default function mostrarTopicos(){
    const topicosContainer = document.querySelector("#topicos")
    const topicos = JSON.parse(localStorage.getItem("topicos")) || ["Todos"]
    topicos.forEach(element => {
        topicosContainer.innerHTML += `
        <li class="cartoes--filtro" id="cartoes--filtro"><input type="button" class="cartoes--filtro-botao" id="cartoes--filtro-botao" value="${element}"></li>
        `
    })
}
