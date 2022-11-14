let a = 13.890123;
let b = 2.891564;
let precision = 3;

let aNormalized = Math.round(
    a * Math.pow(10, precision)
);
let bNormalized = Math.round(
    b * Math.pow(10, precision)
);

console.log('Исходные числа равны', a === b);
console.log('Числа равны', aNormalized === bNormalized);
console.log('Первое число больше', aNormalized > bNormalized);
console.log('Первое число меньше', aNormalized < bNormalized);
console.log('Дробь A', Math.floor(a % 1 * Math.pow(10, precision)));
console.log('Дробь B', Math.floor(b % 1 * Math.pow(10, precision)));
