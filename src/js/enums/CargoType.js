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
        } else if (type == 1 || type == "1") {
            return "#af01af";
        } else if (type == 2 || type == "2") {
            return "#24e00c";
        } else if (type == 3 || type == "3") {
            return "#985a05";
        } else if (type == 4 || type == "4") {
            return "#eaea23";
        }
    }

    static GetCargoTypeByNumber(number) {
        switch (number) {
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

    static CanDriveAway(cargoType, WCC, temperature) {
        cargoType = parseInt(cargoType);
        switch (cargoType) {
            case 0:
                if (temperature < 20) {
                    return true;
                }
                return false;
            case 1:
                if (WCC == 1183 || WCC == 1186 || WCC == 1189 || WCC == 1192 || WCC == 1195 ||
                    WCC == 1198 || WCC == 1201 || WCC == 1240 || WCC == 1243 ||
                    WCC == 1246 || WCC == 1273 || WCC == 1276 || WCC == 5 || WCC == 1072 ||
                    WCC == 1147 || WCC == 1168 || WCC == 1171 || WCC == 1237 || WCC == 1261 ||
                    WCC == 1264 || WCC == 1237) {
                    return false;
                }
                return true;
            case 2:
                return true;
            case 3:
                return true;
            case 4:
                return true;
        }
    }
}

export default CargoType;