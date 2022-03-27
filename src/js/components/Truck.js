import TruckCell from "./TruckCell.js";
import CargoType from '../enums/CargoType.js';

class Truck {
    width;
    height;
    interval;
    cells;
    cargoType;
    color;

    constructor(width, height, interval, cargoType) {
        this.width = width;
        this.height = height;
        this.interval = interval;
        this.cargoType = cargoType;
        this.init();
    }

    init() {
        this.color = CargoType.GetColorByCargoType(this.cargoType);
        this.cells = new Array();
        for (let y = 0; y < this.height; y++) {
            this.cells[y] = new Array(this.width);
        }
    }

    addActions(truck) {
        for (let y = 0; y < truck.rows.length; y++) {
            for (let x = 0; x < truck.rows[y].cells.length; x++) {
                truck.rows[y].cells[x].addEventListener("dragover", function(e) {
                    e.preventDefault();
                    //console.log(e.srcElement);
                    //console.log(e.target);
                    //console.log(e.toElement);
                    //console.log(e.path);
                    //console.log(e);

                    let tetromino = document.getElementsByClassName("dragging");
                    console.log(tetromino[0]);
                    //console.log("Row " + y + "\n" + "Col " + x);
                });
            }
        }
    }

    create() {
        let truck = document.createElement("table");
        truck.classList.add("truck");

        for (let y = 0; y < this.height; y++) {
            let tr = truck.insertRow(y);

            for (let x = 0; x < this.width; x++) {
                let TruckCell = document.createElement("truck-cell");
                let td = tr.insertCell(x);
                td.appendChild(TruckCell);
                this.cells[y][x] = TruckCell;
                td.setAttribute("style", "border: 2px solid " + this.color);
            }
        }
        this.addActions(truck);
        return truck;
    }
}

export default Truck;