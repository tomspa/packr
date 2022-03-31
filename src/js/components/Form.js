class FormWindow extends HTMLElement {
    modal;
    isOn;
    createTruckBtn;
    currentHall;
    xbtn;
    modalContent;
    errorText;

    constructor() {
        super();
        this.modal = document.getElementById("modal");
        this.isOn = false;
        this.createTruckBtn = document.getElementById("create-truck");
        this.errorText = document.getElementById("errorText");
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
        let width = document.getElementById("width");
        let height = document.getElementById("height");
        let interval = document.getElementById("interval");
        let radio = document.querySelector("input[name='trans']:checked").value;
        let select = document.getElementById("provinces");
        let selected = [...select.options]
            .filter(option => option.selected)
            .map(option => option.value);

        if (width.value < 4 || width.value > 9) {
            this.errorText.innerHTML = "Breedte moet minimaal 4 en maximaal 9 zijn";
            return;
        }
        if (height.value < 4 || height.value > 9) {
            this.errorText.innerHTML = "Hoogte moet minimaal 4 en maximaal 9 zijn";
            return;
        }
        if (interval.value < 10 || interval.value > 180) {
            this.errorText.innerHTML = "Interval moet minimaal 10 en maximaal 180 zijn";
            return;
        }

        if (selected.length <= 0) {
            this.errorText.innerHTML = "De vrachtwagen moet minstens één bestemming hebben";
            return;
        }

        this.errorText.innerHTML = "";

        hall.addTruck(width.value, height.value, interval.value, radio, selected);
        this.closeDisplay();
    }
}

export default FormWindow;