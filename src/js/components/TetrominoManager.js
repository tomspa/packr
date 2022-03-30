class TetrominoManager {
    static tetrominoArray = new Map();

    constructor() {
    }

    static GenerateKey() {
        return (new Date()).getTime() + "";
    }

    static GetTetrominoByKey(key) {
        this.tetrominoArray.get(key);
    }
}

export default TetrominoManager;