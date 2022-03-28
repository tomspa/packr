class Hall extends HTMLElement {
    trucks;


    constructor() {
        super();
        this.init();
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
}

export default Hall;