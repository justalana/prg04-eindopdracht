import '../css/style.css'
import { Actor, Engine, Vector, Keys, Sprite, SpriteSheet } from 'excalibur'
import { Resources, ResourceLoader } from './resources.js'
import { Fish } from './object.js'
import { Player } from './player.js'
import { Coin } from './coin.js'
import { Background } from './background.js'

export class Game extends Engine {

    constructor() {
        super({ width: 900, height: 500 })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        console.log("start de game!")  
        
        const background = new Background()
        this.add(background)

        // for(let i = 0; i <20; i++) {
        //     this.createCoin()
        // }

        this.add(new Player())
    }

    createFish() {
        const fish = new Fish()
        this.add(fish)
        this.fishes.push(fish)
    }
}

new Game()