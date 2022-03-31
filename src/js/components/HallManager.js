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

            let hallChangeBtn = document.createElement("button");
            hallChangeBtn.classList.add("blue-button");
            hallChangeBtn.innerHTML = "Hal " + (this.halls.length + 1);

            hallChangeBtn.onclick = () => {
                this.changeHall(changeIndex)
            };

            this.buttonDiv.appendChild(hallChangeBtn);
            let hall = new Hall(this);

            if (this.halls.length == 0) {
                hall.style.visibility = "visible";
            }
            else {
                hall.style.visibility = "hidden";
            }

            this.halls.push(hall.create());
            this.hallHolder.appendChild(hall);
        }
        else {
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
        this.halls[this.currentHallIndex].style.visibility = "hidden";
        this.currentHallIndex = hallIndex;

        //new hall display flex
        this.halls[this.currentHallIndex].style.visibility = "visible";
    }
}

export default HallManager;