import * as readline from 'readline';
import { PlayerManager } from './PlayerManager'

export class Menu {
    static options(): void {
        console.log("***Elige una opción***")
        console.log("1. Listado de goles")
        console.log("2. Listado de disparos")
        console.log("3. Listado de pases")
        console.log("4. Listado de asistencias")
        console.log("5. Listado de recuperaciones")
        console.log("6. Listado de tarjetas amarillas")
        console.log("7. Listado de tarjetas rojas")
        console.log("8. Listado de faltas")
        console.log("9. Salir")
    }

    static askQuestion() {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            terminal: false // Esto es para que no me salgan los números repetidos
        });
        const players = PlayerManager.loadPlayers()

        this.options()

        rl.question("Elige una opción: ", (answer) => {
            const number: number = parseInt(answer);
            
            switch (number) {
                case 1:
                    console.log(PlayerManager.sortByGoles(players).forEach((jugadora) => console.log(`${jugadora.nombre} - Goles: ${jugadora.goles}`)))
                    break;
                case 2:
                    console.log(PlayerManager.sortByDisparos(players).forEach((jugadora) => console.log(`${jugadora.nombre} - Disparos: ${jugadora.disparos}`)))
                    break;
                case 3:
                    console.log(PlayerManager.sortByPases(players).forEach((jugadora) => console.log(`${jugadora.nombre} - Pases: ${jugadora.pases}`)))
                    break;
                case 4:
                    console.log(PlayerManager.sortByAsistencias(players).forEach((jugadora) => console.log(`${jugadora.nombre} - Asistencias: ${jugadora.asistencias}`)))
                    break;
                case 5:
                    console.log(PlayerManager.sortByRecuperaciones(players).forEach((jugadora) => console.log(`${jugadora.nombre} - Recuperaciones: ${jugadora.recuperaciones}`)))
                    break;
                case 6:
                    console.log(PlayerManager.sortByTarjetasAmarillas(players).forEach((jugadora) => console.log(`${jugadora.nombre} - Tarjetas amarillas: ${jugadora.tarjetas_amarillas}`)))
                    break;
                case 7:
                    console.log(PlayerManager.sortByTarjetasRojas(players).forEach((jugadora) => console.log(`${jugadora.nombre} - Tarjetas rojas: ${jugadora.tarjetas_rojas}`)))
                    break;
                case 8:
                    console.log(PlayerManager.sortByFaltas(players).forEach((jugadora) => console.log(`${jugadora.nombre} - Faltas: ${jugadora.faltas}`)))
                    break;
                case 9:
                    console.log("Saliendo...");
                    rl.close();
                    break;
                default:
                    console.log("Número inválido. Por favor, elige una opción válida.");
            }

            
            if (number !== 9) {
                this.askQuestion();
            } else {
                rl.close();
            }
        })
    }
}