import { Actor, Engine, Vector, Keys, Sprite, SpriteSheet, Animation, range, Input } from 'excalibur'
import { Resources, ResourceLoader } from './resources.js'
import { Fish } from './object.js'
import { Coin } from './coin.js'

export class Player extends Actor {

  constructor() {
    // super({width: 70, height: 70 })
    super()
    
    const runSheet = SpriteSheet.fromImageSource({
        image: Resources.Player,
        grid: { rows: 1, columns: 3, spriteWidth: 96, spriteHeight: 96 }
    })
    console.log(runSheet.sprites);

    const idle = runSheet.sprites[0] // geen animatie
    // const runLeft = Animation.fromSpriteSheet(runSheet, 1, 80)
    const runRight = Animation.fromSpriteSheet(runSheet, range(1, 2), 200)

    this.graphics.add("idle", idle)
    // this.graphics.add("runleft", runLeft)
    this.graphics.add("runright", runRight)

    this.graphics.use(idle)
  }

  onInitialize(engine) {
    this.score = 0
    this.health = 100

    // this.graphics.use(Resources.FoxStill.toSprite());
    this.pos = new Vector(150, 400);
    this.vel = new Vector(0, 0);

    this.on('collisionstart', (event) => this.hitSomething(event))
  }

    
  onPreUpdate(engine) {
    let xspeed = 0;
    let yspeed = 0;
    this.graphics.use('idle')
    
    if (engine.input.keyboard.isHeld(Keys.W) || engine.input.keyboard.isHeld(Keys.Up)) {
      // yspeed = -100;
    }

    if (engine.input.keyboard.isHeld(Keys.A) || engine.input.keyboard.isHeld(Keys.Left)) {
      xspeed = -100
      // this.graphics.use('runleft')
    }
    
    if (engine.input.keyboard.isHeld(Keys.D) || engine.input.keyboard.isHeld(Keys.Right)) {
      xspeed = 50
      this.graphics.use('runright')
    }
    
    this.vel = new Vector(xspeed, yspeed);
    this.graphics.flipHorizontal = (this.vel.x < 0)
    
    // if (engine.input.keyboard.wasPressed(Keys.Space)) {
    //     console.log("shoot!")
    // }
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