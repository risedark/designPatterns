class Singleton {

    static getInstance() {
        return Singleton.instance;
    }
    constructor() {
        console.log("entrando")
        this.random = Math.random();

        if (Singleton.instance) {
            console.log("ya existe");
            return Singleton.instance;

        }
        Singleton.instance = this;
        console.log("no existe");
    }
}
// const singleton1 = new Singleton();
// const singleton2 = new Singleton();
// const singleton3 = Singleton.getInstance();
// console.log(singleton1.random);
// console.log(singleton2.random);
// console.log(singleton3.random);
// console.log(singleton1 === singleton2);
// console.log(singleton3 === singleton2);

class WeekDays {
    daysEs = [
        "Lunes",
        "Martes",
        "Miercoles",
        "Jueves",
        "Viernes"
    ]
    daysEn = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
    ]
    constructor(lang) {
        this.lang = lang;

        if (WeekDays.instance) {
            return WeekDays.instance
        }
        WeekDays.instance = this;
    }

    getDays() {
        return this.lang === "es" ? this.daysEs : this.daysEn;
    }
}

const weekdays = new WeekDays("en")
const wekkdays2 = new WeekDays();

console.log(weekdays.getDays());
console.log(wekkdays2.getDays());