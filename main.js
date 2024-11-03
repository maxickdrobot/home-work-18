console.log('#1. Приклад домашнього завдання з JavaScript')

/*
 * #1
 *
 * Створіть змінні зі значеннями.
 */

// ім'я змінної: myNum, значення: 10
// ім'я змінної: myStr, значення: 'some string'
// ім'я змінної: myBool, значення: true
// ім'я змінної: myArr, значення: 1, 2, 3, 4, 5
// ім'я змінної myObj, значення: first: 'First Name', last: 'Last Name'


document.write("<h2>Task 1</h2>");

let myNum = 10;
let myStr = "some string";
let myBool = true;
let myArr = [1, 2, 3, 4, 5];
let myObj = {
    first: "First Name",
    last: "Last Name"
};

document.write("<p>myNum: " + myNum + "</p>");
document.write("<p>myStr: " + myStr +"</p>");
document.write("<p>myBool: " + myBool + "</p>");
document.write(`<p>myArr: [${myArr}]</p>`);
document.write(`<p>
                    myObj {
                    <br/>
                    first: ${myObj.first}
                    <br/>
                    last: ${myObj.last}
                    <br/>}
                </p>`);

/*
 * #2
 *
 * Відформатуйте ціле число, яке зберігається в змінній myNum, щоб отримати результат з 2 знаками після коми.
 * Результат збережіть у змінній decimal2.
 */

// decimal2

document.write("<h2>Task 2</h2>");

let decimal2 = myNum.toFixed(2);

document.write("decimal2: " + decimal2);


/*
 * #3
 *
 * Створіть змінну i, для якої виконайте префіксний та постфіксний інкремент та декремент.
 * Поекспериментуйте з результатами, виводячи їх у консоль.
 */

// i

document.write("<h2>Task 3</h2>");
console.log("Task 3");

let i = 9;

document.write("<p>i before i++: " + i + "</p>");
document.write("i++: " + i++)
document.write("<p>i after i++: " + i + "</p>");
document.write("<br />");

document.write("<p>i before ++i: " + i + "</p>");
document.write("++i: " + ++i)
document.write("<p>i - after ++i: " + i + "</p>");
document.write("<br />");

document.write("<p>i before i--: " + i + "</p>");
document.write("i--: " + i--)
document.write("<p>i after i--: " + i + "</p>");
document.write("<br />");

document.write("<p>i before --i: " + i + "</p>");
document.write("--i: " + --i)
document.write("<p>i after --i: " + i + "</p>");

console.log("i before i++: " + i);
console.log("i++: " + i++);
console.log("i after i++: " + i);
console.log("");

console.log("i before ++i: " + i);
console.log("++i: " + ++i);
console.log("i after ++i: " + i);
console.log("");

console.log("i before i--: " + i);
console.log("i--: " + i--);
console.log("i after i--: " + i);
console.log("");

console.log("i before --i: " + i);
console.log("--i: " + --i);
console.log("i after --i: " + i);
console.log("");


/*
 * #4
 *
 * Створіть нову змінну myTest та присвойте їй значення 20.
 * Виконайте присвоєння з операцією, використовуючи оператори: +=, –=, *=, /=, %=.
 * Результати присвоюються в myTest, потім виводяться в консоль.
 * У розрахунках можна використовувати раніше оголошену змінну myNum та/або числа.
 */

// myTest
// +=
// –=
// *=
// /=
// %=

document.write("<h2>Task 4</h2>");
console.log("Task 4");

let myTest = 20;
document.write(`<p>myTest: ${myTest}</p>`);
console.log(`myTest: ${myTest}`);

myTest += 20;
document.write(`<p>myTest += 20: ${myTest}</p>`);
console.log(`myTest += 20: ${myTest}`);

myTest -= myNum;
document.write(`<p>myTest -= myNum: ${myTest}</p>`);
console.log(`myTest -= myNum: ${myTest}`);

myTest *= 2;
document.write(`<p>myTest *= 2: ${myTest}</p>`);
console.log(`myTest *= 2: ${myTest}`);

