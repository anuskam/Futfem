export class Player {
    constructor(
        public nombre: string, 
        public dorsal: number, 
        public posicion: string, 
        public goles: number, 
        public disparos: number, 
        public pases: number, 
        public asistencias: number, 
        public recuperaciones: number, 
        public tarjetas_amarillas: number, 
        public tarjetas_rojas: number, 
        public faltas: number,

        public minutos_jugados: number, 
        public partidos_jugados: number, 
        public titular: number,
        public suplente: number,
        public sustituida: number,
        public doble_amarilla: number,
        public penaltis: number,
        public goles_propia: number,
        public goles_encajados: number,
    ) {}
}