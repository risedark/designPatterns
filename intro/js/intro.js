//first order function
function sum(a, b) {
    return a + b;
}
let fsum = sum;
console.log(fsum(5, 8));
//superior order function
function operation(fn, a, b) {
    console.log("no entendi ni mierda");
    console.log(fn(a, b));
}
operation(sum, 15, 20);
//arrow function
operation((a, b) => a * b, 5, 6);
operation((a, b) => {
    const c = a * b
    return c * 2
}, 1, 3);
// foreach
const names = ["hector", "juan", "rodrigo", "ana"]
names.forEach((name) => console.log(name));
names.forEach((name) => console.log(name.toLocaleUpperCase()));
console.log(names);
names.sort();
console.log(names);
//map
const upperArray = names.map((name) => name.toLocaleUpperCase());
console.log(upperArray);
//reduce
const numbers = [5, 10, 2, 4, 9];
const total = numbers.reduce((ac, number) => ac + (number * 2), 0);
console.log(total)
//programacion orientada a objetos
//clase
class Drink {
    constructor(name) {
        this.name = name;
    }
    info() {
        return "la bebida es: " + this.name;
    }
}
//funcional
function Drink2(name) {
    this.name = name;
    this.info = function () {
        return "la bebida es: " + this.name;
    }
}
const drink = new Drink("agua");
console.log(drink.info());
const drink2 = new Drink2("agua");
console.log(drink2.info());
// herencia
class Beer extends Drink {
    constructor(name, alcohol) {
        super(name)
        this.alcohol = alcohol
    }
    info() {

        return super.info() + " tiene " + this.alcohol + " de grado alcoholico";
    }
}
const beer = new Beer("erdinger", 8.5);
console.log(beer.info());