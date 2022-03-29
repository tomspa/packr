class CargoType {
    static Cold = 0;
    static Fragile = 1;
    static General = 2;
    static Pallets = 3;
    static Quick = 4;

    static ColdColor = "#00FFFF";
    static FragileColor = "#af01af";
    static GeneralColor = "#24e00c";
    static PalletsColor = "#985a05";
    static QuickColor = "#eaea23";

    static GetColorByCargoType(type) {
        if (type == 0 || type == "0") {
            return "#00FFFF";
        }
        else if (type == 1 || type == "1") {
            return "#af01af";
        }
        else if (type == 2 || type == "2") {
            return "#24e00c";
        }
        else if (type == 3 || type == "3") {
            return "#985a05";
        }
        else if (type == 4 || type == "4") {
            return "#eaea23";
        }
    }

    static GetCargoTypeByNumber(number) {
        switch(number) {
            case 0:
                return CargoType.Cold;
            case 1:
                return CargoType.Fragile;
            case 2:
                return CargoType.General;
            case 3:
                return CargoType.Pallets;
            case 4:
                return CargoType.Quick;
        }
    }

    static GetRandomCargoType() {
        return this.GetCargoTypeByNumber(Math.floor(Math.random() * 5));
    }
}

export default CargoType;