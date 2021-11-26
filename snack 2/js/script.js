// array oggetti squadre di calcio
const soccerTeam = [
    {
        name: 'roma',
        pointScored: 0,
        foulsGotten: 0

    },
    {
        name: 'milan',
        pointScored: 0,
        foulsGotten: 0

    },
    {
        name: 'lazio',
        pointScored: 0,
        foulsGotten: 0

    },
    {
        name: 'juve',
        pointScored: 0,
        foulsGotten: 0

    },
    {
        name: 'atlanta',
        pointScored: 0,
        foulsGotten: 0

    },
    {
        name: 'cagliari',
        pointScored: 0,
        foulsGotten: 0

    },
    {
        name: 'sassuolo',
        pointScored: 0,
        foulsGotten: 0

    }
];
// nuovo array
let newArray = []
// mettere numeri generati randomicamente in [pointScored] & in [foulsGotten]
// ciclo per prendere ogni singolo oggetto
for ( let i = 0; i < soccerTeam.length; i++){
    const thisTeam = soccerTeam[i];
    // popolare [pointScored] e [foulsGotten] con numeri "sicuramente presi in modo affidabile da un sito calcistico"
    const scoredPoint = getRndInteger(0 ,5);
    const fouls = getRndInteger(0 ,16);
    thisTeam.pointScored = scoredPoint;
    thisTeam.foulsGotten = fouls;
    // creazione nuovo array con solo nomi e falli subiti
    // da thsTeam prendo solamente gli elementi name  e foulsGotten
    const {name , foulsGotten} = thisTeam;
    // creo l'oggetto che abbia solo name e foulsGotten (viene già popolato)
    const copyTeam = {
        name,
        foulsGotten
    };
    // metto il nuovo oggetto nell'array di oggetti
    newArray.push(copyTeam)
}
console.log(soccerTeam)



console.log(newArray)











// funzioni
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}