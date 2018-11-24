// 1. Якщо змінна a дорівнює нулю, то виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте роботу скрипта при a, що дорівнює 1, 0, -3
/*
let a= 0;
if (a !== 0) {
    console.log('Невірно');
}else {
    console.log('Вірно');
}
*/

// 2. В змінної min лежить число від 0 до 59.
// Визначте в яку чверть години потрапляє це число (в першу, другу, третю або четверту).
/*
let min =-1;
if (min >= 0 && min <=15) {
    console.log('Це перша чверть');
}else if (min>15 && min<=30){
    console.log('Це друга чверть');
}else if (min>30 && min<=45) {
    console.log('Це третя чверть');
}else if (min>45 && min <=59) {
    console.log('Це четверта чверть');
}else {
    console.log('you made a mistake');
}
*/

// 3.Якщо змінна a дорівнює або менше 1, а змінна b більше або дорівнює 3,
//     то виведіть суму цих змінних,
//     інакше виведіть їх різницю (результат віднімання).
// Перевірте роботу скрипта при a і b, що дорівнює 1 і 3, 0 і 6, 3 і 5.
/*
let a=3;
let b=5;
let c;
if (a<=1 && b>=3) {
    c= a+b;
    console.log(c);
}else {
    c= a-b;
    console.log(c);
}
*/

// 4. В змінної month лежить якесь число з інтервалу від 1 до 12.
// Визначте в яку пору року потрапляє цей місяць (зима, літо, весна, осінь).
/*
let month=3;
if (month>=3 && month<6){
    console.log('Це весна');
}else if (month>=6 && month<9){
    console.log('Це літо');
}else if (month>=9 && month<12){
    console.log('Це осінь');
}else {
    console.log('Це зима');
}
*/

// 6. Три різних числа вводяться через prompt().
//     За допомоги if else вивести іх в порядку зростання.
/*
let a=prompt('Введіть число a');
let b=prompt('Введіть число b');
let c=prompt('Введіть число c');
if (a<b && a<c && b<c) {
    console.log(a,b,c)
}else if (a<b && a<c && b>c){
    console.log(a,c,b)
}else if (b<a && b<c && a<c){
    console.log(b,a,c)
}else if (b<a && b<c && a>c){
    console.log(b,c,a)
}else if (c<a && c<b && a<b){
    console.log(c,a,b)
}else if (c<a && c<b && a>b){
    console.log(c,b,a)
}else {
    console.log('It is not a number or it the same number');
}
*/

// 5. За допомоги %, спробувати "реверснути" трьохзначне число. Приклад 412 => 214
/*
let x = '';
let num = 412;
while(num>0){
    x = x + (num%10);
    num = parseInt(num/10);
}
console.log(x);
*/
//method-2

let r = 0;
let num = 412;

while (num) {
    r = r * 10;
    r = r + num % 10;
    num = Math.floor(num / 10);
}
console.log(r);

// Решите задачу через switch-case
// Переменная num может принимать 4 значения: 1, 2, 3 или 4.
//     Если она имеет значение '1', то в переменную result запишем 'зима',
//         если имеет значение '2' – 'весна' и так далее
/*
switch (num=7888){
    case 1:
        result='зима';
        break;
    case 2:
        result='весна';
        break;
    case 3:
        result='лето';
        break;
    case 4:
        result='осень';
        break;
    default:
        result='что то не то';
}
console.log(result);
*/

// Все параматры получаем с клавиатуры!!!!
//     Имитируем поведение пешехода на перекстке.
//     Если светофор зеленый - вывести "иди".
//     Если светофор желтый - вывести "подожди".
//     Если светофор красный - вывести "стой".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!
/*
let trafficLights=prompt('Whitch is color now');
if (trafficLights==='green'){
    console.log('go');
}else if(trafficLights==='yellow'){
    console.log('wait');
}else  if(trafficLights==='red'){
    console.log('stop');
} else {
    console.log('do what u need');
}
*/

// Все параметры получаем с клавиатуры!!!!
//     Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
//     Улучшаем предыдущее задание.
//     Если светофор зеленый и машин нет - вывести "иди".
//     Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
//     Если светофор желтый и машин нет - вывести "все рано жди".
//     Если светофор красный и машин нет- вывести "стой все рано".
//     Если светофор красный - и машины есть вывести "стой и жди".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!

/*
let trafficLights=prompt('Whitch is color now','');
let isRoadClear=prompt('Is road clear?','');
if (trafficLights==='green' && isRoadClear==='yes'){
    console.log('go');
}else if(trafficLights==='yellow' || (trafficLights==='green' && isRoadClear==='no')){
    console.log('wait');
}else  if(trafficLights==='red' && (isRoadClear==='no' || isRoadClear==='yes')){
    console.log('stop');
} else {
    console.log('do what u need');
}
*/

// 1. яка різниця між let / var?
// 2. typeof що повертає при застосуванні до різних типів?
//     3. Яка різниця між "" '' ``?
//     4. Що таке scope?
//     5. опретаори boolean`a
//         6. різниця між switch та if
//         7.
//         [1,2,[1,2!,3] , 4,5,6]
//         [123,21,123,[123,43], [123,4,4,4,6!] ,true]
//         [['hello','oktenweb'],'asd','qwe', ['hello','oktenweb!']]
//         8 .
//
//         let legacy = {
//         type: 'sedan',
//         manufaturer: 'subaru',
//         model: 'legacy',
//         engine: {
//         type: 'ej',
//         series: 204,
//         volume: 2,
//         horsePower: 164
//         },
//         transmission: {
//         type: '4eat'
//         },
//         year: 2007,
//         vinCode: 'bl5lasd123lxcz',
//         color: 'silver'
//         }
