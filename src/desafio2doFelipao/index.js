/*
# 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
*/
function calcularXP(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let XP = "";

    if (vitorias < 10) {
        XP  = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        XP  = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        XP  = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        XP  = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        XP  = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        XP  = "Lendário";
    } else {
        XP  = "Imortal";
    }

    console.log(`O Messi tem um saldo de ${saldoVitorias} vitorias e está no XP ${XP}`);
}

const vitorias = 234;
const derrotas = 56;
calcularXP(vitorias, derrotas);
