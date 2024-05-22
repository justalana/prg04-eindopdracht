import { Actor, Engine, Vector, Keys, Sprite, SpriteSheet } from 'excalibur'
import { Resources, ResourceLoader } from './resources.js'

export class Fish extends Actor {

    constructor() {
        super({width: 70, height: 60 })
    }

    onInitialize(engine){
        this.graphics.use(Resources.Fish.toSprite())
        this.pos.x =  Math.random() * 800
        this.pos.y =  Math.random() * 600
        this.vel = new Vector(-(this.getRandomInt(10)), 0)

        this.on("exitviewport", () => this.resetFish())
    }

    resetFish(){
        this.pos = new Vector(800,this.pos.y)
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * max)
    }
}