let aboutOffset =  $('#ABOUT').offset().top; 
$(window).scroll(function()
{
let wScroll = $(window).scrollTop();
if ( wScroll > aboutOffset -100)
{
  $('#main-nav').css('backgroundColor' , '#1b1b1b')
}
else
{
  $('#main-nav').css('backgroundColor' , 'transparent')
}
})


$('#main-nav a').click(function (e) {
  let x = $(e.target).attr('href')
  $('html,body').animate({scrollTop:$(x).offset().top},100 , function(){
    
  })

})




new WOW().init();


var typed = new Typed('.element', {
  strings: ["Family Bakery | ", "Best Delicious pastries|"],
  typeSpeed:40 ,
  backSpeed:40,
  showCursor: false,  
  fadeOut: true,
  fadeOutClass: 'typed-fade-out',
  fadeOutDelay: 500,
  smartBackspace: true ,// Default value
  
});