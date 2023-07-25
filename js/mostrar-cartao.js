export default function mostrarCartao(id, pergunta, tag){
    const containerCartoes = document.querySelector(".container--cartoes-resposta")

    containerCartoes.innerHTML += `
    <div class="cartao-resposta">
        <div> 
            <h2 class="cartao-reposta--titulo">${pergunta}<span class="cartao-resposta--id">${id}</span></h2>
        </div>
        
        <div class="container--acoes">
            <h3 class="cartao-resposta--tag">${tag}</h3>
            <i class="fa-solid fa-trash" id="lixeira" style="color: #d60000;"></i>
            <i class="fa-solid fa-pen-to-square" id="editar" style="color: #d6ba00;"></i>
        </div>
    </div>
    `
}