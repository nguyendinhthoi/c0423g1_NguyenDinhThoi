class Apple {
    constructor(weight) {
        this.weight = weight;
    }

    getWeight() {
        return this.weight;
    }

    isEmpty() {
        if (this.weight <= 0) {
            return true;
        } else {
            return false;
        }
    }

    decreaseApple() {
        if (this.isEmpty()) {
            alert(`There is no apple`);
        } else {
            this.weight--;
        }
    }
}

class Human {
    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }

    getName() {
        return this.name;
    }

    getWeight() {
        return this.weight;
    }

    isMale() {
        return true
    }

    getGender() {
        if (this.isMale()) {
            return `Male`;
        } else {
            return `Female`;
        }
    }

    say(string) {
        console.log(string);
    }

    checkApple(apple) {
        return apple.isEmpty();
    }

    eat(apple) {
        if (apple.getWeight() > 0) {
            apple.decreaseApple();
            this.weight++;
        } else {
            alert(`The apple is over`);
        }
    }

    getInfo(human) {
        alert(human.name + ' ' + human.weight + ' ' + human.getGender());
    }
}

let adam = new Human(`Adam`, true, 60);
let eva = new Human(`Eve`, false, 50);
let newApple = new Apple(10);
adam.say("I am Adam");
document.write('<br/>');
eva.say("I am Eva");

while (newApple.isEmpty() !== true) {
    document.write("Adam eat apple");
    document.write(`<br>`);
    adam.eat(newApple);

    document.write(`The apple has :`);
    document.write(`<br>`);
    document.write(`${newApple.getWeight()} apple`)
    document.write(`<br>`);
    document.write(`The weight of Adam is ${adam.getWeight()} `);
    document.write("<br>")
    document.write(`<br>`);

    document.write("Eva eat apple");
    document.write(`<br>`);
    eva.eat(newApple);

    document.write(`The apple has :`);
    document.write(`<br>`);
    document.write(`${newApple.getWeight()} apple`)
    document.write(`<br>`);
    document.write(`The weight of Eva is ${eva.getWeight()} `);
    document.write("<br>")
    document.write("<br>")
}