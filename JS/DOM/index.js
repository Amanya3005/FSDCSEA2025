// console.log("HELLO")

//const div=document.getElementsByTagName('div');
// console.log(div);
// div[0].innerText="HELLO WORLD";
// div[0].style.color='brown';
// div[0].style.backgroundColor='white';

// const container=document.getElementsByClassName('container');
// console.log(container);
// container[0].innerHTML=' <h2 style=color:cyan>Welcome to ABES</h2>';

// const h1=document.createElement('h1');
// h1.innerText="Computer and Science Engineering";
// h1.style.color='brown';
// console.log(h1);
// container[0].appendChild(h1);

// const img=document.createElement('img');
// img.src='https://img.freepik.com/free-photo/cute-cat-spending-time-indoors_23-2150649172.jpg';
// img.setAttribute("height","200px");
// img.setAttribute("width","200px");
// console.log(img);
// container[0].appendChild(img);


// const button=document.getElementById('btn');
// console.log(button);

// function displayData(){
//     document.getElementById('disp').innerHTML="<h2>Data is Loading</h2>";
//     setTimeout(()=>{console.log("Hiii.... Inside Display");
//     document.getElementById('disp').innerHTML="";
// },1000);
// }

// button.addEventListener('click',displayData); 

// const button=document.getElementById('btn');
// console.log(button);

// function longData(){
//     console.log("start");
//     for(i=0;i<100000;i++){
//         console.log(i);
//     }
//     console.log("end");
// }
// button.addEventListener("click",longData);

// function msg(){
//     console.log("Welcome to js");
// }
// console.log("start");
// setTimeout(msg,0);
// console.log("end");

// function msg(mymsg){
//     return "Hello "+mymsg;

// }
//  function msgHandler(arg,clbk){
     
//    const data= clbk(arg);
//    console.log(data);
//  }
//  const arr=["ritika","anshika","amanya"];
//  arr.forEach(element=>{
//     msgHandler(element,msg);
//  })
 
// setTimeout(()=>{
//    console.log("First MSG");
//    setTimeout(() => {
//      console.log("Second MSG");
//      setTimeout(()=>{
//        console.log("Third MSG");
//        setTimeout(()=>{
//         console.log("Last MSG");
//        },1000);
//      },1000);
//    },1000);
// },1000);

// const myPromise=new Promise((resolve,reject)=>{
//     const pass="54tef`";
//     if(pass.length>8){
//         resolve("password is accepted or valid ");
//     }
//     else{
//         reject("Password is rejected due to length");
//     }
// })

// console.log(myPromise);

// myPromise.then(msg=>{
//     console.log(msg);
// }).catch(err=>{
//     console.log(err);
// }).finally(msg=>{
//     console.log("Finally resource is closed")
// })

// async function promiseHandler(){
//     try{
//    const data=await myPromise;
//    console.log(data); 
// }catch(err){
//     console.log(err);
// }
// }

// promiseHandler();

const button=document.getElementById('btn');
async function fetchData(){
    console.log("Enter Inside function")
    const response=await fetch("https://fakestoreapi.com/products");
    const jsonData=await response.json();
    const product = jsonData[0];
   // console.log(jsonData[0]);

  const img = document.createElement('img');
      img.src = product.image;
      img.width = 200;

}
button.addEventListener("click",fetchData);
