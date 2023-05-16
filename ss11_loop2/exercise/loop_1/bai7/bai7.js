let a = 1;
let b = 100;
for (; a <= b; a++) {
    if (a % 3 === 0 && a % 5 === 0) {
        document.writeln(`FizzBuzz <br>`);
    } else if (a % 5 === 0) {
        document.writeln(`Buzz <br>`);
    } else if (a % 3 === 0) {
        document.writeln(`Fizz <br>`);
    } else
        document.writeln(a + `<br>`);
}   // if (a % 3 === 0) {
    //     document.writeln(`Fizz`);
    // } else if (a % 5 === 0) {
    //     document.writeln(`Buzz`)
    // } else if (a % 3 === 0 && a % 5 === 0) {
    //     document.writeln(`FizzBuzz`)
    // }