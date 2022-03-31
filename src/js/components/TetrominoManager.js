class TetrominoManager {
    static tetrominoArray = new Map();

    constructor() {}

    static GenerateKey() {
        return (new Date()).getTime() + "";
    }

    static GetTetrominoByKey(key) {
        return this.tetrominoArray.get(key);
    }

    static DeleteTetrominoByKey(key) {
        this.tetrominoArray.delete(key);
    }
}

export default TetrominoManager;