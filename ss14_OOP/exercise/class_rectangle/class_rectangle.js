class rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    };

    getHeight() {
        return this.height;
    };

    getWidth() {
        return this.width;
    };

    setHeight(height) {
        this.height = height;
    };

    setWidth(width) {
        this.width = width;
    };

    getArea() {
        return this.height * this.width;
    };

    getPri() {
        return (this.height + this.width) * 2;
    };

    toString() { // biểu diễn thông tin của đối tượng, tương tự return trong hàm.
        return `The height is ${this.height} and the width is ${this.width}. The area is ${this.getArea()} and the Pri is ${this.getPri()}`
    };
}

let a = +prompt(`Let enter any height number `);
let b = +prompt(`Let enter any width number `);

let newRectangle = new rectangle(a, b);


document.write(newRectangle.toString())
