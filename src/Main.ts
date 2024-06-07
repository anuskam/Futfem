import { Menu } from './Menu'
import { PlayerManager } from './PlayerManager';


class Main {
    constructor(){
        PlayerManager.loadPlayers()
        Menu.askQuestion()
    }
}

new Main()