let array = [];
let n = 1;
let m = 3;
let count = 10;

for (let i = 0; i < count; i++) {
    array.push(Math.round(Math.random() * (max - min) + min));
}

console.log(array);
