radio.onReceivedNumber(function (receivedNumber) {
    if (rallyActivo == true) {
        nezhaV2.setComboMotor(nezhaV2.MotorPostion.M1, nezhaV2.MotorPostion.M2)
        nezhaV2.comboRun(100, nezhaV2.VerticallDirection.Up)
        basic.pause(2000)
        nezhaV2.comboStop()
    } else if (receivedNumber == 1) {
        nezhaV2.setComboMotor(nezhaV2.MotorPostion.M1, nezhaV2.MotorPostion.M2)
        nezhaV2.comboStart(-30, 30)
        basic.pause(2000)
        nezhaV2.comboStop()
    } else if (receivedNumber == 2) {
        nezhaV2.setComboMotor(nezhaV2.MotorPostion.M1, nezhaV2.MotorPostion.M2)
        nezhaV2.comboRun(20, nezhaV2.VerticallDirection.Down)
        basic.pause(2000)
    } else {
        nezhaV2.comboStop()
    }
})
let rallyActivo = false
rallyActivo = true
radio.setGroup(1)
OLED.init(128, 64)
basic.forever(function () {
    radio.setGroup(1)
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(0)
        basic.showIcon(IconNames.Yes)
        basic.pause(1000)
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(1)
        basic.showIcon(IconNames.No)
        basic.pause(1000)
    } else if (input.isGesture(Gesture.Shake)) {
        basic.showIcon(IconNames.Asleep)
        radio.sendNumber(2)
        basic.pause(1000)
    } else {
        basic.showIcon(IconNames.Rabbit)
    }
})
basic.forever(function () {
    if (PlanetX_Basic.checkColor(PlanetX_Basic.ColorList.yellow)) {
        rallyActivo = false
        nezhaV2.comboStop()
        OLED.clear()
        OLED.writeStringNewLine("TRONADORA: Medicinal")
        basic.pause(5000)
        OLED.clear()
        rallyActivo = true
    } else if (PlanetX_Basic.checkColor(PlanetX_Basic.ColorList.green)) {
        rallyActivo = false
        nezhaV2.comboStop()
        OLED.clear()
        OLED.writeStringNewLine("MAGUEY: Diosa Mayahuel")
        basic.pause(5000)
        OLED.clear()
        rallyActivo = true
    } else {
    	
    }
})
