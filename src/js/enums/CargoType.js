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
        switch(type) {
            case CargoType.Cold:
                return this.ColdColor;
            case CargoType.Fragile:
                return this.FragileColor;
            case CargoType.General:
                return this.GeneralColor;
            case CargoType.Pallets:
                return this.PalletsColor;
            case CargoType.Quick:
                return this.QuickColor;
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