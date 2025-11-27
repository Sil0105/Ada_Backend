interface Bebida {
    preparar(): void;
}


class Cafe implements Bebida {
    preparar(): void {
       
        console.log("Moliendo granos, preparando el espresso y sirviendo el café.");
    }
}


class Te implements Bebida {
    preparar(): void {
       
        console.log("Calentando el agua y preparando la infusión de té.");
    }
}

const bebida1: Bebida = new Cafe();
const bebida2: Bebida = new Te();

bebida1.preparar(); 
bebida2.preparar(); 