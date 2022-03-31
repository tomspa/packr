class TetContainer extends HTMLElement {
    amountOfTetrominos;

    constructor() {
        super();
        this.init();
    }

    init() {
        this.amountOfTetrominos = 0;
        this.classList.add("tet-container");
    }

    addTet() {
        this.amountOfTetrominos++;
    }
}

export default TetContainer;