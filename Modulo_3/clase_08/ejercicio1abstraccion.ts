abstract class Transporte {
    abstract mover(): void;
}

interface Electrico {
    cargarBateria(): void;
}

interface Combustible {
    llenarTanque(): void;
}

class AutobusElectrico extends Transporte implements Electrico {

    mover(): void {
        console.log("El autobús eléctrico está en movimiento.");
    }

    cargarBateria(): void {
        console.log("Cargando la batería del autobús eléctrico...");
    }
}

class Taxi extends Transporte implements Combustible {

    mover(): void {
        console.log("El taxi está circulando por la ciudad.");
    }

    llenarTanque(): void {
        console.log("Llenando el tanque de combustible del taxi...");
    }
}

const autobus = new AutobusElectrico();
autobus.mover();
autobus.cargarBateria();

const taxi = new Taxi();
taxi.mover();
taxi.llenarTanque();