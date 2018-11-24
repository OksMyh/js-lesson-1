
// Зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. Перебрати його циклом while
/*
let arr=[2,17,13,6,22,31,45,66,100,-18];
let i=0;
while (i<arr.length) {
    console.log(arr[i]);
    i++
}
*/

//     2. перебрати його циклом for
/*
let arr=[2,17,13,6,22,31,45,66,100,-18];
for(let i=0;i<arr.length; i++){
    console.log(arr[i]);
}
*/
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
/*
//1-method
let arr=[2,17,13,6,22,31,45,66,100,-18];
let i=0;
while(i<arr.length){
    if (i%2===1){
        console.log(arr[i]);
    }
    i++;
}
*/
/*
//2-method
let arr=[2,17,13,6,22,31,45,66,100,-18];
let i=0;
while(i<arr.length){
    if  (i>=1) {
        i = 2 * i - 1
        console.log(arr[i]);
    }
        i++;
}
*/
//     4. перебрати циклом for та вивести  числа тільки з непарним індексом
/*
let arr=[2,17,13,6,22,31,45,66,100,-18];
for (let i=0;i<arr.length;i++){
    if (i%2===1){
        console.log(arr[i]);
    }
}
*/
//     5. перебрати циклом while та вивести  числа тільки парні  значення
/*
let arr=[2,17,13,6,22,31,45,66,100,-18];
let i=0;
while (i<arr.length){
    if (i%2===0){
        console.log(arr[i]);
    }
    i++;
}
*/
//     6. перебрати циклом for та вивести  числа тільки парні  значення
/*
let arr=[2,17,13,6,22,31,45,66,100,-18];
for (let i=0;i<arr.length;i++){
    if (i%2===0){
        console.log(arr[i]);
    }
}
*/
//     7. замінити кожне число кратне 3 на слово "okten"
/*
let arr=[2,17,13,6,22,31,45,66,100,-18];
for (let i=0;i<arr.length;i++) {
    if (arr[i]%3 === 0) {
        arr[i]='okten';
        console.log(arr[i]);
    }
}
*/
//     8. Вивести масив в зворотньому порядку.
/*
let arr=[2,17,13,6,22,31,45,66,100,-18];
i=arr.length;
while(i>=0){
    console.log(arr[i]);
    i--;
}
*/
//     9. Всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 9-1)
/*
let arr=[2,17,13,6,22,31,45,66,100,-18];
i=arr.length;
while(i>=0){
    console.log(arr[i]);
    i--;
}
*/
// 9-2)
/*
let arr=[2,17,13,6,22,31,45,66,100,-18];
for (let i=arr.length; i>=0;i--){
    console.log(arr[i]);
}
*/
// 9-3)
/*
let  arr=[2,17,13,6,22,31,45,66,100,-18];
let i=arr.length;
while(i>=0){
    if (i%2===1){
        console.log(arr[i]);
    }
    i--;
}
*/
// 9-4)
/*
let arr=[2,17,13,6,22,31,45,66,100,-18];
for (let i=arr.length;i>=0;i--){
    if(i%2===1){
        console.log(arr[i]);
    }
}
*/
// 9-5)
/*
let arr=[2,17,13,6,22,31,45,66,100,-18];
let i=arr.length;
while (i>=0){
    if (i%2===0){
        console.log(arr[i]);
    }
    i--
}
*/
// 9-6)
/*
let arr=[2,17,13,6,22,31,45,66,100,-18];
for (let i=arr.length;i>=0;i--){
    if (i%2===0){
        console.log(arr[i]);
    }
}
*/
// 9-7)
/*
let arr=[2,17,13,6,22,31,45,66,100,-18];
for (let i=arr.length;i>=0;i--) {
    if (arr[i]%3 === 0) {
        arr[i]='okten';
        console.log(arr[i]);
    }
}
*/