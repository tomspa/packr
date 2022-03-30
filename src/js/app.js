import Tetromino from './components/Tetromino.js';
import Hall from './components/Hall.js';
import HallManager from './components/HallManager.js';
import FormWindow from './components/Form.js';
import TetContainer from './components/TetContainer.js'
import Truck from './components/Truck.js';
import TruckCell from './components/TruckCell.js';
import ConveyorBelt from "./components/ConveyorBelt.js";

function start() {
    customElements.define("hall-div", Hall);
    customElements.define("hall-manager", HallManager);
    customElements.define("tet-romino", Tetromino);
    customElements.define("truck-cell", TruckCell);
    customElements.define("tet-container", TetContainer);
    customElements.define("conveyor-belt", ConveyorBelt);
    customElements.define("form-window", FormWindow);
    customElements.define("x-truck", Truck);

    let modal = new FormWindow();
    //
    // let holder = document.getElementById("holder");
    // let truck = new Truck(5, 10, 1, CargoType.Pallets);
    // let truck2 = new Truck(5, 10, 1, CargoType.Cold);
    // let truck3 = new Truck(5, 10, 1, CargoType.General);
    // let truck4 = new Truck(5, 10, 1, CargoType.Quick);

    // holder.appendChild(truck.create());
    // holder.appendChild(truck2.create());
    // holder.appendChild(truck3.create());
    // holder.appendChild(truck4.create());
}

start();