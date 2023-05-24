function Hero(image, top, left, size) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }

    this.moveRight = function () {
        this.left += 20;
        console.log('okay: ' + this.left);
    }
    this.moveLeft = function () {
        this.left -= 20;
        console.log('okay: ' + this.left);
    }
}

var hero = new Hero(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVEta2oPbOwGuI0mqCrlxpUTAKPu4GsaqLYQ&usqp=CAU`, 20, 30, 200);
let flag = true;

function start() {
    if (hero.left < window.innerWidth - hero.size && flag) {
        hero.moveRight();
    } else {
        flag = false;
        moveLeft();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 60)
}

function moveLeft() {
    hero.moveLeft();
    if (hero.left <= hero.size) {
        flag = true;
    }
}

start();