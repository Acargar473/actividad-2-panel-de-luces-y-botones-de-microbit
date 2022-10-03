input.onButtonPressed(Button.A, function () {
    basic.showNumber(randint(1, 10))
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.pause(500)
    while (true) {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.pause(500)
    while (true) {
        basic.showString("Hello!")
    }
})
basic.forever(function () {
	
})
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    basic.showIcon(IconNames.SmallHeart)
})
