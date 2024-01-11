
function kiratsAsyncFunction() {
    let p = new Promise(function(resolve) {
        setTimeout(function(){
            console.log("resolved");
            resolve("hi there")
        },1000);
    });
    return p;
  }
  
  const value = kiratsAsyncFunction();

  value.then(function(data) {
    console.log("inside then");
    console.log(data);
  })

  
  for(i=0;i<100000000000;i++){
      
  }
  
  console.log("hello");