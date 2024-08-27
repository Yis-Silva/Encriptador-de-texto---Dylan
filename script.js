const textarea = document.querySelector(".area_encriptador");
const mensaje = document.querySelector(".mensaje");
const botonCopiar = document.querySelector("boton_copiar");
const contMensaje = document.querySelector("cuadro_mensaje_contenido");

function botonEncrinptar(){
    const textoEncriptado = encripador(textarea.value)
    mensaje.value = textoEncriptado
    textarea.value = "";
    contMensaje.innerHTML = "";
}

function encripador(stringecriptado){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringecriptado = stringecriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){ 
        if(stringecriptado.includes(matrizCodigo[i][0])){
            stringecriptado = stringecriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }

    }
    return stringecriptado
}

function botonDesencriptar(){
    const textoEncriptado = desencripador(textarea.value)
    mensaje.value = textoEncriptado
    textarea.value = "";
    contMensaje.innerHTML = "";
}

function desencripador(stringDesecriptado){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringDesecriptado = stringDesecriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){ 
        if(stringDesecriptado.includes(matrizCodigo[i][1])){
            stringDesecriptado = stringDesecriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }

    }
    return stringDesecriptado
}



