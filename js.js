class SwitchButton{
    constructor() {
        this.status = true;
        this.lamp = electricLamp;
    }

    getStatus () {
        return this.status;
    };
    setStatus (value) {
        this.status = value;
    };

    conecttoLamp(lamp) {
        this.lamp = lamp;
    };
    switch() {
        if (this.getStatus()) {
            this.setStatus(false);
            this.turnOn();
        } else {
            this.setStatus(true);
            this.turnOff();
        }
    };
    turnOn = function () {
        this.lamp.turnOn();
    };
    turnOff = function () {
        this.lamp.turnOff();
    }
}

class electricLamp {
    constructor() {
        this.status = true;
    }
    getStatus() {
        return this.status;
    };
    setStatus(value) {
        this.status = value;
    };

    turnOn() {
        this.setStatus(true);
        this.eLamp();
    };
    turnOff() {
        this.setStatus(false);
        this.eLamp();
    };
    eLamp() {
        if (this.getStatus()){
            document.getElementById("bulb").src = 'off.png';
        } else {
            document.getElementById('bulb').src = 'on.png';
        }
    };
}
let Lamp = new electricLamp();
let Bulb1 = new SwitchButton();
Bulb1.conecttoLamp(Lamp);
Bulb1.switch();