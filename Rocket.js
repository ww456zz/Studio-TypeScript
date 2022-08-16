"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var we = 0;
        for (var i = 0; i < items.length; i++) {
            we += items[i].massKg;
        }
        return we;
    };
    Rocket.prototype.currentMassKg = function () {
        var astro = 0;
        for (var i = 0; i < this.astronauts.length; i++) {
            astro += this.sumMass(this.astronauts[i][0].massKg);
        }
        var cargo = 0;
        for (var y = 0; y < this.cargoItems.length; y++) {
            cargo += this.sumMass(this.cargoItems[y][0].massKg);
        }
        return astro + cargo;
    };
    Rocket.prototype.canAdd = function (item) {
        return (this.currentMassKg() + item.massKg <= this.totalCapacityKg)? true : false;
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo) == true) {
            //adds cargo to this.cargoItems.
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut) == true) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
