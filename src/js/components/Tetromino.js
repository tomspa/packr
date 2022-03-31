import TetrominoShape from "../enums/TetrominoShape.js";
import CargoType from "../enums/CargoType.js";

class Tetromino extends HTMLElement {
    shape;
    cargoType;
    positions;
    color;
    key;
    conveyor;

    constructor(shape, cType, key, conveyor) {
        super();
        this.shape = shape;
        this.cargoType = cType;
        this.conveyor = conveyor;
        this.init();
        this.listeners();
        this.key = key;
    }

    init() {
        this.positions = TetrominoShape.GetPositionByType(this.shape);
        this.color = CargoType.GetColorByCargoType(this.cargoType);
    }

    listeners() {
        this.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("tetrominoKey", this.key);
        });
    }

    create() {
        let table = document.createElement("table");
        this.draggable = true;
        this.classList.add("tetromino");

        for (let y = 0; y < this.positions.length; y++) {
            let tr = table.insertRow(y);

            for (let x = 0; x < this.positions[y].length; x++) {
                let td = tr.insertCell();

                if (this.positions[y][x] == 1) {
                    td.classList.add("filled");
                    td.setAttribute("style", "background-color: " + this.color);
                }
            }
        }
        this.appendChild(table);
        return this;
    }
}

export default Tetromino;