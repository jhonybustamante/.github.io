
  
 function encrypt() {
    // Obtener el texto ingresado por el usuario
    var text = document.getElementById("text").value;
  
    // Encriptar el texto 
    var encrypted = text.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
  
    // Mostrar el texto encriptado en el elemento textarea
    
    document.getElementById("result").value = encrypted;
  }
  
  function decrypt() {
    // Obtener el texto ingresado por el usuario
    var text = document.getElementById("text").value;
  
    // Desencriptar el texto 
    var decrypted = text.replace(/enter/g, 'e').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u').replace(/imes/g, 'i');
  
    // Mostrar el texto desencriptado en el elemento textarea
    document.getElementById("result").value = decrypted;
  }
  //obtener acciones realizadas 
  const otherInput = document.getElementById("text");
  const textarea = document.getElementById("result");
  const boton = document.getElementById("copiar");

  otherInput.addEventListener("input", function() {
    if (this.value) {
      textarea.style.visibility = "visible";
      boton.style.visibility = "visible";
    } else {
      textarea.style.visibility = "hidden";
      boton.style.visibility = "hidden";
    }
  });
  //funcion del boton copiar
  const resultado = document.getElementById("result");
  const btnCopy = document.getElementById("copiar");

  btnCopy.addEventListener("click", function() {
    resultado.select();
    document.execCommand("copy");
  });