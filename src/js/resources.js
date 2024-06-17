import { ImageSource, ImageWrapping, Sound, Resource, Loader, FontSource } from 'excalibur'

const Resources = {
    Fish: new ImageSource('images/fish.png'),
    Player: new ImageSource('images/fox.png'),
    Heart: new ImageSource('images/heart.png'),
    Coin: new ImageSource('images/coin.png'),
    Background: new ImageSource('images/background.png', { wrapping: ImageWrapping.Repeat}),

    PixelFont: new FontSource('fonts/PressStart2P-Regular.ttf', 'PressStart')
}
const ResourceLoader = new Loader([
    Resources.Fish,
    Resources.Player,
    Resources.Heart,
    Resources.Coin,
    Resources.Background,
    Resources.PixelFont
])

export { Resources, ResourceLoader }