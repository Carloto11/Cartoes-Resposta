export default function redirecionarCriarTopico(){
    const criarTopico = document.querySelector("#adicionar")
    criarTopico.addEventListener("click", (e) => {
        e.preventDefault()
        window.location.href = "./criar-topico.html";
    })
}