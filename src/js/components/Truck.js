import TruckCell from "./TruckCell.js";
import CargoType from '../enums/CargoType.js';

class Truck extends HTMLElement {
    width;
    height;
    interval;
    cells;
    cargoType;
    color;
    button;
    timer;

    constructor(width, height, interval, cargoType) {
        super();
        this.width = width;
        this.height = height;
        this.interval = interval;
        this.cargoType = CargoType.GetCargoTypeByNumber(cargoType);
        this.color = CargoType.GetColorByCargoType(cargoType);

        console.log(cargoType);
        this.init();
    }

    init() {
        this.cells = new Array();

        for (let y = 0; y < this.height; y++) {
            this.cells[y] = new Array(this.width);
        }
    }

    create() {
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

    listeners() {
        this.button.onclick = () => {
            this.style.animation = "dive-away 4s ease-in forwards"
            this.button.style.display = "none";
            this.timerCount();
            setTimeout(() => {
                this.style.animation = "dive-back 4s ease-out forwards"
                setTimeout(() => {
                    this.button.style.display = "block";
                }, 4000);
            }, (this.interval * 1000));
        }



    }

    timerCount() {
        let countDownDate = new Date().getTime() + (this.interval * 1000);
        let x = setInterval(() => {

            let now = new Date().getTime();

            let distance = countDownDate - now;

            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance <= 0) {
                clearInterval(x);
                return;
            }
            this.timer.innerHTML = minutes + "m " + seconds + "s ";
        }, 200);
    }

    placeTetromino(x, y, tetromino) {
        console.log(tetromino);
    }
}

export default Truck;