import TetrominoShape from "../enums/TetrominoShape.js";
import Tetromino from "./Tetromino.js";
import TetrominoManager from "./TetrominoManager.js";
import CargoType from "../enums/CargoType.js";

class TruckCell extends HTMLElement {
    x;
    y;
    isFilled;
    filledColor;
    truck;

    constructor(x, y, truck) {
        super();
        this.x = x;
        this.y = y;
        this.isFilled = false;
        this.truck = truck;

        this.listeners();
    }

    listeners() {
        this.addEventListener("dragover", function(e) {
            e.preventDefault();
        });

        this.addEventListener("drop", (e) => {
            e.preventDefault();

            let tetrominoKey = e.dataTransfer.getData("tetrominoKey");
            this.truck.placeTetromino(this.x, this.y, tetrominoKey);

            let tet = TetrominoManager.GetTetrominoByKey(tetrominoKey);
            tet.conveyor.tetContainer.amountOfTetrominos--;
            tet.conveyor.addButton.disabled = false;
            TetrominoManager.DeleteTetrominoByKey(tetrominoKey);
            tet.remove();
        });
    }

    fill(color) {
        this.style.backgroundColor = color;
    }
}

export default TruckCell;