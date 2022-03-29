import TetrominoShape from "../enums/TetrominoShape.js";
import Tetromino from "./Tetromino.js";
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
        this.addEventListener("click", function() {
            this.truck.placeTetromino(this.x, this.y, new Tetromino(TetrominoShape.I, CargoType.General));
        });

        this.addEventListener("dragover", function(e) {
            e.preventDefault();

            let tetromino = document.getElementsByClassName("dragging");
            //console.log(tetromino[0].getShape());
        });

        this.addEventListener("drop", (e) => {
            e.preventDefault();
            //let tet = e.dataTransfer.getData("text/uri-list");

            let tetromino = document.getElementsByClassName("dragging");
            let tetShape = TetrominoShape.GetTetroShapeByNumber(tetromino[0].shape);
            let tetType = tetromino[0].cargoType;
            console.log(tetType);
            console.log(this.truck.cargoType);

            if (this.truck.cargoType == tetType) {
                console.log("first if")
                if (this.truck.canPlace(this.x, this.y, tetShape)) {
                    console.log("second if")
                }
            }
        });
    }
}

export default TruckCell;