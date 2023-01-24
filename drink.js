export class Drink {

    constructor(name) {
        this.name = name
    }

    constructor(name, ingredients) {
        this.name = name
        this.ingredients = ingredients
    }

    getName() {
        return this.name
    }

    getIngredients() {

        if(this.ingredients.length == 0) {
            print("No ingredients included.")
            return ""
        }

        this.retString = this.name + "has the ingredients:"


        for(let i = 0; i < this.ingredients.length; i++)

            this.reString += this.ingredients[i]

    
        return this.retString;
    }
}