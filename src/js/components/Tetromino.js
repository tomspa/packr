import TetrominoShape from "../enums/TetrominoShape.js";
import CargoType from "../enums/CargoType.js";

class Tetromino {
    shape;
    cargoType;
    positions;
    color;

    constructor(shape, cType) {
        this.shape = shape;
        this.cargoType = cType;
        this.init();
    }

    init() {
        this.positions = TetrominoShape.GetPositionByType(this.shape);
        this.color = CargoType.GetColorByCargoType(this.cargoType);
    }

    create() {
        let tetromino = document.createElement("table");
        tetromino.draggable = true;
        tetromino.classList.add("tetromino");

        for (let y = 0; y < this.positions.length; y++) {
            let tr = tetromino.insertRow(y);

            for (let x = 0; x < this.positions[y].length; x++) {
                let td = tr.insertCell();

                if (this.positions[y][x] == 1) {
                    td.classList.add("filled");
                    td.setAttribute("style", "background-color: " + this.color);
                }
            }
        }
        tetromino.addEventListener("dragstart", function() {
            tetromino.classList.add("dragging");
        });
        tetromino.addEventListener("dragend", function() {
            tetromino.classList.remove("dragging");
        });
        return tetromino;
    }
}

export default Tetromino;