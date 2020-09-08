/*Scroll to top*/
window.onscroll = function () {
    scrollFunction()
   
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myScroll")
            .style.display = "block";

    } else {
        document.getElementById("myScroll")
            .style.display = "none";
    }
}

function clickTop(){
    $('html, body').animate({
        scrollTop: $('html').offset().top
    }, 500);
}
    
