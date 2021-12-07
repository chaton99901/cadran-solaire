let intensité = 0
servos.P1.setRange(10, 170)
basic.forever(function () {
    intensité = pins.analogReadPin(AnalogPin.P0)
    if (intensité >= 1000) {
        servos.P1.setAngle(10)
    } else if (intensité < 1000 && intensité >= 900) {
        servos.P1.setAngle(26)
    } else if (intensité < 900 && intensité >= 800) {
        servos.P1.setAngle(42)
    } else if (intensité < 800 && intensité >= 700) {
        servos.P1.setAngle(58)
    } else if (intensité < 700 && intensité >= 600) {
        servos.P1.setAngle(74)
    } else if (intensité < 600 && intensité >= 500) {
        servos.P1.setAngle(90)
    } else if (intensité < 500 && intensité >= 400) {
        servos.P1.setAngle(106)
    } else if (intensité < 400 && intensité >= 300) {
        servos.P1.setAngle(122)
    } else if (intensité < 300 && intensité >= 200) {
        servos.P1.setAngle(138)
    } else if (intensité < 200 && intensité >= 100) {
        servos.P1.setAngle(154)
    }
})
