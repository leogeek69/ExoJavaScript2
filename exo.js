const tab = ["Pierre", "Feuille", "Ciseaux"];
let choix = Math.random();

if(choix < 0.33){
    console.log(tab[0]);
}else if(choix > 0.33){
    console.log(tab[1]);
}else if(choix > 0.66){
    console.log(tab[2]);
}