import Hall from "./Hall.js";

class HallManager extends HTMLElement {
    halls;
    buttonDiv;
    createHallBtn;
    currentHallIndex;
    hallHolder;

    constructor() {
        super();
        this.init();
        this.create();
        this.listeners();
    }

    init() {
        this.halls = new Array();
        this.buttonDiv = document.createElement("div");
        this.currentHallIndex = 0;
    }

    addHall() {
        if (this.halls.length < 8) {
            let changeIndex = this.halls.length;

            this.halls.push(new Hall().create());
            let btn = document.createElement("button");
            btn.classList.add("green-button");
            btn.innerHTML = "hall " + this.halls.length;

            btn.onclick = () => {
                this.changeHall(changeIndex)
            };

            this.buttonDiv.appendChild(btn);
            this.hallHolder.appendChild(new Hall());
        } else {
            this.createHallBtn.disabled = true;
        }
    }

    create() {
        this.hallHolder = document.createElement("div");
        this.hallHolder.classList.add("hall-holder");

        this.buttonDiv.classList.add("hall-manager-buttons");

        this.createHallBtn = document.createElement("button");
        this.createHallBtn.classList.add("green-button");
        this.createHallBtn.innerHTML = "Maak hal";

        this.buttonDiv.appendChild(this.createHallBtn);
        this.appendChild(this.buttonDiv);
        this.appendChild(this.hallHolder);

        this.addHall();
    }

    listeners() {
        this.createHallBtn.addEventListener("click", () => {
            this.addHall();
        });
    }

    changeHall(hallIndex) {
        this.currentHallIndex = hallIndex;
    }
}

export default HallManager;