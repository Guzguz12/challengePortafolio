const formatoMatriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
const textArea = document.querySelector("[data-text]");
const mensaje = document.querySelector("[data-mensaje]");
const copia = document.querySelector("[data-copiar]");
copia.style.display = "none"

function validarTexto(){
    let textoEscrito = document.querySelector("[data-text]").value;
    //validar de que sea miniscula
    let validador = textoEscrito.match(/^[a-z]*$/);
    if(!validador || validador === 0) {
        alert("Solo se aceptan letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}


function btnEncriptar(){
    if(!validarTexto()) {
        const textoEncriptado = encriptar(textArea.value)
        mensaje.value = textoEncriptado
        mensaje.style.backgroundImage = "none";
        textArea.value = "";
        copia.style.display = "block"
    }
}

//Laves de encriptacion
// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`


function encriptar(textoEncriptar){
    textoEncriptar = textoEncriptar.toLowerCase()

    for(let i = 0; i < formatoMatriz.length; i++){
        if(textoEncriptar.includes(formatoMatriz[i][0])){
            textoEncriptar = textoEncriptar.replaceAll(formatoMatriz[i][0], formatoMatriz[i][1])
        }

    }
    return textoEncriptar
}



function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";  
}


function desencriptar(stringDesencriptada){
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < formatoMatriz.length; i++){
        if(stringDesencriptada.includes(formatoMatriz[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(formatoMatriz[i][1] , formatoMatriz[i][0])
        }
    }
    return stringDesencriptada
}


function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto copiado al portapapeles")
}



