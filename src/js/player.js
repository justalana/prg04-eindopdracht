import { Actor, Engine, Vector, Keys } from 'excalibur'
import { Resources, ResourceLoader } from './resources.js'
import { Fish } from './fish.js'
import { Coin } from './coin.js'

export class Player extends Actor {

    constructor() {
        super({width: 70, height: 70 })
    }

    onInitialize(engine) {
        this.score = 0
        this.health = 100

        this.graphics.use(Resources.Player.toSprite());
        this.pos = new Vector(400, 400);
        this.vel = new Vector(0, 0);

        this.on('collisionstart', (event) => this.hitSomething(event))
    }

    
    onPreUpdate(engine) {
        let xspeed = 0;
        let yspeed = 0;
    
        if (engine.input.keyboard.isHeld(Keys.W) || engine.input.keyboard.isHeld(Keys.Up)) {
          yspeed = -100;
        }
    
        if (engine.input.keyboard.isHeld(Keys.S) || engine.input.keyboard.isHeld(Keys.Down)) {
          yspeed = 100;
        }
    
        if (engine.input.keyboard.isHeld(Keys.D) || engine.input.keyboard.isHeld(Keys.Right)) {
          xspeed = 100
        }
    
        if (engine.input.keyboard.isHeld(Keys.A) || engine.input.keyboard.isHeld(Keys.Left)) {
          xspeed = -100
        }
    
        this.vel = new Vector(xspeed, yspeed);
        this.graphics.flipHorizontal = (this.vel.x > 0)
    
        if (engine.input.keyboard.wasPressed(Keys.Space)) {
            console.log("shoot!")
        }
    }

    hitSomething(event) {
        if(event.other instanceof Fish) {
            this.health -= 10
            event.other.kill()
            console.log(`Ohno your health = ${this.health}`)    // remove the tree
        }
        if(event.other instanceof Coin) {
          this.score += 1
          event.other.kill()
          console.log(`Your points: ${this.score}`)
     }
    }
  }