import Jugador from './Jugador'
import { PiernaHabil } from './PiernaHabil'

class Delantero extends Jugador {

    constructor(nombre: string, apellido: string, edad: number, club: string, altura: number, piernaHabil: PiernaHabil) {
        super(nombre, apellido, edad, club, altura, piernaHabil)
    }

    horarioEntrenar(): string {
        return 'Martes de 9 hs a 13 hs.';
    }

    entrenarse(): string {
        return 'Estoy entrenando tiro al arco y sprint.';
    }

    posicion(): string {
        return 'delantero';
    }
}

export default Delantero;