import drink from 'C:/Users/14024/OneDrive/Week5/drink.js';

class Menu {
    
    constructor() {
    }
    constructor(name) {
        this.name = name;

        this.drinkList = [];
        
        drinkList.push(drink(name));
    }
// creating the drink
    addDrink(drink) {

        this.drinkList.push(drink)
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
}

