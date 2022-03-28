import Tetromino from './components/Tetromino.js';
import Hall from './components/Hall.js';
import FormWindow from './components/Form.js';
import CargoType from './enums/CargoType.js';
import Truck from './components/Truck.js';
import TruckCell from './components/TruckCell.js';
import ConveyorBelt from "./components/ConveyorBelt.js";

function start() {
    customElements.define("hall-div", Hall);
    customElements.define("tet-romino", Tetromino);
    customElements.define("truck-cell", TruckCell);
    customElements.define("conveyor-belt", ConveyorBelt);
    let modal = new FormWindow();

    let holder = document.getElementById("holder");
    let conveyor = new ConveyorBelt();
    let truck = new Truck(5, 10, 1, CargoType.Pallets);

    holder.appendChild(truck.create());
}

start();