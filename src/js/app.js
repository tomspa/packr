import Tetromino from './components/Tetromino.js';
import Hall from './components/Hall.js';
import HallManager from './components/HallManager.js';
import FormWindow from './components/Form.js';
import CargoType from './enums/CargoType.js';
import Truck from './components/Truck.js';
import TruckCell from './components/TruckCell.js';
import ConveyorBelt from "./components/ConveyorBelt.js";
import WeatherApi from './components/WeatherApi.js';

function start() {
    customElements.define("hall-div", Hall);
    customElements.define("hall-manager", HallManager);
    customElements.define("tet-romino", Tetromino);
    customElements.define("truck-cell", TruckCell);
    customElements.define("conveyor-belt", ConveyorBelt);
    customElements.define("weather-api", WeatherApi);

    let modal = new FormWindow();
    let btn = document.getElementById("open-modal");
    btn.onclick = function() {
        modal.toggleDisplay();
    }
    let hall = new Hall();

    let holder = document.getElementById("holder");
    let truck = new Truck(5, 10, 1, CargoType.Pallets);
    let truck2 = new Truck(5, 10, 1, CargoType.Cold);
    let truck3 = new Truck(5, 10, 1, CargoType.General);
    let truck4 = new Truck(5, 10, 1, CargoType.Quick);

    hall.appendChild(truck.create());
    hall.appendChild(truck2.create());
    hall.appendChild(truck3.create());
    hall.appendChild(truck4.create());
    holder.appendChild(hall);
}

start();