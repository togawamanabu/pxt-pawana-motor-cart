
input.onButtonPressed(Button.A, () => {
    pawana.motorOn(pawana.Motors.Motor1, pawana.MotorDirection.Forward, 100);
    pawana.motorOn(pawana.Motors.Motor2, pawana.MotorDirection.Reverse, 100);
})

input.onButtonPressed(Button.B, () => {
    pawana.motorOn(pawana.Motors.Motor1, pawana.MotorDirection.Reverse, 100);
    pawana.motorOn(pawana.Motors.Motor2, pawana.MotorDirection.Forward, 100);
})

input.onButtonPressed(Button.AB, () => {
    pawana.motorOff(pawana.Motors.Motor1);
    pawana.motorOff(pawana.Motors.Motor2);
})
