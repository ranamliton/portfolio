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
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar1 .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar1 .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Student", "Researcher", "Dreamer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed2 = new Typed(".typing-2", {
        strings: ["Researcher", "Microbiologist", "Biotechnologist"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script (for any remaining owl carousels)
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

    // Generic slider function
    function initSlider(trackId, prevId, nextId) {
        const track = document.getElementById(trackId);
        const prevBtn = document.getElementById(prevId);
        const nextBtn = document.getElementById(nextId);

        if(!track || !prevBtn || !nextBtn) return;

        let currentIndex = 0;

        function getCardsPerView(){
            if(window.innerWidth <= 690) return 1;
            if(window.innerWidth <= 947) return 2;
            return 3;
        }

        function getTotalCards(){
            return track.children.length;
        }

        function updateSlider(){
            const cardsPerView = getCardsPerView();
            const totalCards = getTotalCards();
            const cardWidth = track.children[0].offsetWidth;
            const gap = 25;
            const maxIndex = Math.max(0, totalCards - cardsPerView);

            if(currentIndex > maxIndex) currentIndex = maxIndex;
            if(currentIndex < 0) currentIndex = 0;

            const translateX = -(currentIndex * (cardWidth + gap));
            track.style.transform = `translateX(${translateX}px)`;

            // Update arrow visibility
            if(currentIndex === 0){
                prevBtn.classList.add('hidden');
            } else {
                prevBtn.classList.remove('hidden');
            }

            if(currentIndex >= maxIndex){
                nextBtn.classList.add('hidden');
            } else {
                nextBtn.classList.remove('hidden');
            }
        }

        prevBtn.addEventListener('click', function(){
            if(currentIndex > 0){
                currentIndex--;
                updateSlider();
            }
        });

        nextBtn.addEventListener('click', function(){
            const cardsPerView = getCardsPerView();
            const totalCards = getTotalCards();
            const maxIndex = Math.max(0, totalCards - cardsPerView);
            if(currentIndex < maxIndex){
                currentIndex++;
                updateSlider();
            }
        });

        window.addEventListener('resize', updateSlider);

        // Initial setup after a short delay to ensure layout is complete
        setTimeout(updateSlider, 100);
    }

    // Initialize publications slider
    initSlider('pub-track', 'pub-prev', 'pub-next');

    // Initialize blogs slider
    initSlider('blog-track', 'blog-prev', 'blog-next');
});
