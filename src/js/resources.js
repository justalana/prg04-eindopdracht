import { ImageSource, ImageWrapping, Sound, Resource, Loader, FontSource } from 'excalibur'

const Resources = {
    Player: new ImageSource('images/fox.png'),
    Heart: new ImageSource('images/heart.png'),
    Bush: new ImageSource('images/bush.png'),
    Background: new ImageSource('images/background.png', { wrapping: ImageWrapping.Repeat}),

    PixelFont: new FontSource('fonts/PressStart2P-Regular.ttf', 'PressStart')
}
const ResourceLoader = new Loader([
    Resources.Player,
    Resources.Heart,
    Resources.Bush,
    Resources.Background,
    Resources.PixelFont
])

export { Resources, ResourceLoader }