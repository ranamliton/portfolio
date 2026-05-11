$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar1').addClass("sticky");
        }else{
            $('.navbar1').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar1 .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar1 .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Researcher", "Dreamer", "Listener"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed2 = new Typed(".typing-2", {
        strings: ["Student", "Researcher", "Microbiologist", "Biotechnologist"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

// publication carousel slider
    const track = document.querySelector('.carousel-track');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');

    if(track && prevBtn && nextBtn){
        let currentIndex = 0;

        function getCardsPerView(){
            if(window.innerWidth <= 690) return 1;
            if(window.innerWidth <= 947) return 2;
            return 3;
        }

        function getTotalCards(){
            return track.children.length;
        }

        function updateCarousel(){
            const cardsPerView = getCardsPerView();
            const totalCards = getTotalCards();
            const cardWidth = track.children[0].offsetWidth;
            const gap = 25;
            const maxIndex = Math.max(0, totalCards - cardsPerView);

            // Clamp currentIndex
            if(currentIndex > maxIndex) currentIndex = maxIndex;
            if(currentIndex < 0) currentIndex = 0;

            const translateX = -(currentIndex * (cardWidth + gap));
            track.style.transform = `translateX(${translateX}px)`;

            // Update button states
            prevBtn.disabled = currentIndex === 0;
            nextBtn.disabled = currentIndex >= maxIndex;

            prevBtn.style.opacity = currentIndex === 0 ? '0.3' : '1';
            nextBtn.style.opacity = currentIndex >= maxIndex ? '0.3' : '1';
        }

        prevBtn.addEventListener('click', function(){
            if(currentIndex > 0){
                currentIndex--;
                updateCarousel();
            }
        });

        nextBtn.addEventListener('click', function(){
            const cardsPerView = getCardsPerView();
            const totalCards = getTotalCards();
            const maxIndex = Math.max(0, totalCards - cardsPerView);
            if(currentIndex < maxIndex){
                currentIndex++;
                updateCarousel();
            }
        });

        // Update on window resize
        window.addEventListener('resize', function(){
            updateCarousel();
        });

        // Initial setup
        updateCarousel();
    }
});
