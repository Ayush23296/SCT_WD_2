let timer;
let milliseconds = 0;
let second = 0;
let minutes = 0;

function start(){
    timer = setInterval(updateTime,10);
    
}

function updateTime(){
    milliseconds++;
    if(milliseconds == 100){
        milliseconds = 0 ;
        second ++ ;
    }
    if(second == 60 ){
        second = 0 ;
        minutes++;
    }
    const display = document.getElementById("display");

    display.value =
     `${String(minutes).padStart(2,"0")} : ` 
     + 
    `${String(second).padStart(2,"0")}:`
     +
    `${String(milliseconds).padStart(2,"0")

    }` ;
    console.log(display);


}
function pause(){
    clearInterval(timer);
}

function reset(){{
    clearInterval(timer );
    milliseconds = 0 ;
    second = 0 ;
    minutes = 0 ;
    document.getElementById("display").value = "00:00:00";
}}