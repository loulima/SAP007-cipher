import cipher from './cipher.js';

document.getElementById('btnEncode').addEventListener("click", cifrar);
document.getElementById('btnDecode').addEventListener("click", decifrar);

document.getElementById('copy-encode-message').addEventListener("click", copy);

function copy(e){
  e.preventDefault();
  let copyText= document.getElementById('txtResult');
 copyText.select();
  navigator.clipboard.writeText(copyText.value);
  console.log(copyText.value );
}

function cifrar(e) {
  e.preventDefault();
  let text = document.getElementById("message").value.toUpperCase(); 
  let offset = Number(document.getElementById("offset").value); 
  document.getElementById("txtResult").value = cipher.encode(offset, text); 
}

function decifrar (e) {
  e.preventDefault();
  let text = document.getElementById("decode-message").value.toUpperCase();
  let offset = Number(document.getElementById("decode-offset").value);
  
      document.getElementById("decode-result").value=cipher.decode(offset, text);
    }
  
