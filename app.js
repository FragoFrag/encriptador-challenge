//declaración de variables
const userTxt = document.getElementById("txt-in") ;//Campo input del usuario.
const encryptBtn = document.querySelector(".encrypt-btn") ;//Botón de encriptado.
const decryptBtn = document.querySelector(".decrypt-btn") ;//Botón de desencriptado.
const traduction = document.getElementById("result-txt") ;//Texto resultante del encriptado/desencriptado
const doll = document.querySelector("#doll-box") ;//Imagen del muñeco
const noMsgTxt = document.querySelector(".default-txt") ;//Texto  por defecto que se muestra al cargar la página y cuando no hay mensaje
const clipBoardBtn = document.getElementById("copy-btn") ;//Botón de copiado

//listener para habilitar o deshabilitar los botones y otros elementos:
userTxt.addEventListener("input", function () {
    if (userTxt.value === "" ) { //Se establece la condición, si el campo de texto está vacío:
        //Los botones se deshabilitan, para evitar desencriptar espacio vacío.
        decryptBtn.setAttribute("disabled" , "true" ) ;
        clipBoardBtn.setAttribute("hidden" , "true" ) ;
        //Se vacía y esconde el texto resultante hasta que el usuario escriba algo.
        traduction.textContent = "" ;
        traduction.setAttribute("hidden" , "true" ) ;
        //El muñeco y el texto de mensaje no encontrado son visibles.
        doll.removeAttribute("hidden") ;
        noMsgTxt.removeAttribute("hidden") ;
        }else{ //Una vez el usuario ha escrito algo:
            //Los botones de encriptado/desencriptado vuelven a estar activos.
            encryptBtn.removeAttribute("disabled") ;
            decryptBtn.removeAttribute("disabled") ;
        }
    })

//funcion de encriptado:
    function encrypt() {
        //Obtenemos el valor del campo de texto del usuario.
        let str = userTxt.value ;
        //Usando el método replace (), reemplazamos todos los caracteres por sus equivalentes cifrados.
        let encryptE = str.replace(/e/g , "enter") ;
        let encryptI = encryptE.replace(/i/g , "imes") ;
        let encryptA = encryptI.replace(/a/g , "ai") ;
        let encryptO = encryptA.replace(/o/g , "ober") ;
        let encryptU = encryptO.replace(/u/g , "ufat") ;
        //Mostramos  el resultado en el cuadro de texto correspondiente.
        traduction.textContent = encryptU ;
        traduction.removeAttribute("hidden") ;
        // Habilitamos el botón de copiado.
        clipBoardBtn.removeAttribute("hidden") ;
        //Escondemos la imagen del muñeco y el texto de mensaje no encontrado.
        doll.setAttribute("hidden" , "true" ) ;
        noMsgTxt.setAttribute("hidden","true") ;
    }


//funcion de desencriptado:
function decrypt() {
    //Obtenemos el valor del campo de texto del usuario.
    let str = userTxt.value ;
    //Usando el método replace (), reemplazamos todas las subcadenas cifradas por su caracter correspondiente.
    let traductA = str.replace(/ai/g , "a") ;
    let traductE = traductA.replace(/enter/g , "e") ;
    let traductI = traductE.replace(/imes/g , "i") ;
    let traductO = traductI.replace(/ober/g , "o") ;
    let traductU = traductO.replace(/ufat/g , "u") ;
    //Mostramos  el resultado en el cuadro de texto correspondiente.
    traduction.textContent = traductU ;
    traduction.removeAttribute("hidden") ;
    // Habilitamos el botón de copiado.
    clipBoardBtn.removeAttribute("hidden") ;
     //Escondemos la imagen del muñeco y el texto de mensaje no encontrado.
    doll.setAttribute("hidden","true") ;
    noMsgTxt.setAttribute("hidden","true") ;
}

//funcion de copiado
function copiar() {
    //Obtenemos el valor del texto resultante y lo guardamos en portapapeles.
    navigator.clipboard.writeText(traduction.textContent) ;
}