import Tetromino from './components/Tetromino.js';
import Hall from './components/Hall.js';
import HallManager from './components/HallManager.js';
import FormWindow from './components/Form.js';
import TetContainer from './components/TetContainer.js'
import Truck from './components/Truck.js';
import TruckCell from './components/TruckCell.js';
import ConveyorBelt from "./components/ConveyorBelt.js";
import WeatherApi from './components/WeatherApi.js';

function start() {
    customElements.define("hall-div", Hall);
    customElements.define("hall-manager", HallManager);
    customElements.define("tet-romino", Tetromino);
    customElements.define("truck-cell", TruckCell);
    customElements.define("tet-container", TetContainer);
    customElements.define("conveyor-belt", ConveyorBelt);
    customElements.define("weather-api", WeatherApi);
    customElements.define("form-window", FormWindow);
    customElements.define("x-truck", Truck);

    new FormWindow();

    // add new conveyor button
    let holder = document.getElementById("holder");
    document.getElementById("newConveyor").addEventListener("click", () => {
        holder.appendChild(new ConveyorBelt());
    })
}

start();