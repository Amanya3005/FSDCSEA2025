// console.log("Hello World")
// var a=36
// console.log(a)

// console.log(a);
// let a=2;

// let a=12;
// if(a>5){
//     let a=20;
//     console.log(a);
// }
// console.log(a);

// const data=function(name,age,branch){
//    let output="Hii, My name is "+name+" and my age is "+age+" and my branch is "+branch;
//     return output;
// }

// // let ou=info("Amanya",20,"Cse");
// // console.log(ou);
// console.log(data("Amanya",20,"Cse"));

// const data=(name,age,branch)=>{
//    let output="Hii, My name is "+name+" and my age is "+age+" and my branch is "+branch;
//     return output;
// }

// // let ou=info("Amanya",20,"Cse");
// // console.log(ou);
// consollog(data("Amanya",20,"Cse"));
// const info=()=>{
//    let output="Hii, My name is "+" and my age is "+" and my branch is ";
//     return output;
// }

// // let ou=info("Amanya",20,"Cse");
// // console.log(ou);
// console.log(info());

// function info(str="Hiiii"){
//     console.log("Hello"+str);
// }
// info("awesrdfg");

//IIFE
// (function(){
//    console.log("Hii,inside function")
// })();


// (()=>{
//    console.log("Hii,inside function")
// })();

// setTimeout(function(){console.log("Hii")},2000);


function selectlanguage(lang="default"){
   let data;
   if(lang=="java"){
      function javaCompiler(){
        return "java compiler calling"
      }
      data=javaCompiler();

   }
   else  if(lang=="c"){
    function cCompiler(){
        return "c compiler calling"
      }
      data=cCompiler();
   }
   else if(lang=='default'){
        data="no language selected"
   }
   else
    {
    data="language not supported";
   }
   return data;
}

let output=selectlanguage("c");
console.log(output);