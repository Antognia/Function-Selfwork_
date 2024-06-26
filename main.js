// Selfwork Funzioni 4

let frase = `i topi non avevano nipoti`

function palindromo (stringa){
let noSpazi = stringa.replace(/\W/g, "")  
let parole = noSpazi.split('');
let contrario = parole.reverse();
let paroleUnite = contrario.join('');

return paroleUnite === noSpazi;

};

console.log(palindromo(frase));


