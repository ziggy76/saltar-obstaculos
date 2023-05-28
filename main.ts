input.onButtonPressed(Button.A, function () {
    jugador_abajo.change(LedSpriteProperty.Y, -1)
    jugadorarriba.change(LedSpriteProperty.Y, -1)
    basic.pause(1000)
    jugador_abajo.change(LedSpriteProperty.Y, 1)
    jugadorarriba.change(LedSpriteProperty.Y, 1)
})
let jugador_abajo: game.LedSprite = null
let jugadorarriba: game.LedSprite = null
jugadorarriba = game.createSprite(1, 3)
jugador_abajo = game.createSprite(1, 4)
let piedra = game.createSprite(4, 4)
basic.forever(function () {
    piedra.change(LedSpriteProperty.X, -1)
    basic.pause(500)
    if (piedra.isTouching(jugador_abajo)) {
        game.gameOver()
    }
    if (piedra.get(LedSpriteProperty.X) == 0) {
        piedra.set(LedSpriteProperty.X, 4)
        basic.pause(500)
    }
})
