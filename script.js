$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }
        
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });
    
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      }
    }
  });
});



//first typing animation
var typed = new Typed(".typing",{
    strings:["Developer", "Student", "Intern", "Designer", "Freelancer", "Krasavchik", "Programmer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

//about section typing animation
var typed2 = new Typed(".typing2",{
    strings:["Jacob", "Джейкоб", "야곱", "Yaqub", "יעקב", "雅各布"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});


