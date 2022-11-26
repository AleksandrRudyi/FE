//console.log(5);

// let, const, var

//const number = 64;

//console.log(number);

//type - number, string

//let person = 18;
//person = "Alex";
//console.log(person);

// названия для переменных:  латинские буквы, _ , цыфры

// camelCase
//personName

// snake_case
//person_name


//alert

//alert("Hello world!")

//prompt

//let age = prompt("How old are you?"); // return string 25 > "25"
//console.log(age);

//typeof

//console.log(typeof age);


//+, -, / , %, **
//console.log(5 ** 2); // > 25

//const test = "1";
//console.log(test);
//console.log(+test);
//console.log(+"25" + +"16");
//console.log("25" - "16");

// канкатинация
// интерполяция

//console.log("my name is" + " " + "Alex")

//const r = 12;
//const g = 34;
//const b = 14;

//console.log("rgb(" +  r + "," + g + "," + b + ")");

//console.log(`rgb(${r}, ${g}, ${b})`);

//const num = 25;
//const string = num +"";
//console.log(typeof num, num);
//console.log(typeof string, string);

//console.log(+"a");
//NaN - not a number

//console.log("b" + "a" + + "a" + "a");

// ==, ===

//console.log("1" == 1);
//console.log("1" === 1);

//console.log(NaN === NaN);

// isNaN => true/false
//console.log(isNaN(a));
//console.log(isNaN(5));



//let age = prompt("How old are you?");
//let days = age * 365;
//console.log(days);

// 5 + 2 => 7 ** 2
//let age = prompt("How old are you?");
//let days = (+age + + 2)**2;
//console.log(days);

//console => "yes" , "no";

// if else

//let num1 = prompt ("Add first number");
//let num2 = prompt ("Add second number");

//if(num1 === num2){
//    console.log("yes");
//} else{
//   console.log("no");
//}

//let num = prompt ("Add number");

//if(num == 0){
//    console.log("yes");
//} else{
//    console.log("no");
//}

//let num = prompt("add");
//if (+num !== 0){
//    console.log(num + " " + "no")
//} else{
//    console.log(`${num} yes 0`);
//}

// let num1 = prompt ("Add first number");
// let num2 = prompt ("Add second number");

// if(+num1 > +num2){
//     console.log("первое число больше второго");
// } else if(+num2 > +num1){
//     console.log("второе число больше первого");
// }else{
//     console.log("оба числа равны");
// }

//Написать программу, которая получает через prompt число и выводит одну из строк "число четное", " число нечетное" или  "чиcло равно нулю"

// let num = prompt("add a number");
// if(+num === 0){
//     console.log("чиcло равно нулю")
// } else if(+num % 2 === 0) {
//     console.log(`${num} - число четное`);
// } else{
//     console.log(`${num} - число нечетное`);
// }

//isNaN

let nun = prompt("add a number");
if(isNaN(+num)){
    console.log("получится NaN");
}else{
    console.log("можно приобразовать в число");
}