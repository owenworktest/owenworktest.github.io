var s = skrollr.init();
document.body.id = "skrollr-body";
$(window).scroll(function(){
  if($(window).scrollTop()>0){
    $(".navbar").removeClass("navbar-top");
    $(".navbar").css("background-color","white");
    //background-color: transparent
  }else if($(window).scrollTop()==0){
    $(".navbar").addClass("navbar-top");
    $(".navbar").css("background-color","transparent");
  }
});