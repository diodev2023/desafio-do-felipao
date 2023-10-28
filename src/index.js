/*
# 1️⃣ Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de 
experiência (XP) de um herói, depois utilize uma estrutura 
de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 6.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"

*/

let nomeDoJogador = "Messi";
let xpDoJogador = 11000; 

let nivelDoJogador;

if (xpDoJogador < 1000) {
    nivelDoJogador = "Ferro";
} else if (xpDoJogador >= 1001 && xpDoJogador <= 2000) {
    nivelDoJogador = "Bronze";
} else if (xpDoJogador >= 2001 && xpDoJogador <= 5000) {
    nivelDoJogador = "Prata";
} else if (xpDoJogador >= 6001 && xpDoJogador <= 7000) {
    nivelDoJogador = "Ouro";
} else if (xpDoJogador >= 7001 && xpDoJogador <= 8000) {
    nivelDoJogador = "Platina";
} else if (xpDoJogador >= 8001 && xpDoJogador <= 9000) {
    nivelDoJogador = "Ascendente";
} else if (xpDoJogador >= 9001 && xpDoJogador <= 10000) {
    nivelDoJogador = "Imortal";
} else {
    nivelDoJogador = "Radiante";
}

// Exiba o resultado
console.log(nomeDoJogador + " possui " + xpDoJogador 
+ " de XP e é de nivel " + nivelDoJogador);
