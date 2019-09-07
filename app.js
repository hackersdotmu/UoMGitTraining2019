const CryptoJS = require("crypto-js");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

const KEY = "HACKERS.MU";

readline.question(`Enter message: `, msg => {
  const cipherText = encryptTxt(msg, KEY);
  const decryptedText = decryptTxt(cipherText, KEY);

  console.log(`KEY: ${KEY}`);
  console.log(`Plain Message: ${msg}`);
  console.log(`Encrypted Message: ${cipherText}`);
  console.log(`Decrypted Message: ${decryptedText}`);
  console.log(`Valid: ${decryptedText === msg}`);

  readline.close();
});

function encryptTxt(plainTxt, key) {
  return CryptoJS.AES.encrypt(plainTxt, key).toString();
}

function decryptTxt(cipherText, key) {
  const bytes = CryptoJS.AES.decrypt(cipherText, key);
  const plainTxt = bytes.toString(CryptoJS.enc.Utf8);
  return plainTxt;
}
