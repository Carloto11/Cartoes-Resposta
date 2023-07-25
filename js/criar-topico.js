import mostrarTopicos from './mostrar-topicos.js';
mostrarTopicos()

const topicos = JSON.parse(localStorage.getItem("topicos")) || ["Todos"]
const containerTopicos = document.querySelector(".topicos--existentes")

function criarTopico(){
    const novoTopico = document.querySelector("#input-topico").value
    topicos.push(novoTopico)
    localStorage.setItem("topicos", JSON.stringify(topicos))
}

function verTopicos(){

    topicos.forEach(element => {
        if(element != "Todos"){
            containerTopicos.innerHTML += `
                <li class="topico"> 
                    ${element}
                    <i class="fa-solid fa-trash" id="lixeira" style="color: #d60000;"></i>
                </li>
                `
        }
        
    });

    const lixeiras = document.querySelectorAll("#lixeira")
    lixeiras.forEach(lixeira => {
        lixeira.addEventListener("click", (e) => {
            e.preventDefault()
            const topico = lixeira.parentElement.innerText.trim()
            apagarTopico(topico) 
        })
    })
}

function apagarTopico(topico){
    const index = topicos.indexOf(topico)
    topicos.splice(index, 1)
    localStorage.setItem("topicos", JSON.stringify(topicos))
    window.location.href = "../index.html";
}

const form = document.querySelector(".form")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    criarTopico()
    window.location.href = "../index.html";
})

verTopicos()