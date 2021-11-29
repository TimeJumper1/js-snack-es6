const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// numeri entro cui vogliamo gli elemetni dell'array da pushare nel nuovo
const min = parseInt(prompt('inscerisci un numero compreso fra 0 e 5'))
const max = parseInt(prompt('inscerisci un numero maggiore del precedente ma minore di 5 (incluso)'));
let newArray = []
// versione con il forEach
myArray.forEach((element , index , array) => {
    if ( index >= min  && index <= max ){
        
        newArray.push(element);
    }

});

console.log(newArray)
// versione con filter
const newArrayFilter = myArray.filter((element , index , array) => {
    if ( index >= min  && index <= max ){
        
        return element
    }
});
console.log(newArrayFilter)