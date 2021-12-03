let km = parseInt(prompt ('Quanti km da percorrere?'));
let utenteAnni = prompt ('Quanti anni hai?');
let prezzoBiglietto = 0.21 * km;
let scontoUnder18 =  (prezzoBiglietto * 20) / 100;
let scontoOver65 =  (prezzoBiglietto * 40) / 100;


if (utenteAnni >= 65){
    prezzo = (prezzoBiglietto - scontoOver65);
}else if (utenteAnni < 18){
    prezzo = (prezzoBiglietto - scontoUnder18);
}else{
    prezzo = (prezzoBiglietto);
}

let prezzoFinale = prezzo.toFixed(2);

document.getElementById('anni').innerHTML = utenteAnni
document.getElementById('kmpercorsi').innerHTML = km
document.getElementById('costo').innerHTML = prezzoFinale + "€"