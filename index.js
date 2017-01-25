const app = "I don't do much."

function Sandwich(bread, ingredients, cut) {
    this.bread = bread
    this.ingredients = ingredients
    this.cut = cut
    this.describe = function() {
        console.log(`Your ${this.name} includes: ${this.ingredients.join(', ')}. Yum!`)
    }
}

var pbj = new Sandwich("white", ["peanut butter", "jelly"], "triangles")
var blt = new Sandwich("white", ["bacon", "lettuce", "tomato"], "diagonal")


var salad = {
    ingredients: ["croutons", "romaine hearts", "steak", "parmesan", "caeser dressing"],
    name: "Steak Caesar"
}

var describeSalad = pbj.describe.bind(salad)
salad.describe = pbj.describe.bind(salad)

function Customer(name, tableNumber) {
    this.name = name
    this.tableNumber = tableNumber
}

var sally = new Customer("Sally", "4")
var visitSally = visitTable.bind(sally)
setTimeout(visitSally, 1000)

function visitTable() {
    console.log(`The server is visiting ${this.name} at table number ${this.tableNumber}`);
}

function deliverFood(customer, table) {
    console.log(`Delivering ${this.name} to ${customer} at table ${table}`);
}
