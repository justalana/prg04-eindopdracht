import { Actor, Engine, Vector, Keys, Sprite, Input, CollisionType, Shape } from 'excalibur'
import { Resources, ResourceLoader } from './resources.js'
import { Ground } from './ground.js'
import { Player } from './player.js'

export class Bush extends Actor {

    constructor() {
      super({width: 50, height:50, collisionType: CollisionType.Active})
      this.body.mass = 200
    }
  
    onInitialize(engine) {
      this.graphics.use(Resources.Bush.toSprite())
      this.pos = new Vector(1200, 680);
      this.actions.moveTo(new Vector(-60, 680), 200)
  
      this.on('collisionstart', (event) => this.hitSomething(event, engine))
      this.on('exitviewport', () => this.kill())
    }
  
    hitSomething(event, engine) {
      if(event.other instanceof Player) {
        engine.emit('bush-exit', { Bush: this })
        this.kill()
      } 
      if(event.other instanceof Ground) {
        this.grounded = true
      }
    }
  }