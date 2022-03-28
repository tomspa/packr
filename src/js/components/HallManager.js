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

            let btn = document.createElement("button");
            btn.classList.add("green-button");
            btn.innerHTML = "hal " + (this.halls.length + 1);

            btn.onclick = () => {
                this.changeHall(changeIndex)
            };

            this.buttonDiv.appendChild(btn);
            let hall = new Hall();
            hall.style.display = "none";
            this.halls.push(hall);
            this.hallHolder.appendChild(hall);
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
        //old hall display none
        this.halls[this.currentHallIndex].style.display = "none";
        this.currentHallIndex = hallIndex;

        //new hall display flex
        this.halls[this.currentHallIndex].style.display = "flex";
    }
}

export default HallManager;