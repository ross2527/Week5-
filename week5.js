class Dancer {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }
}

describe() {
    return ${this.name} plays ${this.position}.;
}

class Happy {
    constructor(name){
        this.name = name;
        this.dancers = []
    }
    addDancer(dancer) {
        if(dancer instanceof Dancer) {
            this.dancers.push(dancer);
        } else {
            throw new Error("You can only add an instance of Dancer. Argument is not a dancer: ${dancer}")
        }
    }
    
    describe() {
        return "${this.name} has ${this.dancers.length} dancers."; 
    }
}

class Menu {
    constructor() {
        this.teams = [];
        this.selectedTeam = null;
    }

    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                this.createTeam();
                    break;
                case '2':
                    this.viewTeam();
                    break;
                case '3':
                    this.deleteTeam();
                    break;
                case '4':
                    this.displayTeams();
                    break;        
                default:
                    selection = 0;                
            }
            selection = this.showMainMenuOptions();
        }

        alert('No thanks');
     }

     showMainMenuOptions() {
        return prompt('
        0. exit
        1. create new team 
        2. view team 
        3. delete team
        4. display all teams
        ')
     }

     
    }

