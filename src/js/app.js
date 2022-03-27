import Tetromino from './components/Tetromino.js';
import TetrominoShape from './enums/TetrominoShape.js';
import CargoType from './enums/CargoType.js';

function start() {
    let holder = document.getElementById("holder");
    let tet = new Tetromino(TetrominoShape.Z, "ueceucjec", CargoType.Cold);
    let tet1 = new Tetromino(TetrominoShape.L, "ueceucjec", CargoType.Fragile);
    let tet2 = new Tetromino(TetrominoShape.T, "ueceucjec", CargoType.Quick);
    let tet3 = new Tetromino(TetrominoShape.O, "ueceucjec", CargoType.Pallets);
    let tet4 = new Tetromino(TetrominoShape.I, "ueceucjec", CargoType.General);

    holder.appendChild(tet.create());
    holder.appendChild(tet1.create());
    holder.appendChild(tet2.create());
    holder.appendChild(tet3.create());
    holder.appendChild(tet4.create());
}

start();