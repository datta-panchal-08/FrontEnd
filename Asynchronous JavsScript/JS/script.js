// setTimeout(()=>{
//     let variable = document.querySelector('body');
//     let h2  = document.createElement('h2');
//     h2.innerText = "Hello Datta";
//     let ans = variable.appendChild(h2);
// },1000)

// let count = 0;
// let stopInterval = setInterval(() => {
//   count++;
//   console.log(count);
//   if (count === 5) clearInterval(stopInterval);
// }, 1000);

// FETCH API
// fetch(`https://randomuser.me/api/`)
// .then(raw => raw.json())
// .then(data => console.log(data.results[0].gender))

// AXIOS
// axios.get(`https://randomuser.me/api/`)
// .then(result => console.log(result.data.results[0].gender))

// PROMISES
// const getRes = new Promise((reslove,reject)=>{
//     fetch(`https://randomuser.me/api/`)
//     .then(raw => raw.json())
//     .then(result => {
//         if(result.results[0].gender === "female") reslove();
//         else reject();
//     });
// });
// getRes
// .then(()=>{
//     console.log("success");
// })
// .catch(()=>{
//     console.log("fail");
// })

// CALLBACK

// let getdata = (url,callback)=>{
//     fetch(url)
//  .then(raw => raw.json())
//  .then(result => {
//     callback(result);

//  })
// }

// getdata(`https://randomuser.me/api/`,(result)=>{
//     console.log(result.results[0].gender,result.results[0].name.first,result.results[0].email);
// })

// ASYNC AWAIT
// async function abcd(){
//     let a = await fetch(`https://randomuser.me/api/`);
//     a = await a.json();
//     console.log(a);
// }
// abcd();

// ASYNC AWAIT CALLBACK PROMISES

// CALLBACK
//  const data = (url,callback)=>{
//      fetch(url)
//      .then(raw => raw.json())
//      .then(result => {
//         callback(result);
//      })
//  }

//  data(`https://randomuser.me/api/`,function(result){
//     console.log(result);
//  })

//  data()

// PROMISES

// function dataFetcher (url) {
//      const getAns = new Promise((reslove,reject)=>{
//         fetch(url)
//         .then(raw => raw.json())
//         .then(result => reslove(result));
//      })
//      return getAns;
// }
// dataFetcher(`https://randomuser.me/api/`)
// .then(function(result){
//     console.log(result);
// });

// ASYNC

// async function dataFetcher(url){
//     let data = await fetch(url)
//     let result = await data.json();
//     return result;
// }
// async function getAns (){
//     let data  = await dataFetcher(`https://randomuser.me/api/`)
//     console.log(data);
// }
// getAns();

// GENERATORS

// function* allNums() {
//   for (let i = 0; i < 10; i++) {
//     yield i;
//   }
// }
// let nums = allNums();
// console.log(nums.next().value);
// console.log(nums.next().value);
