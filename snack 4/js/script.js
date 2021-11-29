let students = [
    { name: 'Marco', id: 213, grades: 78 },
    { name: 'Paola', id: 110, grades: 96 },
    { name: 'Andrea', id: 250, grades: 48 },
    { name: 'Gaia', id: 145, grades: 74 },
    { name: 'Luigi', id: 196, grades: 68 },
    { name: 'Piero', id: 102, grades: 50 },
    { name: 'Francesca', id: 120, grades: 84 },
  ];
//   leggere il "name" degli oggetti dell'array e stamparli in maiuscolo
// per renderli in maiuscolo nomevariabile.toUpperCase()
let perTarghe = []

students.forEach((element , index , array) => {
    
   
    const txt = element.name.toUpperCase();
    
    perTarghe.push(txt);
});
console.log(perTarghe)
// array con i voti sopra a 70

const voti = students.filter((element , index , array) => {
    return element.grades > 70
});
console.log(voti)
// array con i voti sopra a 70 e id maggiore a 120
const votiAndId = students.filter((element , index , array) => {
    
    return element.grades > 70 && element.id > 120
});
console.log(votiAndId)