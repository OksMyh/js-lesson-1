// Створити пустий масив та :

// let arr=[];
// for (let i=0;i<100;i++){
//          arr.push(i);
//  }
// console.log(arr);

// 1. Заповнити його 50 парними числами.

// let arr=[];
// for (let i=0;i<100;i++){
//     if (i%2===0) {
//         arr.push(i);
//     }
// }
// console.log(arr);

// 2. Заповнити його 50 непарними числами.

// let arr2=[];
// for (let i=0;i<100;i++){
//     if (i%2===1) {
//         arr2.push(i);
//     }
// }
// console.log(arr2);

// 1. используя Math.random заполнить массив из ??? элементов.
//     диапазон рандома 8 до 732.

// let arr=[];
// for (let i=0;i<=10;i++){
//     arr.push(Math.floor(Math.random()*(732-8+1))+8);
// }
// console.log(arr);

// 2. Вывести на консоль  каждый третий елемент

// let arr2=[];
// for (let i=0;i<100;i++){
//     if (i%3===0) {
//         arr2.push(i);
//     }
// }
// console.log(arr2);

// 3. Вывести на консоль  каждый третий елемент
// но при условии что он имеет парное значение.

// let arr=[];
// for (let i=0;i<=100;i++){
//         arr.push(i);
// }
// console.log(arr);
// for (let i=0;i<=arr.length;i+=3){
//     if (arr[i]%2===0){
//         console.log(arr[i]);
//     }
// }


// 4. Вывести на консоль  каждый третий елемент
// но при условии что он имеет парное значение и
// записать их в другой массив.

// let arr=[];
// let arr2=[];
// for (let i=0;i<=100;i++){
//     arr.push(i);
// }
// console.log(arr);
// for (let i=0;i<=arr.length;i+=3){
//     if (arr[i]%2===0){
//         arr2.push(arr[i]);
//     }
// }
// console.log(arr2);

// 5. масив з числами [100,250,50,168,120,345,188], які характеризують
// вартість окремої покупки.
// Обрахувати середній чек.
// debugger;

// let arr=[100,250,50,168,120,345,188];
// let sum=0;
// let average;
// for(let i=0;i<arr.length;i++){
//     sum+=arr[i];
// }
// average=Math.floor(sum/arr.length);
// console.log(average);