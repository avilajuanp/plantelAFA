import Jugador from './Jugador'
import { PiernaHabil } from './PiernaHabil'


class Mediocampista extends Jugador {

    constructor(nombre: string, apellido: string, edad: number, club: string, altura: number, piernaHabil: PiernaHabil) {
        super(nombre, apellido, edad, club, altura, piernaHabil)
    }

    horarioEntrenar(): string {
        return 'Miércoles de 14 hs a 18 hs.';
    }

    entrenarse(): string {
        return 'Estoy entrenando intercepción y pases en profundidad.';
    }

    posicion(): string {
        return 'mediocampista';
    }
}

export default Mediocampista;