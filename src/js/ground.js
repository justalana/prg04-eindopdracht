import { Actor, Engine, Vector, Keys, Sprite, Input, CollisionType, Shape, Color } from 'excalibur'
import { Resources, ResourceLoader } from './resources.js'

export class Ground extends Actor {

    constructor() {
      super({width: 1300, height:1, color: Color.Azure})
      this.body.collisionType = CollisionType.Fixed
    }

    onInitialize(engine) {
        this.pos = new Vector(650, 720);
    }
  }