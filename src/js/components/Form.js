class FormWindow {
    modal;
    isOn;

    constructor() {
        this.modal = document.getElementById("modal");
        console.log(this.modal);
        this.isOn = false;
        this.init();
    }

    init() {
        let x = document.getElementById("close-button");

        x.onclick = () => {
            this.toggleDisplay();
        }
    }

    toggleDisplay() {
        if (this.isOn) {
            console.log("none");
            this.modal.style.display = "none";
        } else {
            console.log("block");
            this.modal.style.display = "block"
        }
        this.isOn = !this.isOn;
    }
}

export default FormWindow;