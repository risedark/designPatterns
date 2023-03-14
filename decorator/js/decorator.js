// component

class CoreComponent {
    constructor(name) {
        this.name = name;
    }
    getDetail() {
        return `${this.name}`;
    }
}

//decorator

class ProductDecorator {

    constructor(coreComponent) {
        this.coreComponent = coreComponent;
    }
    getDetail() {
        return this.coreComponent.getDetail();
    }
}

class commercialInfoProductDecorator extends ProductDecorator {

    constructor(coreComponent, brand, tradename) {
        super(coreComponent);
        this.brand = brand;
        this.tradename = tradename;

    }
    getDetail() {
        return `${this.brand} ${this.tradename} ` + super.getDetail()
    }
}

class StoreInfoProductDecorator extends ProductDecorator {

    constructor(coreComponent, price) {
        super(coreComponent);
        this.price = price;
    }

    getDetail() {
        return super.getDetail() + ` $${this.price}`
    }
}

class HTMLProductDecorator extends ProductDecorator {

    getDetail() {
        return `<h1>Informacion del Producto</h1>
        <p>
        ${super.getDetail()}
        </p>`
    }
}
//Ejecucion
//component
const coreComponent = new CoreComponent("Cerveza");
console.log(coreComponent.getDetail())
//decorator 1 
const commercialInfoProduct = new commercialInfoProductDecorator(coreComponent, "London Porter", "Fuller's");
console.log(commercialInfoProduct.getDetail());
//decorator 2
const storeInfoProductDecorator = new StoreInfoProductDecorator(coreComponent, "15.5");
console.log(storeInfoProductDecorator.getDetail());
//decorator 2 en 1
const product = new StoreInfoProductDecorator(commercialInfoProduct, "15.5");
console.log(product.getDetail());
//html decorator
const htmlDecorator = new HTMLProductDecorator(product);
myDiv.innerHTML = `${htmlDecorator.getDetail()}`;