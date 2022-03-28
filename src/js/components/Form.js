class FormWindow {
    modal;
    isOn;
    createTruckBtn;
    currentHall;
    xbtn;
    modalContent;

    constructor() {
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
            this.toggleDisplay();
            this.modalContent.reset();
        }

        this.modalContent.addEventListener("submit", function(e) {
            e.preventDefault();
            this.reset();
        });

        this.createTruckBtn.onclick = () => {
            //this.currentHall = document.getElementById("hallId");

            let width = document.getElementById("width").value;
            let height = document.getElementById("height").value;
            let interval = document.getElementById("interval").value;

            let radio = document.querySelector("input[name='trans']:checked").value;

            let select = document.getElementById("provinces");
            let selected = [...select.options]
                .filter(option => option.selected)
                .map(option => option.value);
        }
    }

    toggleDisplay() {
        if (this.isOn) {
            this.modal.style.display = "none";
        } else {
            this.modal.style.display = "block"
        }
        this.isOn = !this.isOn;
    }
}

export default FormWindow;