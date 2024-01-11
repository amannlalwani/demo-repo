// q1
// s=30

// function PrintS(){
//     console.log(s);
//     s--
// }

// for(let i=0;i<=30;i++){
// setTimeout(PrintS,1000*i)
// }

//q2
// startTime=new Date();
// setTimeout(a,1000)

// function a(){
//   enterTime=new Date();
//   console.log(enterTime-startTime);
// }

//a2=depends upon cpu 

//q3
// function prependZero(number) {
//     if (number <= 9)
//         return "0" + number;
//     else
//         return number;
//  }

// //q3

hh=0;
mm=0;
ss=0;
i=0;

function printTime(){
    
console.log(prependZero(hh)+":"+prependZero(mm)+":"+prependZero(ss));

if(ss==59)
{ss=0;
 
    if(mm==59)
    {
        mm=0;
        if(hh==23)
        {hh=0;
        }
        else{
            hh++;
        }
      
    }
    else{
        mm++;
    }
}

else{
    ss++;
}




}


setInterval(printTime,1000)
