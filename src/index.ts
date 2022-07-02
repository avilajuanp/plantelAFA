import express, { Request, Response } from 'express';
import path from 'path';
import Jugador from './clases/Jugador';
import Delantero from './clases/Delantero';
import Defensor from './clases/Defensor';
import Mediocampista from './clases/Mediocampista';
import Arquero from './clases/Arquero';
import { PiernaHabil } from './clases/PiernaHabil';

const PORT = 5005;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//*  intento de hacer funcionar archivo .css 
app.use(express.static(path.join(__dirname, '..', '/public')));

app.set('views', path.join(__dirname, '..', 'views'));
app.set('view engine', 'ejs');

app.get('/', (req: Request, res: Response) => {
  res.render('pages/home');
});

const jugadores: Jugador[] = [];

//ARQUEROS
const martinezE = new Arquero('Emiliano', 'Martinez', 30, 'Aston Villa', 1.93, PiernaHabil.IZQUIERDA)
jugadores.push(martinezE);
const armani = new Arquero('Franco', 'Armani', 35, 'River Plate', 1.89, PiernaHabil.DERECHA)
jugadores.push(armani);
const musso = new Arquero('Juan', 'Musso', 27, 'Atalanta B.C', 1.93, PiernaHabil.DERECHA)
jugadores.push(musso);
const rulli = new Arquero('Gerónimo', 'Rulli', 30, 'Villarreal C.F', 1.89, PiernaHabil.DERECHA)
jugadores.push(rulli);

//DEFENSORES
const montiel = new Defensor('Gonzalo', 'Montiel', 25, 'Sevilla F.C', 1.75, PiernaHabil.DERECHA)
jugadores.push(montiel);
const molina = new Defensor('Nahuel', 'Molina', 24, 'Udinese', 1.75, PiernaHabil.DERECHA)
jugadores.push(molina);
const foyth = new Defensor('Juan', 'Foyth', 24, 'Villarreal', 1.87, PiernaHabil.DERECHA)
jugadores.push(foyth);
const pezzella = new Defensor('German', 'Pezella', 31, 'Real Betis', 1.90, PiernaHabil.DERECHA)
jugadores.push(pezzella);
const perez = new Defensor('Nehuel', 'Perez', 22, 'Unidese Calcio', 1.84, PiernaHabil.DERECHA)
jugadores.push(perez);
const romero = new Defensor('Cristian', 'Romero', 24, 'Tottenham Hotspus', 1.85, PiernaHabil.DERECHA)
jugadores.push(romero);
const otamendi = new Defensor('Nicolas', 'Otamendi', 34, 'Benfica', 1.83, PiernaHabil.DERECHA)
jugadores.push(otamendi);
const martinezli = new Defensor('Lisandro', 'Martinez', 24, 'Ajax', 1.75, PiernaHabil.IZQUIERDA)
jugadores.push(martinezli);
const senesi = new Defensor('Marcos', 'Senesi', 25, 'Feyenoord', 1.85, PiernaHabil.DERECHA)
jugadores.push(senesi);
const tagliafico = new Defensor('Nicolas', 'Tagliafico', 29, 'Ajax', 1.72, PiernaHabil.IZQUIERDA)
jugadores.push(tagliafico);
const acuña = new Defensor('Marcos', 'Acuña', 30, 'Benfica', 1.72, PiernaHabil.IZQUIERDA)
jugadores.push(acuña);


//MEDIOCAMPISTAS
const gomez = new Mediocampista('Alejandro', 'Gomez', 34, 'Sevilla', 1.67, PiernaHabil.DERECHA)
jugadores.push(gomez);
const dimaria = new Mediocampista('Angel', 'Di Maria', 34, 'PSG', 1.80, PiernaHabil.DERECHA)
jugadores.push(dimaria);
const rodriguez = new Mediocampista('Guido', 'Rodriguez', 28, 'Real Betis', 1.85, PiernaHabil.DERECHA)
jugadores.push(rodriguez);
const macallister = new Mediocampista('Alexis', 'Mac Allister', 23, 'Brighton', 1.75, PiernaHabil.DERECHA)
jugadores.push(macallister);
const depaul = new Mediocampista('Rodrigo', 'De Paul', 28, 'Atletic De Madrid', 1.80, PiernaHabil.DERECHA)
jugadores.push(depaul);
const palacios = new Mediocampista('Exequiel', 'Palacios', 23, 'BayerLeverkusen', 1.80, PiernaHabil.DERECHA)
jugadores.push(palacios);
const locelso = new Mediocampista('Giovani', 'Lo Celso', 26, 'Villareal', 1.78, PiernaHabil.DERECHA)
jugadores.push(locelso);

