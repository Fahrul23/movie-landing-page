window.addEventListener("scroll",function(){
    var nav = document.getElementById('nav');
    if(window.scrollY > 110){
        nav.classList.add("nav-blue");
    }else if(window.scrollY < 100){
        nav.classList.remove("nav-blue")
    }

})