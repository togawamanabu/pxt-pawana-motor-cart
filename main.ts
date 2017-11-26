namespace pawana {
    export enum MotorDirection {
      //% block="正転"
      Forward,
      //% block="反転"
      Reverse
    }

    export enum Motors {
        //%blockId=pawana_motordriver_motor_one
        //% block="モーター1"
        Motor1,
        //%blockId=pawana_motordriver_motor_two
        //% block="モーター2"
        Motor2
    }

    //% subcategory=MotorDriver
    //% blockId=pawana_motordriver_motor_on
    //% block="%motor|オン 方向 %dir|スピード %speed"
    //% speed.min=0 speed.max=100
    export function motorOn(motor: Motors, dir: MotorDirection, speed: number): void {
      let OutputVal = Math.clamp(0, 100, speed) * 10;

      switch (motor) {
          case Motors.Motor1:
              switch (dir) {
                  case MotorDirection.Forward:
                      pins.analogWritePin(AnalogPin.P11, OutputVal);
                      pins.digitalWritePin(DigitalPin.P12, 0);
                      break
                  case MotorDirection.Reverse:
                      pins.analogWritePin(AnalogPin.P11, OutputVal);
                      pins.digitalWritePin(DigitalPin.P12, 0);
                      break
              }
              break;

          case Motors.Motor2:
              switch (dir) {
                  case MotorDirection.Forward:
                      pins.analogWritePin(AnalogPin.P13, OutputVal);
                      pins.digitalWritePin(DigitalPin.P14, 0);
                      break
                  case MotorDirection.Reverse:
                      pins.analogWritePin(AnalogPin.P13, OutputVal);
                      pins.digitalWritePin(DigitalPin.P14, 0);
                      break
              }
              break;
      }
  }
  //%subcategory=MotorDriver
  //% blockId=pawana_motordriver_motor_off
  //%block="モーター停止 %motor"
  export function motorOff(motor: Motors): void {
      switch (motor) {
          case Motors.Motor1:
              pins.digitalWritePin(DigitalPin.P11, 0);
              pins.digitalWritePin(DigitalPin.P12, 0);
              break
          case Motors.Motor2:
              pins.digitalWritePin(DigitalPin.P13, 0);
              pins.digitalWritePin(DigitalPin.P14, 0);
              break
      }
  }
}
