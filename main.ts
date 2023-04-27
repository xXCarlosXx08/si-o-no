input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    Número_aleatorio = randint(0, 7)
    if (Número_aleatorio == 1) {
        basic.showString("Si")
        music.playMelody("- - C A E D - - ", 120)
    } else if (Número_aleatorio == 2) {
        basic.showString("No")
        music.playMelody("E G E - G - A E ", 120)
    } else if (Número_aleatorio == 3) {
        basic.showString("A lo mejor")
        music.playMelody("F E G - C C5 - B ", 120)
    } else if (Número_aleatorio == 4) {
        basic.showString("Probablemente")
        music.playMelody("C5 E B F - - - - ", 120)
    } else if (Número_aleatorio == 5) {
        basic.showString("No creo")
        music.playMelody("F D B F D E B - ", 120)
    } else if (Número_aleatorio == 6) {
        basic.showString("Tal vez")
        music.playMelody("- E B F B - - - ", 120)
    } else {
        basic.showString(" No se")
        music.playMelody("E G D F E A - - ", 120)
    }
})
let Número_aleatorio = 0
basic.showString("Haz una pregunta")
basic.showNumber(8)