//DELANTEROS
const gonzalez = new Delantero('Nicolas', 'Gonzales', 24, 'ACF Fiorentina', 1.80, PiernaHabil.DERECHA)
jugadores.push(gonzalez);
const martinezla = new Delantero('Lautaro', 'Martinez', 24, 'Inter', 1.74, PiernaHabil.DERECHA)
jugadores.push(martinezla);
const dybala = new Delantero('Paulo', 'Dybala', 28, 'Juventus', 1.77, PiernaHabil.IZQUIERDA)
jugadores.push(dybala);
const alvarez = new Delantero('Julian', 'Alvarez', 22, 'River Plate', 1.70, PiernaHabil.DERECHA)
jugadores.push(alvarez);
const correa = new Delantero('Joaquín', 'Correa', 27, 'Sevilla F.C', 1.88, PiernaHabil.DERECHA)
jugadores.push(correa)
const correaAn = new Delantero('Angel', 'Correa', 27, 'Benfica', 1.71, PiernaHabil.DERECHA)
jugadores.push(correaAn);
const messi = new Delantero('Lionel', 'Messi', 35, 'PSG', 1.69, PiernaHabil.IZQUIERDA)
jugadores.push(messi)

const defensa: Defensor[] = []

for (let def of jugadores) {
  if (def.posicion() == 'defensor') {
    defensa.push(def);
  }
}

const porteria: Arquero[] = []

for (let arq of jugadores) {
  if (arq.posicion() == 'arquero') {
    porteria.push(arq);
  }
}

const mediocampo: Mediocampista[] = []

for (let med of jugadores) {
  if (med.posicion() == 'mediocampista') {
    mediocampo.push(med);
  }
}

const delantera: Delantero[] = []

for (let del of jugadores) {
  if (del.posicion() == 'delantero') {
    delantera.push(del);
  }
}

//ordenamos las listas de jugadores
jugadores.sort((a, b) => (a.apellido > b.apellido) ? 1 : ((b.apellido > a.apellido) ? -1 : 0));
porteria.sort((a, b) => (a.apellido > b.apellido) ? 1 : ((b.apellido > a.apellido) ? -1 : 0));
defensa.sort((a, b) => (a.apellido > b.apellido) ? 1 : ((b.apellido > a.apellido) ? -1 : 0));
mediocampo.sort((a, b) => (a.apellido > b.apellido) ? 1 : ((b.apellido > a.apellido) ? -1 : 0));
delantera.sort((a, b) => (a.apellido > b.apellido) ? 1 : ((b.apellido > a.apellido) ? -1 : 0));

app.get('/inicio/lista', (req: Request, res: Response) => {
  res.render('pages/plantel/viewJugadores', { jugadores: jugadores });
});

app.get('/inicio/entrenamiento', (req: Request, res: Response) => {
  res.render('pages/plantel/viewEntrenamiento');
});

//HORARIOS

app.get('/inicio/horarios', (req: Request, res: Response) => {
  res.render('pages/plantel/listaHorarios', { jugadores: jugadores });
});

//DEFENSA

app.get('/inicio/defensa/lista', (req: Request, res: Response) => {
  res.render('pages/plantel/listaDef', { defensa: defensa });
});

app.get('/inicio/defensa/entrenar', (req: Request, res: Response) => {
  res.render('pages/plantel/entrenaDefensa', { defensa: defensa });
});

app.get('/inicio/defensa', (req: Request, res: Response) => {
  res.render('pages/plantel/viewDefensa');
});

//DELANTERA

app.get('/inicio/del/lista', (req: Request, res: Response) => {
  res.render('pages/plantel/listaDel', { delantera: delantera });
});

app.get('/inicio/del/entrenar', (req: Request, res: Response) => {
  res.render('pages/plantel/entrenaDel', { delantera: delantera });
});

app.get('/inicio/delantera', (req: Request, res: Response) => {
  res.render('pages/plantel/viewDel', { jugadores: jugadores });
});

//PORTERIA

app.get('/inicio/porteria/lista', (req: Request, res: Response) => {
  res.render('pages/plantel/listaPorteria', { porteria: porteria });
});

app.get('/inicio/porteria/entrenar', (req: Request, res: Response) => {
  res.render('pages/plantel/entrenaPorteria', { porteria: porteria });
});

app.get('/inicio/porteria', (req: Request, res: Response) => {
  res.render('pages/plantel/viewPorteria');
});

//MEDIOCAMPO

app.get('/inicio/med/lista', (req: Request, res: Response) => {
  res.render('pages/plantel/listaMedio', { mediocampo: mediocampo });
});

app.get('/inicio/med/entrenar', (req: Request, res: Response) => {
  res.render('pages/plantel/entrenaMedio', { mediocampo: mediocampo });
});

app.get('/inicio/mediocampo', (req: Request, res: Response) => {
  res.render('pages/plantel/viewMedio', { jugadores: jugadores });
});


app.listen(PORT, () => {
  console.info(`Ejecutando en puerto ${PORT}`);
});


