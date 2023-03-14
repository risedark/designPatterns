class Subject {

    constructor() {
        this.observers = []
    }

    suscribe(observer) {
        this.observers.push(observer)
    }
    unsuscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer)
    }
    notify(data) {
        this.observers.forEach(e => {
            e.refresh(data);
        })
    }
}

class ItemsSubject extends Subject {

    constructor() {
        super();

        this.data = [];
    }

    add(item) {
        this.data.push(item);
        this.notify(this.data);
    }

}