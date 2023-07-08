function validateForm(){
    var a=document.getElementById("adult").value;
    var b=document.getElementById("children").value;
    var c=document.getElementById("start-date").value;
    var d=document.getElementById("end-date").value;
    var error=document.getElementById("errorMessage");
    if(a+b ==0){
        error.innerHTML="The total number of passengers must be atleast 1";
        return false;
    }
    if(d<c){
        error.innerHTML="Return date cannot be before start date";
        return false;
    }
    return true;
}
function validateCity(city){
    var format=/^[A-Za-z ]{2,30}$/;
    var error=document.getElementById("errorMessage");
    var v=city.value;
    if(format.test(v)){
        error.innerHTML="";
        return true;
    }
    else{
        error.innerHTML="The city name is invalid";
        return false;
    }
}