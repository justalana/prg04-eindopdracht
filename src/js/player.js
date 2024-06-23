import { Actor, Engine, Vector, Keys, Sprite, Input, CollisionType, Shape } from 'excalibur'
import { Resources, ResourceLoader } from './resources.js'
import { Ground } from './ground.js'
import { Bush } from './bush.js'

export class Player extends Actor {

  constructor() {
    super({width: 96, height:96, collisionType: CollisionType.Active})
    this.body.mass = 200
  }

  onInitialize(engine) {
    this.graphics.use(Resources.Player.toSprite())
    this.pos = new Vector(300, 680);
    

    this.health = 100
    this.grounded = true

    this.on('collisionstart', (event) => this.hitSomething(event))
  }

    
  onPreUpdate(engine, delta) {
    let xspeed = 0;
    let yspeed = 0;
    
    
    if (engine.input.keyboard.isHeld(Keys.W) || engine.input.keyboard.isHeld(Keys.Up)) {
      if (this.grounded) {
        this.actions.moveTo(new Vector(300, 450),600)
        this.grounded = false
      }
    }
    
    // if (engine.input.keyboard.isHeld(Keys.S) || engine.input.keyboard.isHeld(Keys.Down)) {
    //   yspeed = 500
    // }

    
    // this.vel = new Vector(xspeed, yspeed);

  }

  hitSomething(event) {
    if(event.other instanceof Ground) {
      this.grounded = true
      console.log(`ground`)
    }
  }
}