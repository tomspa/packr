class Hall extends HTMLElement {
    trucks;
    hallManager;

    constructor(hallManager) {
        super();
        this.init();
        this.hallManager = hallManager;
    }

    init() {
        this.trucks = new Array(10);
    }

    addTruck(truck) {
        if (!this.trucks.contains(truck)) {
            this.trucks.add(truck);
            this.appendChild(truck);
        }
    }

    removeTruck(truck) {
        if (this.trucks.contains(truck)) {
            this.trucks.remove(truck);
            this.removeChild(truck);
        }
    }

    create() {
        let div = document.createElement("div");
        div.classList.add("hall-content");
        let hallInfo = document.createElement("div");
        hallInfo.classList.add("hall-info");
        hallInfo.innerHTML = "Hal " + (this.hallManager.halls.length + 1)

        div.appendChild(hallInfo);
        this.appendChild(div);

        return this;
    }
}

export default Hall;