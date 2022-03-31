import TruckCell from "./TruckCell.js";
import CargoType from '../enums/CargoType.js';
import TetrominoManager from "./TetrominoManager.js";

class Truck extends HTMLElement {
    width;
    height;
    interval;
    cells;
    cargoType;
    color;
    button;
    timer;
    radius;
    radiusTooltip;
    weatherApi;

    constructor(width, height, interval, cargoType, radius) {
        super();
        this.width = width;
        this.height = height;
        this.interval = interval;
        this.cargoType = cargoType;
        this.color = CargoType.GetColorByCargoType(cargoType);
        this.radius = radius;
        this.init();
    }

    init() {
        this.weatherApi = document.querySelector("weather-api");
        this.cells = new Array();

        for (let y = 0; y < this.height; y++) {
            this.cells[y] = new Array(this.width);
        }
    }

    create() {
        // radius to tooltip
        if (this.radius.length > 0) {
            this.radiusTooltip = document.createElement("div");
            this.radiusTooltip.classList.add("tooltip");

            for (let i = 0; i < this.radius.length; i++ ) {
                let toolElement = document.createElement("p");
                toolElement.innerHTML = this.radius[i];
                toolElement.classList.add("radius");
                toolElement.setAttribute("data-radius", this.radius[i]);
                this.radiusTooltip.appendChild(toolElement);
            }

            this.appendChild(this.radiusTooltip);
        }

        this.timer = document.createElement("h1");
        this.timer.classList.add("timer");
        this.button = document.createElement("button")
        this.button.innerHTML = "⯅";
        this.button.classList.add("drive-button");
        this.button.classList.add("blue-button");
        let image = document.createElement("div");
        image.classList.add("truck-image")
        let truck = document.createElement("table");
        truck.classList.add("truck");

        for (let y = 0; y < this.height; y++) {
            let tr = truck.insertRow(y);

            for (let x = 0; x < this.width; x++) {
                let truckCell = new TruckCell(x, y, this);
                let td = tr.insertCell(x);
                td.appendChild(truckCell);
                this.cells[y][x] = truckCell;
                td.setAttribute("style", "border: 2px solid " + this.color);
            }
        }

        this.appendChild(this.timer);
        this.appendChild(this.button);
        this.appendChild(image);
        this.appendChild(truck);

        this.listeners();
        return this;
    }

    placeTetromino(placeX, placeY, tetrominoKey) {
        let tet = TetrominoManager.tetrominoArray.get(tetrominoKey);

        if (tet.cargoType != this.cargoType) return;

        let truckPosX = placeX;
        let truckPosY = placeY;
        let yIncrease = 0;
        let fillPositions = new Array();

        for (let y = 3; y >= 0; y--) {
            for (let x = 0; x < 4; x++) {
                if (fillPositions.length == 4) break;

                if (tet.positions[y][x] == 1 && (truckPosY - yIncrease < 0 || truckPosX + x > this.width -1)) return;

                let truckCell = this.cells[truckPosY - yIncrease][truckPosX + x];

                if (tet.positions[y][x] == 1 && !truckCell.isFilled) {
                    fillPositions.push(truckCell)
                }
                else if (tet.positions[y][x] == 1){
                    return;
                }
            }
            yIncrease++;
        }

        fillPositions.forEach((cell) => {
            cell.isFilled = true;
            cell.fill(this.color);
        })
    }

    listeners() {
        this.button.onclick = () => {
            if (this.removeFromTooltip()) {
                this.driveAway();
            }
            else {
                this.fadeAway();
            }
        }
    }

    timerCount() {
        let countDownDate = new Date().getTime() + (this.interval * 1000);
        let x = setInterval(() => {
            let now = new Date().getTime();
            let distance = countDownDate - now;
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance <= 0) {
                clearInterval(x);
                this.timer.innerHTML = "returning";
                return;
            }
            this.timer.innerHTML = minutes + "m " + seconds + "s ";
        }, 200);
    }

    reset() {
        this.cells.forEach((cellArray) => {
            cellArray.forEach((cell) => {
                cell.isFilled = false;
                cell.fill("#000000");
            })
        })
    }

    removeFromTooltip() {
        if (this.weatherApi.lastCity == undefined) {
            this.weatherApi.alertFill();
            return;
        }

        let foundRadius = this.radius.find((radius) => {
            return radius == this.weatherApi.lastCity.toLowerCase();
        });

        if (!foundRadius) return false;

        this.radius = this.radius.filter((r) => { return r != foundRadius });
        let tooltipRadii = this.radiusTooltip.getElementsByClassName("radius");

        for (let i = 0; i < tooltipRadii.length; i++) {
            if (tooltipRadii[i].getAttribute("data-radius") == foundRadius) {
                tooltipRadii[i].style.display = "none";
            }
        }

        return true;
    }

    changeButton() {
        this.button.classList.remove("blue-button");
        this.button.classList.add("red-button");
        this.button.innerHTML = "&#10006;";
    }

    driveAway() {
        this.style.animation = "dive-away 4s ease-in forwards"
        this.button.style.display = "none";
        this.timerCount();

        setTimeout(() => {
            this.reset();
            this.style.animation = "dive-back 4s ease-out forwards";

            if (this.radius.length <= 0) {
                this.changeButton();
            }

            setTimeout(() => {
                this.button.style.display = "block";
            }, 4000);
        }, (this.interval * 1000));
    }

    fadeAway() {
        this.style.animation = "fadeOut 3s linear";

        setTimeout(() => {
            this.remove();
        }, 3000)
    }
}

export default Truck;