let step = 0
let x = 0
let text = ""
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    step += 100
})
input.onButtonPressed(Button.A, function () {
    x = 0
    for (let index = 0; index < convertToText(step).length; index++) {
        text = convertToText(step).charAt(x)
        basic.showString(text)
        basic.clearScreen()
        basic.pause(100)
        x += 1
    }
})
input.onButtonPressed(Button.AB, function () {
    step = 0
})
input.onButtonPressed(Button.B, function () {
    step += 1
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    step += 10
})
