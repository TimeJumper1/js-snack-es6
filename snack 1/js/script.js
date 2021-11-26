// array di oggetti bicicletta
const bikes =[
    {
        name: 'rossella',
        pesoKg: 10
    },
    {
        name: 'graziella',
        pesoKg: 12
    },
    {
        name: 'fausto coppi',
        pesoKg: 5
    },
    {
        name: 'bmx',
        pesoKg: 3
    },
    {
        name: 'corsa',
        pesoKg: 7
    },
    {
        name: 'discount',
        pesoKg: 15
    },
    
];
console.log(bikes);
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal nel DOM
// metto come primo elemento il primo oggetto dell'array
let lightestBike = bikes[0]
// ciclo per trovare la bici più leggera
for( let i = 0; i < bikes.length; i++){
    // mette ogni singolo oggetto in una nuova variabile 
    const thisBike = bikes[i]
    if(thisBike.pesoKg < lightestBike.pesoKg ){
        lightestBike = thisBike
    }
}
console.log(lightestBike)

const {name , pesoKg} = lightestBike;
// stampo a schermo la bici più leggera
const bikeText =`
    <h2>la bici più leggera è: ${name} con un peso di ${pesoKg}Kg</h2>
`;

const bikeContainer = document.getElementById('bike-container');
bikeContainer.innerHTML = bikeText;