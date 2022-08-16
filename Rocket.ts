import { Payload } from "./Payload";
import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[];
    astronauts: Astronaut[];
    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    sumMass (items: Payload[]): number{
        let we: number = 0;
        for (let i = 0; i<items.length; i++) {
         we += items[i].massKg;
    }
    return we;
    }

    currentMassKg(): number {
        return this.sumMass(this.cargoItems)+this.sumMass(this.astronauts);
    }

    canAdd(item: Payload): boolean {
       return (this.currentMassKg()+item.massKg <= this.totalCapacityKg)? true:false; 
    }

    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo) == true) {
            //adds cargo to this.cargoItems.
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    }

    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut) == true) {
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    }
}
