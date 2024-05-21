import '../css/style.css'
import { Actor, Engine, Vector, Keys } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Fish } from './fish.js'
import { Player } from './player.js'
import { Coin } from './coin.js'
// import { Label } from './label.js'

export class Game extends Engine {

    constructor() {
        super({ width: 800, height: 600 })
        this.start(ResourceLoader).then(() => this.startGame())
        this.fishes = []
    }

    startGame() {
        console.log("start de game!")     

        for(let i = 0; i <20; i++) {
           this.createFish()
        }

        for(let i = 0; i <20; i++) {
            this.createCoin()
         }

        const player = new Player()
        this.add(player)
    }

    createFish() {
        const fish = new Fish()
        this.add(fish)
        this.fishes.push(fish)
    }

    createCoin() {
        const coin = new Coin()
        this.add(coin)
    }
}

new Game()