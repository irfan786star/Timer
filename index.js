// Variables 
const startBtn = document.querySelector(".btn1");
const stopBtn = document.querySelector(".btn2");
const resetBtn = document.querySelector(".btn3");
const hrs = document.querySelector("#hours");
const min = document.querySelector("#mins");
const sec = document.querySelector("#secs");
let count = 0;
let interval = null;

//The current Time
const clock = document.querySelector("#time-now");
setInterval(myTimer, 1000);

function myTimer(){
    const date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}

// Command
function time (){
    sec.innerHTML = count++;
    if(count % 60 === 0){
        min.innerHTML++;
        count = 0;
    if(min.innerHTML % 60 === 0){
        hrs.innerHTML++;   
        }
    }
    
}


function start() {
    startBtn.onclick = function(){
        if(interval){
            return
        }
        interval = setInterval(time, 1000);            
        }
        
        stop()
        reset()
}



function reset(){
resetBtn.addEventListener("click",function(){
    count = 0;
    hrs.innerHTML = "0";
    min.innerHTML = "0";
    sec.innerHTML = "0"
    
    
    
})
}
function stop (){
   
stopBtn.addEventListener("click", function(){
    
    clearInterval(interval);
     interval = null
    
})
}

start()
// reset()
// stop()

