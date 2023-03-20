
// function sum(a,b) {
//    console.log(a,b)
// }

// sum(1,2,3,4)

// output:-1,2



// function sum(a,...b, c) {
//    console.log(a,b,c)
// }

// sum(1,2,3,4)

// Answer:
// Syntax Error 



// function sum(a,...b) {
//    console.log(a,b);
// }

// sum(1,2,3,4)

// Answer:
// 1 [2,3,4]



// function sum(arr) {
//   const [a,,,b] = arr;
//    console.log(a,b)
// }

// sum([1,2,3,4])

// Answer:
// 1 4



// function sum(arr) {
//   const arr1 = [...arr];
//   arr[4] = 5
//    console.log(arr, arr1)
// }

// sum([1,2,3,4])

// Answer:
// 1 2 3 4 5
// 1 2 3 4



// function sum(arr) {
//   const arr1 = arr;
//   arr[4] = 5
//    console.log(arr, arr1)
// }

// sum([1,2,3,4])
// Answer:
// 1 2 3 4 5
// 1 2 3 4 5



// console.log(a)
// console.log(b)
// var a=10;
// let b=20;

// Answer:
// undefined
// Uncaught ReferenceError: b is not defined


// console.log(a)
// console.log(b)
// {
// console.log(b)
// var a=10;
// let b=15
// }

// Answer:
// undefined
// ReferenceError: b is not defined
// ReferenceError: Cannot access 'b' before initialization



// console.log(a);
// function sum(){
// var a=10;
// }
// sum();

// Answer:
// ReferenceError: a is not defined



// var num = 8;
// var num = 10;
// console.log(num);

// Answer:
// 10



// var a = 10;
// var b = a;
// b = 20;
// console.log(a);
// console.log(b);

// Answer:
// 10
// 20



// var x = 10;

// if (x === 10) {
//   var x = 20;
//   console.log(x); 
// }

// console.log(x);

// Answer:
// 20
// 20



// console.log(a)
// let b =30;
// function sum(){
//     var a=10;
//     console.log(b)
//     function sub(){
//         console.log(c);
//         console.log(d);
//         console.log(e);
//         var c=10;
//       let d=30;
//     }
//     var e = 40;
//     sub();
// }
// sum();
// Answer:

// Reference Error
// 30
// undefined
// Reference Error
// 40



// let x = 10;
// let y = 20;
// function foo() {
//   let x = y = 30;
// }
// foo();
// console.log(x, y);

// Answer:
// 10 30



// const [x = 2, y = 4, z = 6] = [10];

// console.log(x);
// console.log(y);
// console.log(z);

// Answer:

// 10
// 4
// 6



// const obj = {
//     name: "Ram",
//     age: 21,
// }

// const {name: myName} = obj;
// console.log(myName);

// Answer: Ram



// const obj = {
//     country: "India",
//     playerDetails: {
//         name: "Virat",
//         age: 33
        
// },
// }

// const {playerDetails: {age: myAge}}= obj
// console.log(myAge);

// Answer:
// 33



// const obj = {
//     country: "India",
//     playerDetails: {
//         name: "Virat",
//         age: 33
// },
// }

// const {playerDetails: {age: myAge=30, position: myPosition=3}}= obj
// console.log(myAge, myPosition);
// console.log(obj)
// Answer:
// 33 3
// { country: 'India', playerDetails: { name: 'Virat', age: 33 } }



// const obj = { 'firstName': 'Elon', 'lastName': 'Musk' };
//    const country = 'USA';

//    const newObj = { ...obj, country, companies: ['Paypal', 'Tesla', 'SpaceX'] };
//     console.log(newObj);


// {
//   firstName: 'Elon',
//   lastName: 'Musk',
//   country: 'USA',
//   companies: [ 'Paypal', 'Tesla', 'SpaceX' ]
