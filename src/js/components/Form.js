class FormWindow extends HTMLElement {
    modal;
    isOn;
    createTruckBtn;
    currentHall;
    xbtn;
    modalContent;

    constructor() {
        super();
        this.modal = document.getElementById("modal");
        this.isOn = false;
        this.createTruckBtn = document.getElementById("create-truck");
        this.init();
    }

    init() {
        this.xbtn = document.getElementById("close-button");
        this.modalContent = document.getElementById("modal-content");
        this.listeners();
    }

    listeners() {
        this.xbtn.onclick = () => {
            this.closeDisplay();
            this.modalContent.reset();
        }

        this.modalContent.addEventListener("submit", function(e) {
            e.preventDefault();
            this.reset();
        });
    }

    closeDisplay() {
        this.modal.style.display = "none";
    }

    openDisplay(hall) {
        this.modal.style.display = "block";

        this.createTruckBtn.onclick = () => {
            this.checkForm(hall);
        }
    }

    checkForm(hall) {
        let width = document.getElementById("width").value;
        let height = document.getElementById("height").value;
        let interval = document.getElementById("interval").value;
        let radio = document.querySelector("input[name='trans']:checked").value;
        let select = document.getElementById("provinces");
        let selected = [...select.options]
            .filter(option => option.selected)
            .map(option => option.value);

        hall.addTruck(width, height, interval, radio, selected);
        this.closeDisplay();
    }
}

export default FormWindow;