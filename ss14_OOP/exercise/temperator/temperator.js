class temperator {
    constructor(C) {
        this.C = C;
    };

    getToF() {
        return (this.C * 1.8) + 32
    };

    getToK() {
        return this.C + 273.15
    };

    toString() {
        return `${this.C} degrees C = ${this.getToF()} degrees F   <br>${this.C} degrees C = ${this.getToK()} degrees K `;
    };
}

let a = +prompt(`Let enter degrees C`);
let degreeC = new temperator(a);
document.write(degreeC.toString());