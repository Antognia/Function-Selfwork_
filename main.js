// Selfwork Funzioni 4

let frase = `i topi non avevano nipoti`

function palindromo (stringa){
let noSpazi = stringa.replace(/\W/g, "").toLowerCase(); 
let parole = noSpazi.split('');
let contrario = parole.reverse();
let paroleUnite = contrario.join('');

return paroleUnite === noSpazi;

};

console.log(palindromo(frase));




/// Esercizio Array 1 ////

const numeri = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4];

function ordineDecrescente(num) {
    
    let crescente = num.sort();

    let decrescente = crescente.reverse();

console.log(decrescente);

}


ordineDecrescente(numeri);


