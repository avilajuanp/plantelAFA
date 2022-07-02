import Jugador from './Jugador'
import { PiernaHabil } from './PiernaHabil'

class Defensor extends Jugador {

    constructor(nombre: string, apellido: string, edad: number, club: string, altura: number, piernaHabil: PiernaHabil) {
        super(nombre, apellido, edad, club, altura, piernaHabil)
    }

    horarioEntrenar(): string {
        return 'Jueves de 14:30 hs a 18:30 hs';
    }

    entrenarse(): string {
        return 'Estoy entrenando bloqueo y barrida.';
    }

    posicion(): string {
        return 'defensor';
    }
}

export default Defensor;