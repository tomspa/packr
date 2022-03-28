import Hall from "./Hall";

class HallManager extends HTMLElement {
    halls;

    constructor() {
        super();
        init();
    }

    init() {
        this.halls = new Array();
    }

    addHall() {
        this.halls.push(new Hall().create());
    }
}

export default HallManager;