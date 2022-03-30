import TruckCell from "./TruckCell.js";
import CargoType from '../enums/CargoType.js';
import TetrominoManager from "./TetrominoManager.js";

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
        let tet = TetrominoManager.tetrominoArray.get(tetrominoKey);

        if (tet.cargoType != this.cargoType) return;

        let truckPosX = placeX;
        let truckPosY = placeY;
        let yIncrease = 0;
        let fillPositions = new Array();

        for (let y = 3; y >= 0; y--) {
            for (let x = 0; x < 4; x++) {
                if (fillPositions.length == 4) break;

                if (tet.positions[y][x] == 1 && (truckPosY - yIncrease < 0 || truckPosX + x > this.width -1)) return;

                let truckCell = this.cells[truckPosY - yIncrease][truckPosX + x];

                if (tet.positions[y][x] == 1 && !truckCell.isFilled) {
                    fillPositions.push(truckCell)
                }
                else if (tet.positions[y][x] == 1){
                    return;
                }
            }
            yIncrease++;
        }

        fillPositions.forEach((cell) => {
            cell.isFilled = true;
            cell.fill(this.color);
        })
    }
}

export default Truck;