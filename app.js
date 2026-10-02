var meuFundo = document.getElementById("ModoEscuro");
var meuTitulo = document.getElementById("Titulo");
let CliqueEmMim = document.getElementById("simples");

let oFundoEstaClaro = false;

let oTituloEstaClaro = false

if (CliqueEmMim) {
  CliqueEmMim.onclick = trocaClasse;
}

function trocaClasse() {
    if (oFundoEstaClaro && oTituloEstaClaro) {
        console.log("Fundo Escuro e Título Escuro");
        
        meuFundo.classList.add("FundoEscuro");
        meuFundo.classList.remove("FundoClaro");
        
        meuTitulo.classList.add("TituloEscuro");
        meuTitulo.classList.remove("TituloClaro");
        
    } else {
        console.log("Mudando para Fundo Escuro e Título Escuro");
        
        meuFundo.classList.add("FundoClaro");
        meuFundo.classList.remove("FundoEscuro");
        
        meuTitulo.classList.remove("TituloEscuro");
        meuTitulo.classList.add("TituloClaro");
    }

    oFundoEstaClaro = !oFundoEstaClaro;
    oTituloEstaClaro = !oTituloEstaClaro;
}