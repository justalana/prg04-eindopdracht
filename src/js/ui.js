import { ScreenElement, Label, Font, FontUnit, Vector, Color, Timer } from "excalibur"
import { Resources } from './resources.js'
import { Heart } from "./hearts.js"

export class UI extends ScreenElement {
    constructor(engine) {
        super()
        this.hearts = []
        this.score = 0
        this.timeLeft = 6
        this.engine = engine
    }

    onInitialize(engine) {
        this.scoreText = new Label({
            text: `Score: ${this.score}`,
            pos: new Vector(70, 30),
            font: new Font({
                family: 'impact',
                size: 40,
                unit: FontUnit.Px,
                color: Color.White
            })
        })
        this.addChild(this.scoreText)

        const self = this

        this.timer = new Timer({
            fcn: function () {
                self.counter(engine)
            },
            interval: 1000,
            repeats: true
        })
        engine.add(this.timer)
        this.timer.start()

        for (let i = 0; i < 3; i++) {
            const heart = new Heart()
            heart.graphics.use(Resources.Heart.toSprite())
            heart.pos = new Vector(1100 + (i * 40), 50)
            this.addChild(heart)
            this.hearts.push(heart)
        }

        engine.on('bush-exit', () => this.reduceHealth(engine))
    }

    counter(engine) {
        this.score++
        this.updateScore()
    }

    updateScore() {
        this.scoreText.text = `Score: ${this.score}`
    }

    reduceHealth() {
        if (this.hearts.length > 0) {
            const heart = this.hearts.pop()
            heart.kill()
        }

        if (this.hearts.length === 0) {
            this.engine.goToScene('gameOver')
        }
    }
}