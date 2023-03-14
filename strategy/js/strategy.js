// class SalesContext {
//     constructor(strategy) {

//         this.strategy = strategy;
//     }

//     calculate(amount) {
//         return this.strategy.calculate(amount);
//     }

//     setStrategy(strategy) {
//         this.strategy = strategy;
//     }
// }

// class RegularSale {

//     constructor(tax) {
//         this.tax = tax;
//     }

//     calculate(amount) {
//         return amount + (amount * this.tax);
//     }
// }

// class DiscountSale {

//     constructor(discount, tax) {
//         this.tax = tax;
//         this.discount = discount;
//     }

//     calculate(amount) {
//         return amount + (amount * this.tax) - this.discount;
//     }
// }

// class ForeingSale {

//     getChange() {
//         return 20
//     }
//     calculate(amount) {
//         return amount * this.getChange();
//     }
// }

// const regularSale = new RegularSale(0.12);
// const discountSale = new DiscountSale(5, 0.12);
// const foreignSale = new ForeingSale();

// const sale = new SalesContext(regularSale);



// console.log(sale.calculate(10));
// sale.setStrategy(discountSale);
// console.log(sale.calculate(10));
// sale.setStrategy(foreignSale);
// console.log(sale.calculate(10));

//Explicacion practica

class InfoContext {

    constructor(strategy, data, element) {
        this.data = data;
        this.element = element;
        this.setStrategy(strategy);
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }
    show() {
        this.strategy.show(this.data, this.element);
    }
}
const data = [{

    name: "Erdinger Pikantus",

    country: "Alemania",

    info: "Erdinger Pikantus es una cerveza de estilo weizenbock elaborada en la localidad bávara de Erding.",

    img: "https://dxjcdxuv6chk2.cloudfront.net/assets/biere/flascheglas/pikantus-2020-v2.png"

},

{

    name: "Corona",

    country: "México",

    info: "La cerveza Corona es una marca mundialmente conocida, distribuida a lo largo de más de 159 países en los cinco continentes.",

    img: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Corona-6Pack.JPG"

},

{

    name: "Delirium Tremens",

    country: "Bélgica",

    info: "Esta pale ale tiene una efervescencia fina con un toque un tanto picante. Al tomarse, calienta el paladar y deja un sabor fuerte y de un amargor seco.",

    img: "https://www.delirium.be/themes/custom/delirium/assets/img/beers/beer_delirium_tremens_bottle.png"

}];

class ListStrategy {
    show(data, element) {
        element.innerHTML = data.reduce((ac, beer) => {
            return ac + `<div class="object">
            <h2>${beer.name}</h2>
            <p>${beer.country}</p>
            </div>
            <hr>`

        }, "")
    }
}

class ListDetailedStrategy {
    show(data, element) {
        element.innerHTML = data.reduce((ac, beer) => {
            return ac + `<div>
            <h2>${beer.name}</h2>
            <p>${beer.country}</p>
            <p>${beer.info}</p>
            </div>
            <hr>`

        }, "")
    }
}

class ListImageStrategy {
    show(data, element) {
        element.innerHTML = data.reduce((ac, beer) => {
            return ac + `<div>
            <h2>${beer.name}</h2>
            <img width="10%" src=${beer.img} / >
            </div>
            <hr>`

        }, "")
    }
}
const info = new InfoContext(new ListStrategy, data, content);


const strategies = [
    new ListStrategy(),
    new ListDetailedStrategy(),
    new ListImageStrategy()
]

slcOption.addEventListener("change", (event) => {
    const op = event.target.value;
    info.setStrategy(strategies[op]);
    info.show();

})

