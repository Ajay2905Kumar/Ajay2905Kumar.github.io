window.onscroll=function(){
    stickyNavbar();
}
function stickyNavbar(){
    var navbar=document.getElementById("navbar");
    var sticky=navbar.offsetTop;
    if(window.scrollY>sticky+30){
        navbar.classList.add("sticky");
    }
    else{
        navbar.classList.remove("sticky");
    }
}