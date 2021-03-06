class TetrominoShape {
    static Z = 0;
    static T = 1;
    static I = 2;
    static O = 3;
    static L = 4;

    static ZPositions =
        [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [1, 1, 0, 0]
        ];

    static TPositions =
        [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 1, 0, 0],
            [1, 1, 1, 0]
        ];

    static IPositions =
        [
            [1, 0, 0, 0],
            [1, 0, 0, 0],
            [1, 0, 0, 0],
            [1, 0, 0, 0]
        ];

    static LPositions =
        [
            [0, 0, 0, 0],
            [1, 0, 0, 0],
            [1, 0, 0, 0],
            [1, 1, 0, 0]
        ];

    static OPositions =
        [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [1, 1, 0, 0],
            [1, 1, 0, 0]
        ];

    static GetTetroShapeByNumber(number) {
        switch(number) {
            case 0:
                return TetrominoShape.Z;
            case 1:
                return TetrominoShape.T;
            case 2:
                return TetrominoShape.I;
            case 3:
                return TetrominoShape.L;
            case 4:
                return TetrominoShape.O;
        }
    }

    static GetPositionByType(type) {
        switch(type) {
            case TetrominoShape.Z:
                return this.ZPositions;
            case TetrominoShape.T:
                return this.TPositions;
            case TetrominoShape.I:
                return this.IPositions;
            case TetrominoShape.L:
                return this.LPositions;
            case TetrominoShape.O:
                return this.OPositions;
        }
    }

    static GetRandomTetroShape() {
        return this.GetTetroShapeByNumber(Math.floor(Math.random() * 5));
    }
}

export default TetrominoShape;