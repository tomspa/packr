import Tetromino from "./Tetromino.js";
import TetrominoShape from "../enums/TetrominoShape.js";
import CargoType from "../enums/CargoType.js";
import TetContainer from "./TetContainer.js";

class ConveyorBelt extends HTMLElement {
    addButton;
    tetContainer;

    constructor() {
        super();
        this.init();
        this.listeners();
        this.createContainer();
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
            if (this.tetContainer.amountOfTetrominos >= 10) {
                this.addButton.disabled = true;
            }
            this.tetContainer.addTet();
            this.addTetromino();
        });
    }

    addTetromino() {
        this.addButton.disabled = true;

        setTimeout(() => {
            if (this.tetContainer.amountOfTetrominos < 10) {
                this.addButton.disabled = false;
            }
        }, 3000);

        let tet = new Tetromino(TetrominoShape.GetRandomTetroShape(), CargoType.GetRandomCargoType());


        tet.addEventListener("animationend", () => {
            this.tetContainer.appendChild(tet);
            tet.style.animation = "none";
            tet.style.position = "static";
        });

        this.appendChild(tet.create());
    }

    createContainer() {
        this.tetContainer = new TetContainer();
        this.appendChild(this.tetContainer);
    }
}

export default ConveyorBelt;