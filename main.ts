input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    Número_aleatorio = randint(0, 7)
    if (Número_aleatorio == 1) {
        basic.showString("Si")
    } else if (Número_aleatorio == 2) {
        basic.showString("No")
    } else if (Número_aleatorio == 3) {
        basic.showString("A lo mejor")
    } else if (Número_aleatorio == 4) {
        basic.showString("Probablemente")
    } else if (Número_aleatorio == 5) {
        basic.showString("No creo")
    } else if (Número_aleatorio == 6) {
        basic.showString("Tal vez")
    } else {
        basic.showString(" No se")
    }
})
let Número_aleatorio = 0
basic.showString("Haz una pregunta")
basic.showNumber(8)