myTest /= 5;
document.write(`<p>myTest /= 5: ${myTest}</p>`);
console.log(`myTest /= 5: ${myTest}`);

myTest %= 5;
document.write(`<p>myTest %= 5: ${myTest}</p>`);
console.log(`myTest %= 5: ${myTest}`);
console.log("");

/*
 * #5
 *
 * Використовуючи властивості та методи об'єкта Math, присвойте змінним та відобразіть у консолі.
 */

// константа Pi → myPi
// округлене значення числа 89.279 → myRound
// випадкове число між 0..10 → myRandom
// 3 у 5 степені → myPow

document.write("<h2>Task 5</h2>");
console.log("Task 5");

let myPi = Math.PI;
document.write("<p>myPi: " + myPi + "</p>");
console.log("myPi: " + myPi);

let myRound = Math.round(89.279);
document.write("<p>myRound: " + myRound + "</p>");
console.log("myRound: " + myRound);

let myRandom = Math.round(Math.random() * 10);
document.write("<p>myRandom: " + myRandom + "</p>");
console.log("myRandom: " + myRandom);

let myPow = Math.pow(3, 5);
document.write("<p>myPow: " + myPow + "</p>");
console.log("myPow: " + myPow);
console.log("");

/*
 * #6
 *
 * Створіть об'єкт з ім'ям strObj.
 * Присвойте ключу str рядок тексту "Мама мыла раму, рама мыла маму", ключу length встановіть довжину цього рядка.
 */

// Мама мыла раму, рама мыла маму
// strObj

document.write("<h2>Task 6</h2>");

let strObj = {
    str: "Мама мыла раму, рама мыла маму",
};
strObj.length = strObj.str.length;

document.write(`<p>
    strObj {
    <br/>
    str: ${strObj.str}
    <br/>
    length: ${strObj.length}
    <br/>}
</p>`);

/*
 * #7
 *
 * Перевірте наявність тексту 'рама' у полі str об'єкта strObj (див.п.6), результат збережіть у змінній isRamaPos та виведіть її у консоль.
 * Результатом для isRamaPos має бути індекс входження.
 * Результатом для isRama має бути буль true.
 */

// isRamaPos
// isRama

document.write("<h2>Task 7</h2>");
console.log("Task 7");

let isRamaPos = strObj.str.indexOf("рама");
let isRama = (isRamaPos !== -1) ? true : false;

document.write("<p>isRamaPos: " + isRamaPos + "</p>");
console.log("isRamaPos: " + isRamaPos);
document.write("<p>isRama: " + isRama + "</p>");
console.log("isRama: " + isRama);
console.log("");

/*
 * #8
 *
 * Виконайте перейменування підрядка у рядку.
 * Як вихідний рядок використовуйте значення поля str об'єкта strObj (див.п.6), результат збережіть у змінній strReplace та відобразіть у консолі.
 * Вихідний рядок: 'Мама мыла раму, рама мыла маму'
 *      Результат: 'Мама моет раму, Рама держит маму'
 */

// strReplace

document.write("<h2>Task 8</h2>");
console.log("Task 8");

let strReplace = strObj.str.replace("мыла", "моет").replace("рама мыла", "Рама держит");

document.write(`<p>str: ${strObj.str}</p>`)
console.log(`str: ${strObj.str}`);
document.write(`<p>strReplace: ${strReplace}</p>`)
console.log(`strReplace: ${strReplace}`);
console.log("");

/*
 * #9
 *
 * Преобразуйте текст 'some STRING' у верхній, потім у нижній регістри, результат відобразіть у консолі.
 */

// var someStr = 'some STRING'
// var upperStr
// var lowerStr

document.write("<h2>Task 9</h2>");
console.log("Task 9")

let someStr = 'some STRING';
let upperStr = someStr.toUpperCase();
let lowerStr = someStr.toLowerCase();

document.write(`<p>someStr: ${someStr}</p>`)
console.log(`someStr: ${someStr}`);
document.write(`<p>upperStr: ${upperStr}</p>`)
console.log(`upperStr: ${upperStr}`);
document.write(`<p>lowerStr: ${lowerStr}</p>`)
console.log(`lowerStr: ${lowerStr}`);