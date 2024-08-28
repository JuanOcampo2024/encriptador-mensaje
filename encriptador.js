const d = document;
const textArea = d.querySelector(".form_input");
const imagenMuneco = d.querySelector(".result_img");
const resultadoTitulo = d.querySelector(".result_title");
const resultadoTexto = d.querySelector(".result_text");
const botonEncriptar = d.querySelector(".form_btn");
const botonDesencriptar = d.querySelector(".form_btn-secundary");
const botonCopiar = d.querySelector(".result_btn")

const llaves = [
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","over"],
    ["u","ufat"],
];

function encriptarMensaje(mensaje){
    let mensajeEncriptado = "";
    for(let i = 0; i < mensaje.length; i++) {
        let letra = mensaje[i];
        let encriptada = letra;
        for(let j=0; j < llaves.length; j++){
            if(letra === llaves[j][0]) {
                encriptada = llaves [j][1];
                break;
            }
        }
        
        mensajeEncriptado += encriptada;
    }
    return mensajeEncriptado;
}


function desencriptarMensaje(mensaje){
    let mensajeDesencriptado = mensaje;
    for(let i = 0; i < llaves.length; i++) {
        let regex = new RegExp(llaves[i][1], 'g');
        mensajeDesencriptado = mensajeDesencriptado.replace(reges, llaves[i][0]);
    }
    return mensajeDesencriptado;
}

textArea.addEventListener("input", (Event) =>{
    imagenMuneco.style.display = "none";
    resultadoTitulo.textContent = "Capturando Mensaje."
    resultadoTexto.textContent = "";
 

})

botonEncriptar.addEventListener("click", (Event) => {
    Event.preventDefault();
    let mensaje = textArea.ariaValueMax.toLowerCase();
    let mensajeEncriptado = encriptarMensaje(mensaje);
    resultadoTexto.textContent= mensajeEncriptado;
    botonCopiar.classList.remove("hidenn");
    resultadoTitulo.textContent = "El resultado es:";
});

botonDesencriptar[1].addEventListener("click", (Event) =>{
    Event.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeDesencriptado = encriptarMensaje(mensaje);
    resultadoTexto.textContent = mensajeDesencriptado;
})