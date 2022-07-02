import Jugador from './Jugador'
import { PiernaHabil } from './PiernaHabil'

class Arquero extends Jugador {

    constructor(nombre: string, apellido: string, edad: number, club: string, altura: number, piernaHabil: PiernaHabil) {
        super(nombre, apellido, edad, club, altura, piernaHabil)
    }

    horarioEntrenar(): string {
        return 'Lunes de 10 hs a 14 hs.';
    }

    entrenarse(): string {
        return 'Estoy entrenando reflejos y despeje con los puños.';
    }

    posicion(): string {
        return 'arquero';
    }
}

export default Arquero;