import { Scene, Label, Font, FontUnit, Vector, Color, Keys, Timer } from "excalibur"
import { Resources } from './resources.js'
import { Background } from './background.js'
import { Player } from './player.js'
import { Ground } from './ground.js'
import { UI } from './ui.js'
import { Bush } from './bush.js'

export class Intro extends Scene {
    onInitialize(engine) {
        this.title = new Label({
            text: 'Fox\'s Journey',
            pos: new Vector(150, 30),
            font: new Font({
                family: 'impact',
                size: 80,
                unit: FontUnit.Px,
                color: Color.Black
            })
        })
        engine.add(this.title)

        this.instructions = new Label({
            text: 'Press W to jump',
            pos: new Vector(30, 200),
            font: new Font({
                family: 'impact',
                size: 40,
                unit: FontUnit.Px,
                color: Color.White
            })
        })
        engine.add(this.instructions)

        this.purpose = new Label({
            text: 'Keep running for as long as you can',
            pos: new Vector(30, 350),
            font: new Font({
                family: 'impact',
                size: 40,
                unit: FontUnit.Px,
                color: Color.White
            })
        })
        engine.add(this.purpose)

        this.start = new Label({
            text: 'Press SPACE to start running!',
            pos: new Vector(30, 500),
            font: new Font({
                family: 'impact',
                size: 40,
                unit: FontUnit.Px,
                color: Color.White
            })
        })
        engine.add(this.start)
    }

    onPreUpdate(engine) {
        let kb = engine.input.keyboard

        if (kb.wasPressed(Keys.Space)) {
            engine.goToScene('game')
        }
    }
}

export class GameScene extends Scene {

    onInitialize(engine) {
        this.createBackground()

        const ground = new Ground()
        this.add(ground)

        const player = new Player()
        this.add(player)

        this.addBush = new Timer({
            fcn: () => this.createBush(),
            interval: 3000,
            repeats: true
        })
        this.add(this.addBush)
        this.addBush.start()

        this.ui = new UI(this, engine)
        this.add(this.ui)

        
    }

    createBackground() {
        const bg = new Background(Resources.Background.toSprite())
        this.add(bg)
    }

    createBush() {
        const bush = new Bush()
        this.add(bush)
        // this.bushes.push(bush)
    }

    updateScore() {
        if (this.ui) {
            this.engine.score++;
            this.ui.updateScore(this.engine.score)
        }

        // if (this.engine.score === 20) {
        //     this.engine.goToScene('gameOver')
        // }
    }
}

export class GameOver extends Scene {
    onInitialize(engine) {
        this.gameover = new Label({
            text: 'You got bushed',
            pos: new Vector(30, 200),
            font: new Font({
                family: 'impact',
                size: 40,
                unit: FontUnit.Px,
                color: Color.Black
            })
        })
        engine.add(this.gameover)
    }
}