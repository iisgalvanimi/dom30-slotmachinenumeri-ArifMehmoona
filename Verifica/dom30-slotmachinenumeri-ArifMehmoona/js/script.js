
const digit0 = document.getElementById("d0");
const digit1 = document.getElementById("d1");
const inizioBtn = document.getElementById("btnStart")
const msg = document.getElementById("message");

let num_rnd = Math.random() * 3;
let num_rnd2 = Math.random() * 3;
let myInterval;
let dig0 = 0;
let dig1 = 0;
let com = 0;

function inizioTimer(){
    
    digit0.innerText= 0;
    digit1.innerText = 0;

    myInterval =  setInterval(timerFunc, 1000);
  
    if (typeof(myInterval) != "undefined") { return ; }
   
    
  }
  function fineTimer(){
    clearInterval(myInterval)
 
   if (typeof(myInterval) == "undefined") { return ; }   
   
 }


function timerFunc(){
    com++

    if(com <= 3){
    num_rnd = Math.random() * 3;
    num_rnd = Math.trunc(num_rnd)
    dig0 = num_rnd;
    num_rnd2 = Math.random() * 3;
    num_rnd2 = Math.trunc(num_rnd2)
    dig1 = num_rnd2;
    digit1.innerText= dig1;
    digit0.innerText = dig0;
    msg.innerText = com;
    }

    if (com == 3 && dig0 == dig1){
        msg.innerText="Hai vinto,barando!"
        com = 0;
        fineTimer();
        

    }else if (com == 3 && dig0 != dig1){
        msg.innerText="Sfigato!"
        com = 0;
        fineTimer();
        
    }
  

}


inizioBtn.addEventListener( 'click' , inizioTimer)


