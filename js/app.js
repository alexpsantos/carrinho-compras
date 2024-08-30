
let total;
limpar();

 function adicionar() {
    let produto = document.getElementById("produto").value;
    let quantidade = document.getElementById("quantidade").value;
    let nomeProduto = produto.split("-")[0];
    let valorProduto = produto.split("R$")[1];

    let subTotal = valorProduto * quantidade;

    let carrinho = document.getElementById("lista-produtos");
    
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R${subTotal}</span>
  </section>`;

total = total + subTotal;

let campoTotal = document.getElementById("valor-total");
campoTotal.textContent="R$"+total

document.getElementById("quantidade").value =0;
    
 
 }



 function limpar() {
    total = 0;
    document.getElementById("lista-produtos").innerHTML = "";
    document.getElementById("valor-total").innerHTML = "R$0";
 }