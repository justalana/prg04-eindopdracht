import '../css/style.css'
import { Actor, Engine, Vector, Keys, Sprite, SpriteSheet } from 'excalibur'
import { Resources, ResourceLoader } from './resources.js'
import { Fish } from './object.js'
import { Player } from './player.js'
import { Coin } from './coin.js'
import { Background } from './background.js'
import { Intro } from './scene'
import { GameScene } from './scene'
// import { GameOver } from './scene'

export class Game extends Engine {

    constructor() {
        super({ width: 1280, height: 742, 
            physics: {
                gravity: new Vector(0, 2000),
            }
         })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        console.log("start de game!")  
        
        const background = new Background()
        this.add(background)

        const intro = new Intro()
        this.add('intro', intro)
        this.goToScene('intro')

        const gameScene = new GameScene()
        this.add('game', gameScene)

        // const gameOver = new GameOver()
        // this.add('gameOver', gameOver)

        // for(let i = 0; i <20; i++) {
        //     this.createCoin()
        // }
    }

}

new Game()