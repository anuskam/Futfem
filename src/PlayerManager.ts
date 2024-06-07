import { Player } from './Player'

export class PlayerManager {
    static loadPlayers(): Player[] {
        const playersData = [
            //nombre,apellido,dorsal,posicion,goles,disparos,pases,asistencias,recuperaciones,tarjetas_amarillas,tarjetas_rojas,faltas,minutos_jugados,partidos_jugados,titular,suplente,sustitucion,doble_amarilla,penaltis,goles_propia,goles_encajados      
            new Player("Sandra Paños", 1, "Portero", 0, 0, 250, 0, 0, 0, 0, 6, 1170, 13, 13, 0, 0, 0, 0, 0, 6),
            new Player("Irene Paredes", 2, "Defensa", 0, 2, 1318, 0, 23, 3, 0, 3, 1290, 18, 15, 3, 6, 0, 0, 0, 3),
            new Player("Mapi León", 4, "Defensa", 0, 2, 700, 0, 18, 0, 0, 2, 661, 8, 7, 1, 0, 0, 0, 0, 2),
            new Player("Jana Fernández", 5, "Defensa", 0, 0, 473, 0, 6, 0, 0, 2, 430, 7, 5, 2, 2, 0, 0, 0, 2),
            new Player("Clàudia Pina", 6, "Delantero", 12, 41, 1024, 5, 9, 0, 0, 6, 1664, 27, 20, 7, 11, 0, 0, 0, 6),
            new Player("Salma Paralluelo", 7, "Delantero", 18, 28, 416, 3, 2, 1, 0, 4, 1200, 18, 14, 4, 9, 0, 0, 0, 4),
            new Player("Marta Torrejón", 8, "Defensa", 8, 20, 1353, 2, 15, 1, 0, 6, 1584, 26, 17, 9, 5, 0, 0, 0, 6),
            new Player("Mariona Caldentey", 9, "Delantero", 9, 29, 1342, 9, 11, 1, 0, 4, 1433, 27, 13, 14, 8, 0, 0, 0, 4),
            new Player("Caroline Hansen", 10, "Delantero", 19, 40, 833, 18, 7, 0, 0, 4, 1555, 23, 18, 5, 12, 0, 0, 0, 4),
            new Player("Alexia Putellas", 11, "Centrocampista", 8, 22, 780, 5, 2, 0, 0, 7, 1080, 18, 12, 6, 7, 0, 0, 0, 7),
            new Player("Patri Guijarro", 12, "Centrocampista", 4, 12, 1830, 4, 20, 1, 0, 4, 1541, 21, 18, 3, 7, 0, 0, 0, 4),
            new Player("Cata Coll", 13, "Portero", 0, 0, 287, 0, 0, 0, 0, 3, 1350, 15, 15, 0, 0, 0, 0, 0, 3),
            new Player("Aitana Bonmatí", 14, "Centrocampista", 8, 24, 1087, 11, 3, 0, 0, 6, 1635, 24, 18, 6, 10, 0, 0, 0, 6),
            new Player("Lucy Bronze", 15, "Defensa", 1, 5, 992, 4, 30, 0, 0, 7, 1308, 20, 15, 5, 6, 0, 0, 0, 7),
            new Player("Fridolina Rolfö", 16, "Delantero", 5, 6, 238, 2, 1, 0, 0, 2, 342, 6, 4, 2, 4, 0, 0, 0, 2),
            new Player("Bruna Vilamala", 19, "Delantero", 4, 14, 334, 4, 6, 0, 0, 4, 759, 19, 9, 10, 8, 0, 0, 0, 4),
            new Player("Keira Walsh", 21, "Centrocampista", 1, 6, 1393, 4, 11, 0, 0, 4, 1277, 22, 13, 9, 3, 0, 0, 0, 4),
            new Player("Ona Batlle", 22, "Defensa", 3, 8, 1190, 6, 24, 0, 0, 3, 1586, 21, 18, 3, 6, 0, 0, 0, 3),
            new Player("Ingrid Engen", 23, "Centrocampista", 0, 1, 1370, 0, 11, 0, 0, 4, 1319, 21, 14, 7, 5, 0, 0, 4, 0),
            new Player("Esmee Brugts", 24, "Centrocampista", 7, 19, 561, 6, 8, 1, 0, 5, 1412, 25, 17, 8, 10, 0, 0, 0, 5),
            new Player("Gemma Font", 25, "Portero", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
            new Player("Giulia Dragoni", 26, "Centrocampista", 0, 0, 50, 0, 1, 0, 0, 0, 63, 5, 0, 5, 0, 0, 0, 0, 0),
            new Player("Vicky López", 30, "Centrocampista", 8, 14, 670, 3, 8, 1, 0, 4, 1068, 21, 12, 9, 8, 0, 0, 0, 4),
            new Player("Ariana Arias", 32, "Delantero", 1, 1, 13, 0, 0, 0, 0, 0, 124, 5, 1, 4, 1, 0, 0, 0, 0),
            new Player("Martina Fernández", 34, "Centrocampista", 1, 6, 1133, 0, 10, 0, 0, 3, 1157, 15, 13, 2, 4, 0, 0, 0, 3),
            new Player("Júlia Bartel", 39, "Centrocampista", 0, 1, 92, 0, 2, 0, 0, 2, 90, 1, 1, 0, 0, 0, 0, 0, 2),
            new Player("Lucía Corrales", 40, "Delantero", 0, 0, 194, 1, 5, 0, 0, 3, 330, 9, 4, 5, 4, 0, 0, 0, 3)
        ];

        const players = playersData;
        return players;
    }
    

    static sortByGoles(players: Player[]): Player[] {
        return players.sort((player, nextPlayer) => nextPlayer.goles - player.goles)
    }
    static sortByDisparos(players: Player[]): Player[] {
        return players.sort((player, nextPlayer) => nextPlayer.disparos - player.disparos)
    }
    static sortByPases(players: Player[]): Player[] {
        return players.sort((player, nextPlayer) => nextPlayer.pases - player.pases)
    }
    static sortByAsistencias(players: Player[]): Player[] {
        return players.sort((player, nextPlayer) => nextPlayer.asistencias - player.asistencias)
    }
    static sortByRecuperaciones(players: Player[]): Player[] {
        return players.sort((player, nextPlayer) => nextPlayer.recuperaciones - player.recuperaciones)
    }
    static sortByTarjetasAmarillas(players: Player[]): Player[] {
        return players.sort((player, nextPlayer) => nextPlayer.tarjetas_amarillas - player.tarjetas_amarillas)
    }
    static sortByTarjetasRojas(players: Player[]): Player[] {
        return players.sort((player, nextPlayer) => nextPlayer.tarjetas_rojas - player.tarjetas_rojas)
    }
    static sortByFaltas(players: Player[]): Player[] {
        return players.sort((player, nextPlayer) => nextPlayer.faltas - player.faltas)
    }
}