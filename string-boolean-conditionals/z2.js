let userName = 'iMYA';
let userSurname = 'fAMILIA';

let newUserName = userName.substring(0,1).toUpperCase() + userName.substring(1).toLowerCase();
let newUserSurname = userSurname.substring(0,1).toUpperCase() + userSurname.substring(1).toLowerCase();

let result = newUserName == userName ? ('Имя осталось без изменений') : ('Имя было преобразовано');
let result2 = newUserSurname == userSurname ? ('Фамилия осталась без изменений') : ('Фамилия была преобразована');

console.log(result, result2, newUserName, newUserSurname);
