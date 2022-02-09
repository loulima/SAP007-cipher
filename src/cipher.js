const cipher = {

  encode: (offset, texto) => { 
  if (Number(texto) || texto == "" || texto == null || offset == "" || offset == null) {
      throw new TypeError("ERRO:", "cipher.js", 4);
    }
    let textCipher = "";
    let letters = texto.length;

    for (let i = 0; i < letters; i++) {
      let asciiNum = texto.charCodeAt(i); 
      const codeAscii = 65;

      if (asciiNum >= 65 && asciiNum <= 90) {
        let encodeValue = ((asciiNum + codeAscii + offset) % 26) + codeAscii;
        textCipher = textCipher + String.fromCharCode(encodeValue); 
      } else {
        textCipher = textCipher + String.fromCharCode(asciiNum); 
      }
    }
    return textCipher;
  },

  decode: (offset, texto) => {
    if (Number(texto) || texto == "" || texto == null || offset == "" || offset == null) {
      throw new TypeError("ERRO:", "cipher.js", 4);
    }
    let textDecipher = "";
    let letters = texto.length;

    for (let i = 0; i < letters; i++) {
      let asciiNum = texto.charCodeAt(i);
      const codeAscii = 90;
      if (asciiNum <= 90 && asciiNum >= 65) {
        let decodeValue = ((asciiNum - codeAscii - offset) % 26) + codeAscii; 
        textDecipher = textDecipher + String.fromCharCode(decodeValue);
      } else {
        textDecipher = textDecipher + String.fromCharCode(asciiNum);
      }
    }

    return textDecipher;
  },
};

export default cipher;
