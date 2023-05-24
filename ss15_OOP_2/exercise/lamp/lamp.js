class Lamp {
    constructor(name) {
        this.status = false;
        this.name = name;
    }

    turnOn() {
        this.status = true;
        alert(`${this.name} is turning on`);
    }

    turnOff() {
        this.status = false;
        alert(`${this.name} is turning off`);
    }
}

class SwitchButton {
    constructor() {
        this.status = false;
        this.lamp;
    }

    connectToLamp(lamp) {
        this.lamp = lamp;
    }

    switchOn() {
        this.status = true;
        this.lamp.turnOn();
    }

    switchOff() {
        this.status = false;
        this.lamp.turnOff();
    }

}

let lamp1 = new Lamp(`The red light`);
let switch1 = new SwitchButton();
switch1.connectToLamp(lamp1);
switch1.switchOn();
switch1.switchOff();


let lamp2 = new Lamp(`The blue light`);
switch1.connectToLamp(lamp2);
switch1.switchOn();
switch1.switchOff();



