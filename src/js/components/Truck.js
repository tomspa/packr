import TruckCell from "./TruckCell.js";
import CargoType from '../enums/CargoType.js';
import TetrominoShape from "../enums/TetrominoShape.js";

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

    placeTetromino(x, y, tetromino) {
        console.log(tetromino);
    }

    canPlace(x, y, tetrominoShape) {
        switch (tetrominoShape) {
            case TetrominoShape.Z:
                canPlaceZ(x, y);
            case TetrominoShape.T:
                canPlaceT(x, y);
            case TetrominoShape.I:
                canPlaceI(x, y);
            case TetrominoShape.L:
                canPlaceL(x, y);
            case TetrominoShape.O:
                canPlaceO(x, y);
        }
    }

    canPlaceZ(x, y) {
        if (x - 2 < 0 || y + 3 > this.width) {
            //if the Z shape exceeds the trucks bounds
            return false;
        }

        var firstCell = cells[x][y - 1];
        var secondCell = cells[x + 1][y - 1];
        var thirdCell = cells[x + 1][y];
        var fourthCell = cells[x + 2][y];

        //if the Z shape fits on the given X and Y
        if (firstCell.isFilled || secondCell.isFilled || thirdCell.isFilled || fourthCell.isFilled) {
            return false;
        }
        console.log("true");
        return true;
    }
}

export default Truck;