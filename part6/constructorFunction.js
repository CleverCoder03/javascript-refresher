function Animal (species) {
    this.species = species
}

Animal.prototype.sound = function (sound) {
    this.sound = sound
    return `${this.species} makes sound of ${this.sound}`
}

let dog = new Animal("Dog")
console.log(dog.sound("bark"))

let lion = new Animal("Lion")
console.log(lion.sound("roar"))


function Drink (drink) {
    if(!new.target) {
        throw new Error(`You must call drink with "new" keyword`)
    }
    this.drink = drink
}

Drink.prototype.abv = function (perc) {
    this.perc = perc
    return `Name: ${this.drink} and has abv of ${this.perc}`
}

let vodaka = new Drink("magic")
console.log(vodaka.abv(42))