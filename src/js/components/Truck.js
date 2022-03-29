import TruckCell from "./TruckCell.js";
import CargoType from '../enums/CargoType.js';

class Truck extends HTMLElement {
    width;
    height;
    interval;
    cells;
    cargoType;
    color;

    constructor(width, height, interval, cargoType) {
        super();
        this.width = width;
        this.height = height;
        this.interval = interval;
        this.cargoType = CargoType.GetCargoTypeByNumber(cargoType);
        this.color = CargoType.GetColorByCargoType(cargoType);

        console.log(cargoType);
        this.init();
    }

    init() {
        this.cells = new Array();

        for (let y = 0; y < this.height; y++) {
            this.cells[y] = new Array(this.width);
        }
    }

    create() {
        let image = document.createElement("div");
        image.classList.add("truck-image")
        let truck = document.createElement("table");
        truck.classList.add("truck");

        for (let y = 0; y < this.height; y++) {
            let tr = truck.insertRow(y);

            for (let x = 0; x < this.width; x++) {
                let truckCell = new TruckCell(x, y, this);
                let td = tr.insertCell(x);
                td.appendChild(truckCell);
                this.cells[y][x] = truckCell;
                td.setAttribute("style", "border: 2px solid " + this.color);
            }
        }

        this.appendChild(image);
        this.appendChild(truck);

        return this;
    }

    placeTetromino(x, y, tetromino) {
        console.log(tetromino);
    }
}

export default Truck;