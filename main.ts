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
        Motor2,
        //%blockId=pawana_motordriver_motor_one_and_two
        //% block="モーター1+2"
        Motor1_2
    }

    //% subcategory=MotorDriver
    //% blockId=pawana_motordriver_motor_on
    //% block="%motor|オン 方向 %dir|スピード %speed"
    //% speed.min=0 speed.max=100
    //% weight=40
    export function motorOn(motor: Motors, dir: MotorDirection, speed: number = 100): void {
      let OutputVal = Math.clamp(0, 100, speed) * 10;

      switch (motor) {
          case Motors.Motor1:
              switch (dir) {
                  case MotorDirection.Forward:
                      pins.analogWritePin(AnalogPin.P11, OutputVal);
                      pins.digitalWritePin(DigitalPin.P12, 0);
                      break
                  case MotorDirection.Reverse:
                      pins.analogWritePin(AnalogPin.P12, OutputVal);
                      pins.digitalWritePin(DigitalPin.P11, 0);
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
                      pins.analogWritePin(AnalogPin.P14, OutputVal);
                      pins.digitalWritePin(DigitalPin.P13, 0);
                      break
              }            
              break;
          
          case Motors.Motor1_2:
            switch (dir) {
                case MotorDirection.Forward:
                    pins.analogWritePin(AnalogPin.P11, OutputVal);
                    pins.digitalWritePin(DigitalPin.P12, 0);
                    pins.analogWritePin(AnalogPin.P13, OutputVal);
                    pins.digitalWritePin(DigitalPin.P14, 0);
                    break
                case MotorDirection.Reverse:
                    pins.analogWritePin(AnalogPin.P12, OutputVal);
                    pins.digitalWritePin(DigitalPin.P11, 0);
                    pins.analogWritePin(AnalogPin.P14, OutputVal);
                    pins.digitalWritePin(DigitalPin.P13, 0);
                    break
            }
      }
  }
  
  //%subcategory=MotorDriver
  //% blockId=pawana_motordriver_motor_off
  //%block="モーター停止 %motor"
  //% weight=30
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
          case Motors.Motor1_2:
              pins.digitalWritePin(DigitalPin.P11, 0);
              pins.digitalWritePin(DigitalPin.P12, 0);
              pins.digitalWritePin(DigitalPin.P13, 0);
              pins.digitalWritePin(DigitalPin.P14, 0);
              break
      }
  }
  
  //%subcategory=MotorDriver
  //% blockId=pawana_motordriver_motor_turn
  //% block="方向 %dir|にスピード %speed|で回転"
  //% speed.min=0 speed.max=100
  export function motorTurn(dir:  MotorDirection, speed: number = 100): void {
    let OutputVal = Math.clamp(0, 100, speed) * 10;
    
    switch (dir) {
      case MotorDirection.Forward:
          pins.analogWritePin(AnalogPin.P11, OutputVal);
          pins.digitalWritePin(DigitalPin.P12, 0);
          pins.analogWritePin(AnalogPin.P14, OutputVal);
          pins.digitalWritePin(DigitalPin.P13, 0);                    
          break
          
      case MotorDirection.Reverse:
          pins.analogWritePin(AnalogPin.P12, OutputVal);
          pins.digitalWritePin(DigitalPin.P11, 0);
          pins.analogWritePin(AnalogPin.P13, OutputVal);
          pins.digitalWritePin(DigitalPin.P14, 0);          
          break
      }
  }
  
  //%subcategory=MotorDriver
  //% blockId=pawana_motordriver_motor_go_and_stop
  //% block="方向 %dir|にスピード %speed|で進んで %timespan|ミリ秒後にストップ"
  //% speed.min=0 speed.max=100
  //% weight=10
  export function motorGoAndStop(dir:  MotorDirection, speed: number = 100, timespan: number = 1000) : void {
    let OutputVal = Math.clamp(0, 100, speed) * 10;
    
    switch (dir) {
      case MotorDirection.Forward:
          pins.analogWritePin(AnalogPin.P11, OutputVal);
          pins.digitalWritePin(DigitalPin.P12, 0);
          pins.analogWritePin(AnalogPin.P13, OutputVal);
          pins.digitalWritePin(DigitalPin.P14, 0);        
          break
      case MotorDirection.Reverse:
          pins.analogWritePin(AnalogPin.P12, OutputVal);
          pins.digitalWritePin(DigitalPin.P11, 0);
          pins.analogWritePin(AnalogPin.P14, OutputVal);
          pins.digitalWritePin(DigitalPin.P13, 0);
          break      
    }
    
    basic.pause(timespan);
    
    pins.digitalWritePin(DigitalPin.P11, 0);
    pins.digitalWritePin(DigitalPin.P12, 0);
    pins.digitalWritePin(DigitalPin.P13, 0);
    pins.digitalWritePin(DigitalPin.P14, 0);
  }
  
  //%subcategory=MotorDriver
  //% blockId=pawana_motordriver_motor_turn_and_stop
  //% block="方向 %dir|にスピード %speed|で回転して %timespan|ミリ秒後にストップ"
  //% speed.min=0 speed.max=100
  //% weight=20
  export function motorTurnAndStop(dir:  MotorDirection, speed: number = 100, timespan: number = 1000) : void {
    let OutputVal = Math.clamp(0, 100, speed) * 10;
    
    switch (dir) {
      case MotorDirection.Forward:
          pins.analogWritePin(AnalogPin.P11, OutputVal);
          pins.digitalWritePin(DigitalPin.P12, 0);
          pins.analogWritePin(AnalogPin.P14, OutputVal);
          pins.digitalWritePin(DigitalPin.P13, 0);
                 
          break
      case MotorDirection.Reverse:
          pins.analogWritePin(AnalogPin.P12, OutputVal);
          pins.digitalWritePin(DigitalPin.P11, 0);
          pins.analogWritePin(AnalogPin.P13, OutputVal);
          pins.digitalWritePin(DigitalPin.P14, 0);           
          
          break      
    }
    
    basic.pause(timespan);
    
    pins.digitalWritePin(DigitalPin.P11, 0);
    pins.digitalWritePin(DigitalPin.P12, 0);
    pins.digitalWritePin(DigitalPin.P13, 0);
    pins.digitalWritePin(DigitalPin.P14, 0);
  }
  
}
