function validateForm(){
    var inputName=document.getElementById("name");
    var inputEmail=document.getElementById("email");
    var inputDistrict=document.getElementById("district");
 
    var textCheck=/^[A-Za-z ]{3,}$/;
    var emailCheck=/^[A-Za-z0-9!#$%^&*(){|}.~_-]{3,}@[A-Za-z0-9]{3,}.[A-Za-z.]{2,6}$/;

    if(textCheck.test(inputName)){
        document.getElementById("nameError").innerHTML="";
    }
    else{
        document.getElementById("nameError").innerHTML="Please enter a proper name...";
        return false;
    }
    if(emailCheck.test(inputEmail)){
        document.getElementById("emailError").innerHTML="";
    }
    else{
        document.getElementById("emailError").innerHTML="Please enter a proper Email-ID...";
        return false;
    }
    if(textCheck.test(inputDistrict)){
        document.getElementById("districtError").innerHTML="";
    }
    else{
        document.getElementById("districtError").innerHTML="Please enter a proper District name...";
        return false;
    }
}