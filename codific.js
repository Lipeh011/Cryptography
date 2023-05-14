function copiarTexto(texto) {
  let input = document.createElement('input');
  input.setAttribute('value', texto);
  document.body.appendChild(input);
  input.select();
  document.execCommand('copy');
  document.body.removeChild(input);
  
  // exibe a mensagem personalizada
  var mensagemElement = document.getElementById('mensagem');
  mensagemElement.innerText = "Texto copiado";
  mensagemElement.style.display = "block";
  mensagemElement.style.transform = "translateY(0)";
  
  // esconde a mensagem após alguns segundos
  setTimeout(function() {
    mensagemElement.style.transform = "translateY(-100%)";
  }, 3000);
}

function criptografarTexto() {
  var textareaElement = document.getElementById('text');
  var texto = textareaElement.value.trim();

  if (texto === '') {
    alert('Por favor, insira algum texto para criptografar.');
    return;
  }

  var textoCriptografado = "";

  for (var i = 0; i < texto.length; i++) {
    var caractereCript = texto[i];
    
    if (caractereCript == "e") {
      textoCriptografado += "enter";
    }
    else if (caractereCript == "i") {
      textoCriptografado += "imea";
    }
    else if (caractereCript == "a") {
      textoCriptografado += "ai";
    }
    else if (caractereCript == "o") {
      textoCriptografado += "ober";
    }
    else if (caractereCript == "u") {
      textoCriptografado += "ufat";
    }
    else {
      textoCriptografado += caractereCript;
    }
  }

  var container = document.querySelector('.container');
  container.innerHTML = '<div class="resultado-criptografia"><p class="texto-criptografado">' + textoCriptografado + '</p></div> <button onclick = "copiarTexto(\'' + textoCriptografado + '\');" class="btn-copiar">Copiar</button> ';
}

  function descriptografarTexto(){
    var textareaElement = document.getElementById('text');
    var texto = textareaElement.value.trim();

    if (texto === '') {
      alert('Por favor, insira algum texto para criptografar.');
      return;
    }
  
    var texto = textareaElement.value;
    var textoDescriptografado = "";
  
    for (var i = 0; i < texto.length; i++) {
      var caractereDescript = texto[i];

         if (caractereDescript == "e" && texto[i + 1] == "n" && texto[i + 2] == "t" && texto[i + 3] == "e" && texto[i + 4] == "r") {
        textoDescriptografado += "e";
        i += 4; 
      } else if (caractereDescript == "i" && texto[i + 1] == "m" && texto[i + 2] == "e" && texto[i + 3] == "a") {
        textoDescriptografado += "i";
        i += 3;
      } else if (caractereDescript == "a" && texto[i + 1] == "i") {
        textoDescriptografado += "a";
        i += 1;
      } else if (caractereDescript == "o" && texto[i + 1] == "b" && texto[i + 2] == "e" && texto[i + 3] == "r") {
        textoDescriptografado += "o";
        i += 3;
      } else if (caractereDescript == "u" && texto[i + 1] == "f" && texto[i + 2] == "a" && texto[i + 3] == "t") {
        textoDescriptografado += "u";
        i += 3;
      } else {
        textoDescriptografado += caractereDescript;
      }

    } 
    
  var container = document.querySelector('.container');
  container.innerHTML = '<div class="resultado-criptografia"><p class="texto-criptografado">' + textoDescriptografado + '</p></div> </div> <button onclick = "copiarTexto(\'' + textoDescriptografado + '\');" class="btn-copiar">Copiar</button> ';
 
  }

  