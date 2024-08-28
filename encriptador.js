const d = document;
const textArea = d.querySelector(".form_input");
const imagenMuneco = d.querySelector(".result_img");
const resultadoTitulo = d.querySelector(".resul_title");
const resultadoTexto = d.querySelector(".result_text");
const botonEncriptar = d.querySelector(".form_btn");
const botonDesencriptar = d.querySelector(".form_btn-secundary");
const botonCopiar = d.querySelector(".result_btn");

const llaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "over"],
    ["u", "ufat"],
];

function encriptarMensaje(mensaje) {
    let mensajeEncriptado = "";
    for (let i = 0; i < mensaje.length; i++) {
        let letra = mensaje[i];
        let encriptada = letra;
        for (let j = 0; j < llaves.length; j++) {
            if (letra === llaves[j][0]) {
                encriptada = llaves[j][1];
                break;
            }
        }
        mensajeEncriptado += encriptada;
    }
    return mensajeEncriptado;
}

function desencriptarMensaje(mensaje) {
    let mensajeDesencriptado = mensaje;
    for (let i = 0; i < llaves.length; i++) {
        let regex = new RegExp(llaves[i][1], 'g');
        mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0]);
    }
    return mensajeDesencriptado;
}

textArea.addEventListener("input", (event) => {
    if (textArea.value.trim() !== "") {
        imagenMuneco.style.display = "none";
        resultadoTitulo.style.display = "none";
        resultadoTexto.textContent = "";
    } else {
        // Si el textarea está vacío, vuelve a mostrar el mensaje original
        resultadoTitulo.style.display = "block";
        resultadoTitulo.textContent = "Ningún mensaje fue encontrado";
        resultadoTexto.textContent = "Ingresa el texto que desees encriptar o desencriptar.";
        botonCopiar.classList.add("hidden");
        imagenMuneco.style.display = "block";
    }
});

botonEncriptar.addEventListener("click", (event) => {
    event.preventDefault();
    let mensaje = textArea.value.toLowerCase().trim();
    if (mensaje === "") return;  // No hacer nada si el texto está vacío

    let mensajeEncriptado = encriptarMensaje(mensaje);
    resultadoTexto.textContent = mensajeEncriptado;
    botonCopiar.classList.remove("hidden");
    resultadoTitulo.textContent = "El resultado es:";
    resultadoTitulo.style.display = "block";  // Asegúrate de que el título esté visible
});

botonDesencriptar.addEventListener("click", (event) => {
    event.preventDefault();
    let mensaje = textArea.value.toLowerCase().trim();
    if (mensaje === "") return;  // No hacer nada si el texto está vacío

    let mensajeDesencriptado = desencriptarMensaje(mensaje);
    resultadoTexto.textContent = mensajeDesencriptado;
    resultadoTitulo.textContent = "El resultado es:";
    resultadoTitulo.style.display = "block";  // Asegúrate de que el título esté visible
});

botonCopiar.addEventListener("click", () => {
    navigator.clipboard.writeText(resultadoTexto.textContent).then(() => {
        alert("Texto copiado al portapapeles!");
    });
});
