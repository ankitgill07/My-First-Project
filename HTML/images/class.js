// function anycfuntion1 (){
//     return new Promise((resolve, reject) => {
//         setTimeout( ()=>{
//             console.log("data1");
//             resolve("success");
//         },4000);
//     })
// }

// function anycfuntion2 (){
//     return new Promise((resolve, reject) => {
//         setTimeout( ()=>{
//             console.log("data2");
//             resolve("success");
//         },4000);
//     })
// }


// console.log("fetching data1...")
// let p1 = anycfuntion1();
// p1.then((res) =>{
//  console.log(res);
//  console.log("fetching data2...")
//  let p2 = anycfuntion2();
// p2.then((res) =>{
//    console.log(res);
//  })
// });
















function getdata (dataId, getNxetData){
return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("data",dataId);
        resolve("success");
        if(getNxetData){
         getNxetData();
        }
         }, 2000);
})
}

async function getalldata(){
    console.log("getting data1...")
    await getdata(1);
    console.log("getting data2...")
    await getdata(2);
    console.log("getting data3...")
    await getdata(3);
    console.log("getting data4...")
    await getdata(4);
    console.log("getting data5...")
    await getdata(5);
}
console.log();



getdata(1)
.then((res) =>{
  return getdata(2);
})
.then((res) =>{
    return getdata(3);
  })
  .then((res) =>{
    return getdata(4);
  })
  .then((res) =>{
   console.log(res);
  })



getdata ( 1, ()=>{
  console.log("getting data2....");
  getdata ( 2, ()=>{
    console.log("getting data3....");
    getdata ( 3, ()=>{
        console.log("getting data4....");
        getdata( 4, ()=>{

        })
      })
  })
})