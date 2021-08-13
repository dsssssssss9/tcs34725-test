input.onButtonPressed(Button.A, function () {
    colorbit_51bit.showColor(colorbit.rgb(envirobit.getRed(), envirobit.getGreen(), envirobit.getBlue()))
})
let colorbit_51bit: colorbit.Strip = null
envirobit.setColourIntegrationTime(24)
colorbit_51bit = colorbit.initColorBit(DigitalPin.P2, BitColorMode.RGB)
colorbit_51bit.setBrightness(64)
colorbit_51bit.showColorIcon(ColorIcon.Yes, colorbit.colors(BitColors.Indigo))
basic.pause(500)
colorbit_51bit.clear()
colorbit_51bit.show()
