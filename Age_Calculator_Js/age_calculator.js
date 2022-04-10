var calculate_btn = document.getElementById("calculate_btn"),
    calculate_age = document.getElementById("calculate_age");

calculate_btn.addEventListener("click",function(){
    var birth_date = document.getElementById("birth_date").value;
    birth_date = new Date(birth_date);
    var todayDate = new Date(); 
    totalAge = Date.now() - birth_date.getTime();
    ageYear = new Date(totalAge);
    ageYear = Math.abs(ageYear.getUTCFullYear() - 1970);

    function ageMonth(){
        if(todayDate.getMonth() >= birth_date.getMonth()){
            if(todayDate.getDate() >= birth_date.getMonth()){
                return todayDate.getMonth() - birth_date.getMonth();
            }else{
                if((todayDate.getMonth() - 1) >= birth_date.getMonth()){
                    return (todayDate.getMonth() - 1) - birth_date.getMonth();
                }else{
                    return ((todayDate.getMonth() - 1) + 12) - birth_date.getMonth();
                }
            }
        }
    }
    calculate_age.innerHTML = "you are " + ageYear + " Years and " + ageMonth() + " Months old"
})
        