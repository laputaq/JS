let roadMines = [true, false, false, false, false, false, false, false, false, true];

let i = 0;
let y = 2;

for (let road of roadMines) {
    console.log(`Танк переместился на ячейку ${++i}`);

    if (road === true) {
        let lives = y--;

        console.log('Танк наехал на мину');
        console.log('Осталось жизней: ' + y);

    }
    if (y <= 0) {
        let lives = y--;

        console.log('танк уничтожен');
        break;

    }
};
