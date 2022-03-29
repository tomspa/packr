import TruckCell from "./TruckCell.js";
import CargoType from '../enums/CargoType.js';
import TetrominoShape from "../enums/TetrominoShape.js";
import TetrominoManager from "./TetrominoManager.js";
import Tetromino from "./Tetromino.js";

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
        this.cargoType = cargoType;
        this.color = CargoType.GetColorByCargoType(cargoType);

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

    placeTetromino(placeX, placeY, tetrominoKey) {
        console.log(TetrominoManager.tetrominoArray.get(tetrominoKey).positions);
        console.log(this.cells);

        console.log(placeX, placeY);

        if (placeX - 2 < 0 || placeY + 3 > this.width) {
            //if the Z shape exceeds the trucks bounds
            return false;
        }

        //if the Z shape fits on the given X and Y
        // if (firstCell.isFilled || secondCell.isFilled || thirdCell.isFilled || fourthCell.isFilled) {
        //     return false;
        // }
        // console.log("true");
        return true;
    }
}

export default Truck;