import Tetromino from "./Tetromino.js";
import TetrominoShape from "../enums/TetrominoShape.js";
import CargoType from "../enums/CargoType.js";

class ConveyorBelt extends HTMLElement {
    addButton;

    constructor() {
        super();
        this.init();
        this.listeners();
    }

    init() {
        let belt = document.createElement("div");
        belt.classList.add("belt")

        let cog1 = document.createElement("div");
        cog1.classList.add("roller");
        cog1.classList.add("roller-start");

        let cog2 = document.createElement("div");
        cog2.classList.add("roller");
        cog2.classList.add("roller-end");

        this.addButton = document.createElement("button");
        this.addButton.classList.add("green-button");
        this.addButton.innerHTML = "Nieuw pakket";

        belt.appendChild(cog1);
        belt.appendChild(cog2);

        this.appendChild(this.addButton);
        this.appendChild(belt);
    }

    listeners() {
        this.addButton.addEventListener("click", () => {
            this.addTetromino();
        });
    }

    addTetromino() {
        this.addButton.disabled = true;

        setTimeout(() => {
            this.addButton.disabled = false;
        }, 2000);

        let tet = new Tetromino(TetrominoShape.GetRandomTetroShape(), CargoType.GetRandomCargoType());

        this.appendChild(tet.create());

    }
}

export default ConveyorBelt;