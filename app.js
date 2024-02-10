
const botaoCopiar = document.getElementById("botao-copiar");

function processarTexto(processarFuncao) {
    const receberTexto = document.getElementById("input-text").value.toLowerCase();
    const textoProcessado = processarFuncao(receberTexto);
    
    document.getElementById("output-text").value = textoProcessado;
    document.getElementById("input-text").value = "";
    mostrarBotaoCopiar();
}

function mudarTextoCriptografar() {
    processarTexto(criptografarTexto);
}

function mudarTextoDescriptografar() {
    processarTexto(descriptografarTexto);
}

function criptografarTexto(texto) {
   const textoParaCriptografar = 
   texto.replace(/e/i, "enter")
   .replace(/i/i, "imes")
   .replace(/a/i, "ai")
   .replace(/o/i, "orber")
   .replace(/u/i, "ufat")

   return textoParaCriptografar
}

function descriptografarTexto(texto) {
    const textoParaDescriptografar = 
    texto.replace(/enter/i, "e")
    .replace(/imes/i, "i")
    .replace(/ai/i, "a")
    .replace(/orber/i, "o")
    .replace(/ufat/i, "u")

    return textoParaDescriptografar;
}


function copiarTextoCriptografado(){
   document.getElementById("botao-copiar");
    navigator.clipboard.writeText(document.getElementById("output-text").value);
    document.getElementById("input-text").value = "";
    document.getElementById("output-text").value = "";
}


function mostrarBotaoCopiar() {    
    botaoCopiar.style.display = "block";
}


