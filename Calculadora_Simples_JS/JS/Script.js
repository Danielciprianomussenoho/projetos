
function insert(num){
    var numero = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = numero + num;

}
function clean(){
    document.getElementById("resultado").innerHTML = "";
}
function back(){
    var resulatdo = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = resulatdo.substring(0,resulatdo.length -1);
}
function calcular(){
    var resulatdo = document.getElementById("resultado").innerHTML;
    if(resulatdo){
        document.getElementById("resultado").innerHTML = eval(resulatdo)
    }else{
        document.getElementById("resultado").innerHTML = "nada para calcular";
    }
}