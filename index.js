import cipher from './cipher.js';

document.getElementById('btnEncode').addEventListener("click", cifrar);
document.getElementById('btnDecode').addEventListener("click", decifrar);

function cifrar(e) {
  e.preventDefault();
  let texto = document.getElementById("message").value.toUpperCase(); 
  let offset = Number(document.getElementById("offset").value); 
  document.getElementById("txtResult").value = cipher.encode(offset, texto); 
}

function decifrar (e) {
  e.preventDefault();
  let texto = document.getElementById("message").value.toUpperCase();
  let offset = Number(document.getElementById("offset").value);
  
      document.getElementById("txtResult").value=cipher.decode(offset, texto);
    }
  
