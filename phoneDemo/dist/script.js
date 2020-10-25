//音效

//按鈕點擊
var button_audio=new Audio("http://monoame.com/awi_class/ballsound/click14.wav");
//螢幕點擊
var screen_audio=new Audio("http://monoame.com/awi_class/ballsound/click18.wav");
//home點擊
var home_audio=new Audio("http://monoame.com/awi_class/ballsound/click23.wav");
//震動
var wiggle_audio=new Audio("http://monoame.com/awi_class/ballsound/phonevi.mp3");
$(".i5").click(function(){
  $(".phone").css("width", "");   
  $(".screen").css("height", "");
  $(".phonename").text($(this).text());
  button_audio.play();
});  
$(".i5s").click(function(){
  $(".phone").css("width", "300px"); 
  $(".screen").css("height", "420px");
  $(".phonename").text($(this).text());
  button_audio.play();
});
$(".i6").click(function(){
  $(".phone").css("width", "270px"); 
  $(".screen").css("height", "440px");
  $(".phonename").text($(this).text());
  button_audio.play();
});  
$(".i6s").click(function(){
  $(".phone").css("width", "300px"); 
  $(".screen").css("height", "480px");
  $(".phonename").text($(this).text());
  button_audio.play();
});  
$(".i5s").click(function(){
  $(".phone").css("width", "300px"); 
  $(".screen").css("height", "420px");
  $(".phonename").text($(this).text());
  button_audio.play();
});
$(".i5s").click(function(){
  $(".phone").css("width", "300px"); 
  $(".screen").css("height", "420px");
  $(".phonename").text($(this).text());
  button_audio.play();
});
var page = 0;
$(".screen").click(function(){
  page+=1;
  if(page>2) page=0;
  $(".pages").css("left", "-"+100*page+"%");    
});
$(".button").click(function(){
  page=0;
  $(".pages").css("left", "-"+100*page+"%");    
  home_audio.play();
});
var deg=0;
$(".turn").click(function(){
  deg+=360;
  $(".phone").css("transform", "rotate("+ deg +"deg)");
});
var wiggleTime = 21;
$(".wiggle").click(function(){
  wiggleTime = 0;
  wiggle_audio.play();
});
setInterval(function(){
  if(wiggleTime <=20){
    wiggleTime += 1;
    console.log(wiggleTime);    
    if(wiggleTime%2==0){
      $(".phone").css("left", "30px");  
    }else{
      $(".phone").css("left", "-30px");
    }            
  }
  if(wiggleTime>=21){
    $(".phone").css("left", "0px");  
  }  

},60);