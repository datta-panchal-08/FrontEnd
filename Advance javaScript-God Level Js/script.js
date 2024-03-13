// global scope - window
// console.log(this);

// function scoped - window
// function abcd(){
//     console.log(this);
// }
// abcd();

//method scope - object
// var obj = {
//     name:function(){
//         console.log(this);
//     },
//     age:25
// }
// obj.name();

//  function inside method(es5)- window
// var obj2 = {
//     sayName:function parent(){
//            function child(){
//             console.log(this);
//            }
//            child();
//     }
// }
// obj2.sayName();

// function inside method(es6)- object
// var obj3 = {
//     sayName:function parent(){
//            const child = ()=>{
//             console.log(this);
//            }
//            child();
//     }
// }
// obj3.sayName();

// ES5 FUNCTIONS REIBIND this KEYWORD VALUE WITH WINDOW
// ES6 ARROW FUNCTIONS CAN TAKE THIS VALUE FROM ITS PARENTS LIKE sayName...

// constructor fnc mein this ki value -- new blank object
// function add(){
//     console.log(this);
// }
// const ans = new add();

// event listner mein this kei value -- that element jispar event listner laga ho
// document.querySelector('button').addEventListener("click",function(){
//     console.log(this);
// });

// call apply blind
//  var obj = {name : "Datta"}
//  function abcd(){
//     console.log(this);
//  }
//  abcd.call(obj);
// apply
//  var obj = {name : "Datta"}
//  function abcd(a,b,c){
//     console.log(this,a,b,c);
//  }
//  abcd.apply(obj,[1,2,3]);

// bind
// var obj = {name : "Datta"}
// function abcd(){
//    console.log(this);
// }
//  const ans = abcd.bind(obj);
//  ans();

// PROTOTYPAL INHERITANCE....
// function makeHuman (name,age){
//     this.name = name;
//     this.age = age;
// }
// makeHuman.prototype.printMyName = function(){
//     console.log(this.name);
// }
// var human1 = new makeHuman("Harsh",24);
// var human2 = new makeHuman("Datta",22);

// CLOUSERS
// function abcd(){
//     var a = 13;
//     return function child(){
//       console.log(a);
// }
// }
// const ans = abcd();
// ans();

// EVENT DELEGATION
//  var parent = document.querySelector("#parent");
 
//  parent.addEventListener("click",function(details){
//     if(details.target.id === "play"){
//         console.log("Play Song");
//     }
//     else if(details.target.id === "pause"){
//         console.log("Pause Song");
//     }
//  })

// HIGHER ORDER FUNCTIONS 
//   function abcd(param){

//   }
//   abcd(function(){});

// TRY AND CATCH 
// function divide(a,b){
//     try{
//         if(b === 0)
//         {
//             throw Error("Koi To Gadbad Hai");
//         }
//         console.log(a/b)
//     }catch(err){
//         console.error(err);
//     }
// }
// divide(12,0);

// CUSTOM EVENTS
const evt = new Event("gharJa");

document.querySelector('button').addEventListener("gharJa",function(){
    alert("ghar ja raha hu");
});

document.querySelector('button').dispatchEvent(evt);