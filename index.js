var section=document.querySelectorAll("section");
var navlinks=document.querySelectorAll(".collapse ul a");
window.onscroll=()=>{
    let nav=$("nav");
    nav.toggleClass("sticky",window.scrollY>100);


section.forEach(sec => {
    var top=window.scrollY;
    var offset=sec.offsetTop-100;
    var height=sec.offsetHeight;
    var id=sec.getAttribute("id");


    console.log("of=",offset,"h=",height,"t=",top,top>=offset&&top<offset+height);
    if(top>=offset&&top<offset+height){
        navlinks.forEach(function(link){        
            
            link.classList.remove("active");
            $(" .collapse a[href*="+ id + "]").addClass("active");
        });

        sec.classList.add("show-animate");
    }
    else{
        sec.classList.remove("show-animate");

    }


});
    
}






