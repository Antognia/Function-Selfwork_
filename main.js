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

let crescente = numeri.sort((a,b) => a - b);
console.log(crescente);
    
let decrescente = numeri.sort( (a,b) => b - a);
console.log(decrescente);





    /// Esercizio Array 2 ////

    
const numbers = [3, 5, 10, 2, 8];

function calcolatore(N) {

    let somma = N.reduce((acc, cur) => acc + cur, 0);
  let media = somma / N.length;
let valoriMinori = N.filter((valore) => valore < media);

    console.log(media);
    console.log(valoriMinori);
    
}

calcolatore(numbers);

    
   

}


ordineDecrescente(numeri);


