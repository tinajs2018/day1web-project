var navBarHeight=$("nav").height();
var origFooterHeight=$("footer").height();
var origDocumentHeight=$("document").height();
// define look of the navbar when scolling
var animateNavbar=function(){
    var scrollHeight=$(window).scollTop();
    if(scrollHeight>5){
        //change nav to opaque look
        $(".navbar-nav").animate({
            marginRight:"0px"
        });
        $(".navbar").animate({
            padding:"0px",
            margin:"0px"
        });
        $(".navbar").css("background-color","rgba(0,0,0,1");
    }else{
        //change  nav to the transparent look
        $(".navbar-nav").animate({
            marginRight:"40px"
        });
        $(".navbar").animate({
            padding:"20px",
            margin:"20px"
        });
        $(".navbar").css("background-color","rgba(0,0,0..5)")
    }
};