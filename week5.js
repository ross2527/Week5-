class Menu {
    

    constructor() {

        this.drinkList = [];
        
    }
// removing the drinks
    removeDrink(drink) {

        this.drinkName = drink.getName()
        this.drinkIndex = -1

        for(let k = 0; k < this.drinkList.length; k++); {
            curDrink = this.drinkList[k].getName();
            if (curDrink = this.drinkName); {
                this.drinkIndex = k;
            }
        }
    
    
        if(this.drinkIndex = -1) {
            print("Drink was not apart of the list, no need to remove.") 

        } else {
            this.drinkList.splice(this.drinkIndex, 1);
            print("Removed" + this.drink + "from the menu")
        }
    }

    start() {
        let newPick = null
        while(newPick !== "QUIT") {
            newPick = prompt("Whatcha want? Options: ADD NEW DRINK, DELETE THE DRINK, QUIT")
            if(newPick === "MAKE NEW DRINK") {
                this.createDrink()
            }
            else if(newPick === "DELETE THE DRINK") {
                drinkToRemove = prompt("WHAT DRINK DO YOU WANT TO DELETE?")
                this.removeDrink(drinkToRemove)
            }
        }
    }

// viewing the drinks
    viewDrinks() {

        this.retString = "The drinks we have available are"

        for (let j = 0; j < this.drinkList.length; j++) {
            curDrink = this.drinkList[j];
            curIngredients = curDrinks.getIngredients()

            if (curIngredients == "") {

                if (j != (this.drinksList.length-1)) {

                this.retString += "The" + curDrink.getName() + ","
                }
                else {
                    this.retString += "The" + curDrink.getName() + "," }
            }
            else {
            
                if (j != (this.drinksList.length-1)) {

                this.retString += "The" + curDrink.getName() + ", which has the ingredients \n" + curDrink.getIngredients + ", \n"
                }
                else {
                    this.retString += "The" + curDrink.getName() + ", which has the ingredients \n" + curDrink.getIngredients + ". \n"

                }
            }
        }

    };
    createMenu() {
        const name =  prompt("What is the drinks name?")
        
        const ingredients = prompt("What are the drink ingredients? Leave blank if none")

        if (ingredients === "") {

            const newDrink = drink(name) 
            
        }
        else{
            const newDrink = drink(name, ingredients) 
        }
        this.drinkList.push(newDrink)
    }
};

class Drink {

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

const menu = new Menu()
menu.start()