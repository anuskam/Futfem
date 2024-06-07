import { PlayerManager } from '../src/PlayerManager'
import { Player } from '../src/Player'

describe('PlayerManager', () => {
    const players: Player[] = PlayerManager.loadPlayers()

    it('should sort players by goals', () => {
        const result = PlayerManager.sortByGoles(players)
        expect(result[0].nombre).toEqual("Caroline Hansen")
    })

    it('should sort players by disparos', () => {
        const result = PlayerManager.sortByDisparos(players)
        expect(result[0].nombre).toEqual("Clàudia Pina")
    })

    it('should sort players by pases', () => {
        const result = PlayerManager.sortByPases(players)
        expect(result[0].nombre).toEqual("Patri Guijarro")
    })

    it('should sort players by asistencias', () => {
        const result = PlayerManager.sortByAsistencias(players)
        expect(result[0].nombre).toEqual("Caroline Hansen")
    })

    it('should sort players by recuperaciones', () => {
        const result = PlayerManager.sortByRecuperaciones(players)
        expect(result[0].nombre).toEqual("Lucy Bronze")
    })

    it('should sort players by tarjetas amarillas', () => {
        const result = PlayerManager.sortByTarjetasAmarillas(players)
        expect(result[0].nombre).toEqual("Irene Paredes")
    })

    it('should sort players by tarjetas rojas', () => {
        const result = PlayerManager.sortByTarjetasRojas(players)
        expect(result[0].nombre).toEqual("Irene Paredes")
    })

    it('should sort players by faltas', () => {
        const result = PlayerManager.sortByFaltas(players)
        expect(result[0].nombre).toEqual("Alexia Putellas")
    })
})