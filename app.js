const CryptoJS = require("crypto-js");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

const KEY = "HACKERS.MU";

readline.question(`Enter message: `, msg => {
  const cipherText = encryptTxt(msg, KEY);

  console.log(`KEY: ${KEY}`);
  console.log(`Plain Message: ${msg}`);
  console.log(`Encrypted Message: ${cipherText}`);

  readline.close();
});

function encryptTxt(plainTxt, key) {
  return CryptoJS.AES.encrypt(plainTxt, key).toString();
}
