class Negocio {
    protected operar(): void {
        console.log("El negocio está operando de manera general.");
    }
}

class Consultoria extends Negocio {

   
    protected operar(): void {
        console.log("La consultoría opera ofreciendo asesoramiento profesional.");
    }

   
    public iniciarOperacion(): void {
        this.operar();
    }
}

const consultoria = new Consultoria();
consultoria.iniciarOperacion(); 