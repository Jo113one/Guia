var meuFundo = document.getElementById("ModoEscuro");
var meuTitulo = document.getElementById("Titulo");
var meuCartao = document.getElementById("cartaoEscuro");
let CliqueEmMim = document.getElementById("simples");

let oModoEstaClaro = true;

if (CliqueEmMim) {
  CliqueEmMim.onclick = trocaClasse;
}

function trocaClasse() {
    if (oModoEstaClaro) {
        console.log("Fundo Escuro e Título Escuro");
        
        meuFundo.classList.add("FundoEscuro");
        meuFundo.classList.remove("FundoClaro");
        
        meuTitulo.classList.add("TituloEscuro");
        meuTitulo.classList.remove("TituloClaro");
    } 
    
    else {
        console.log("Mudando para Fundo Escuro, Título Escuro cartao Escuro");
        
        meuFundo.classList.add("FundoClaro");
        meuFundo.classList.remove("FundoEscuro");
        
        meuTitulo.classList.remove("TituloEscuro");
        meuTitulo.classList.add("TituloClaro");
    }

    oModoEstaClaro = !oModoEstaClaro;

}