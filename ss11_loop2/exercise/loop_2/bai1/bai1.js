//in ra 50 so fibonacci
let a = 0;
let b = 1;
let c;
for (i = 0; i < 50; i++) {
    document.writeln(b);
    c = a + b;
    a = b;
    b = c;
}