import { Actor, Engine, Vector, Keys, Sprite, SpriteSheet } from 'excalibur'
import { Resources, ResourceLoader } from './resources.js'

export class Coin extends Actor {

    constructor() {
        super({width: 80, height: 80 })
    }

    onInitialize(engine){
        this.graphics.use(Resources.Coin.toSprite())
        this.pos.x =  Math.random() * 800
        this.pos.y =  Math.random() * 600
    }
}