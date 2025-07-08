$(document).ready(function () {
    $("#banner").owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true


    });


    $("#destination").owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 8
            }
        }
    });


 $("#popular-trend").owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

 $("#Trending").owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots:false,
          navText: ['<', '>'] ,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });






    

    $("#review").owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true


    });

     $("#travel-article").owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots:false,
          navText: ['<', '>'] ,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

});



const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.navbar-collapse');
const navLinks = document.querySelectorAll('.navbar-nav a');

function allEventListeners() {
  navToggler.addEventListener('click', togglerClick);
  navLinks.forEach(elem => elem.addEventListener('click', navLinkClick));
}

function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('show');
}

function navLinkClick() {
  if (navMenu.classList.contains('show')) {
    navToggler.click();
  }
}

allEventListeners();   