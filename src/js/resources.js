import { ImageSource, ImageWrapping, Sound, Resource, Loader, FontSource } from 'excalibur'

const Resources = {
    Fish: new ImageSource('images/fish.png'),
    Eyes: new ImageSource('images/googly-a.png'),
    Player: new ImageSource('images/player.png'),
    Coin: new ImageSource('images/coin.png'),
    Background: new ImageSource('images/background.png', { wrapping: ImageWrapping.Repeat}),

    PixelFont: new FontSource('fonts/PressStart2P-Regular.ttf', 'PressStart')
}
const ResourceLoader = new Loader([
    Resources.Fish,
    Resources.Eyes,
    Resources.Player,
    Resources.Coin,
    Resources.Background,
    Resources.PixelFont
])

export { Resources, ResourceLoader }