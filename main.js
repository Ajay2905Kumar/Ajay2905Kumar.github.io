function validate(){
    var usere=document.getElementById('ue').value;
    var usercheck=/^[A-Za-z0-9._]{3,}@[A-Za-z0-9]{3,}[.]{1}[A-Za-z]{2,6}$/;
    if(usercheck.test(usere)){
        window.alert("Correct Email-ID Entered");
    }
    else if(usere==""){
        window.alert("No Email ID Entered");
    }
    else{
        window.alert("Invalid Email ID");
    }
}
function responsiveNavBar(){
    var x=document.getElementById('navbarlist');
    var y=document.getElementById('icon');
    if(x.className=='nav-list'){
        x.className+= " responsive";
        y.className="fa-solid fa-xmark";
    }
    else{
        x.className="nav-list";
        y.className="fa-solid fa-bars";
    }
}