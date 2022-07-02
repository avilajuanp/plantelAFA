import { PiernaHabil } from './PiernaHabil'

abstract class Jugador {
    public nombre: string;
    public apellido: string;
    public edad: number;
    public club: string;
    public altura: number;
    public piernaHabil: PiernaHabil;

    constructor(nombre: string, apellido: string, edad: number, club: string, altura: number, piernaHabil: PiernaHabil) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.club = club;
        this.altura = altura;
        this.piernaHabil = piernaHabil;

    }

    abstract horarioEntrenar(): string;

    abstract entrenarse(): string;

    abstract posicion(): string;

    presentarse() {
        return 'Yo soy ' + this.nombre + ' ' + this.apellido + '. Soy ' + this.posicion() + '.';
    }
}

export default Jugador;
