import Tetromino from './components/Tetromino.js';
import TetrominoShape from './enums/TetrominoShape.js';
import CargoType from './enums/CargoType.js';
import Truck from './components/Truck.js';
import TruckCell from './components/TruckCell.js';

function start() {
    customElements.define("truck-cell", TruckCell);
    let holder = document.getElementById("holder");
    let tet = new Tetromino(TetrominoShape.Z, CargoType.Cold);
    let tet1 = new Tetromino(TetrominoShape.L, CargoType.Fragile);
    let tet2 = new Tetromino(TetrominoShape.T, CargoType.Quick);
    let tet3 = new Tetromino(TetrominoShape.O, CargoType.Pallets);
    let tet4 = new Tetromino(TetrominoShape.I, CargoType.General);

    let truck = new Truck(5, 10, 1, CargoType.Pallets);

    holder.appendChild(tet.create());
    holder.appendChild(tet1.create());
    holder.appendChild(tet2.create());
    holder.appendChild(tet3.create());
    holder.appendChild(tet4.create());
    holder.appendChild(truck.create());
}

start();