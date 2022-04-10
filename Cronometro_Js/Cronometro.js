

var second = 0;
var minute = 0;
var hour = 0;
var interval;
function twoDigits(digit){
    if(digit < 10){
        return("0"+digit)
    }else{
        return(digit);
    }  
}
function start(){
    watch();
    interval = setInterval(watch,1);
}
function pause(){
    clearInterval(interval);
}
function stop(){ 
    clearInterval(interval);
    second = 0;
    minute = 0;
    document.getElementById("watch").innerText = "00:00:00"; 
}
function watch(){
    second++;
    if(second == 60){
        minute++;
        second = 0;
        if(minute == 60){
            minute = 0;
            hour++;   
        }
    } 
    document.getElementById("watch").innerText = `${twoDigits(hour)} : ${twoDigits(minute)} : ${twoDigits(second)} `; 
}   