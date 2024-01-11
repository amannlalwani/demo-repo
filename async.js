 const fs=require("fs");

 fs.readFile("a.txt","utf-8",function(err,data){
    console.log(data);
 })

 console.log("hi there");

 for(let a=0;a<10000000000;a++){

 }

 console.log("hi there 2");


 function hello(fn){
     fn("hello");
 }

 function kal(str){
    console.log(str);
 }


 setTimeout(hello,1000,kal);
