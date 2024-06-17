import { Actor, Engine, Vector, Keys, Sprite, Input, CollisionType, Shape } from 'excalibur'
import { Resources, ResourceLoader } from './resources.js'
import { Fish } from './object.js'
import { Coin } from './coin.js'
import { Ground } from './ground.js'

export class Player extends Actor {

  constructor() {
    super({width: 96, height:96, collisionType: CollisionType.Active})
    this.body.mass = 50
  }

  onInitialize(engine) {
    this.graphics.use(Resources.Player.toSprite())
    this.pos = new Vector(300, 680);
    

    this.score = 0
    this.health = 100
    this.grounded = true

    this.on('collisionstart', (event) => this.hitSomething(event))
  }

    
  onPreUpdate(engine) {
    let xspeed = 0;
    let yspeed = 0;
    
    
    if (engine.input.keyboard.isHeld(Keys.W) || engine.input.keyboard.isHeld(Keys.Up)) {
      if (this.grounded) {
        this.actions.moveTo(new Vector(300, 450),900)
        this.grounded = false
        // yspeed = -1000
        // if (this.pos >= (300, 500)) {
        //   this.grounded = false
        //   console.log('false')
        // }
        
      }
    }
    
    // if (engine.input.keyboard.isHeld(Keys.D) || engine.input.keyboard.isHeld(Keys.Right)) {
    //   xspeed = 50
    // }
    if (engine.input.keyboard.isHeld(Keys.S) || engine.input.keyboard.isHeld(Keys.Down)) {
      yspeed = 500
    }

    
    this.vel = new Vector(xspeed, yspeed);

  }

  hitSomething(event) {
    if(event.other instanceof Ground) {
      this.grounded = true
      console.log(`ground`)
    }
  }
}