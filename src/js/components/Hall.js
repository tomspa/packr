import Truck from "./Truck.js";

class Hall extends HTMLElement {
    trucks;
    hallManager;
    createTruckButton;
    modal;
    hallContent;

    constructor(hallManager) {
        super();
        this.hallManager = hallManager;
        this.addTruck.bind(this);
        this.init();
        this.listeners();
    }

    init() {
        this.trucks = new Array(10);
        this.modal = document.getElementById("modal");
        this.createTruckButton = document.createElement("button");
    }

    addTruck(width, height, interval, type, radius) {
        console.log(width, height, interval, type, radius);
        if (this.trucks.length < 10) {
            let truck = new Truck(width, height, interval, type);
            this.trucks.push(truck);
            this.hallContent.appendChild(truck.create());
        }
    }

    removeTruck(truck) {
        if (this.trucks.find(() => truck)) {
            this.trucks.remove(truck);
            this.hallContent.removeChild(truck);
        }
    }

    listeners() {
        this.createTruckButton.onclick = () => {
            this.modal.openDisplay(this);
        }
    }

    create() {
        this.createTruckButton.classList.add("green-button");
        this.createTruckButton.classList.add("create-truck");
        this.createTruckButton.innerHTML = "Maak vrachtwagen";

        this.hallContent = document.createElement("div");
        this.hallContent.classList.add("hall-content");
        let hallInfo = document.createElement("div");
        hallInfo.classList.add("hall-info");
        hallInfo.innerHTML = "Hal " + (this.hallManager.halls.length + 1)

        this.hallContent.appendChild(this.createTruckButton);
        this.hallContent.appendChild(hallInfo);
        this.appendChild(this.hallContent);

        return this;
    }
}

export default Hall;