let nomeHeroi = "N00B";
let nivelXP = 1000;
let resultado;

if(nivelXP <= 1000 ) {
  resultado = `O Herói de nome **${nomeHeroi}** está no nível **Ferro**`;
} else if (nivelXP > 1000 && nivelXP <= 2000){
  resultado = `O Herói de nome **${nomeHeroi}** está no nível **Bronze**`;
} else if (nivelXP > 2000 && nivelXP <= 5000) {
  resultado = `O Herói de nome **${nomeHeroi}** está no nível **Prata**`;
} else if (nivelXP > 5000 && nivelXP <= 7000) {
  resultado = `O Herói de nome **${nomeHeroi}** está no nível **Ouro**`;
} else if (nivelXP > 7000 && nivelXP <= 8000) {
  resultado = `O Herói de nome **${nomeHeroi}** está no nível **Platina**`;
} else if (nivelXP > 8000 && nivelXP <= 9000) {
  resultado = `O Herói de nome **${nomeHeroi}** está no nível **Ascendente**`;
} else if (nivelXP > 9000 && nivelXP <= 10000){
  resultado = `O Herói de nome **${nomeHeroi}** está no nível **Imortal**`;
} else if (nivelXP >= 10001) {
  resultado = `O Herói de nome **${nomeHeroi}** está no nível **Radiante**`;
}
  
console.log(resultado);

