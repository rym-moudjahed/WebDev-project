function nextSection(tip) {
     
    const currentQuestion = tip.closest('.flex');
    
    const nextQuestion = currentQuestion.nextElementSibling;

    if (nextQuestion && nextQuestion.classList.contains('flex')) {
        currentQuestion.classList.remove('active'); 
        nextQuestion.classList.add('active');      
    } else {
        alert("go to result");
    }
}








function expandSection() {
  const section = document.getElementById('premiumSection');
  section.classList.toggle('expanded');
}





 // Swiper 1
 const swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
});


//swiper 2

var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  
  slidesPerView: 2,
  
coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 150, // to make the cards looks smaller
    modifier: 3.5, // 3D effect
    slideShadows: true, // adding shadow to the small slide
   
  },
  spaceBetween:30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});


function nnextSection(hello) {
     
    const currentQuestion =hello .closest('.showme');
    
    const nextQuestion = currentQuestion.nextElementSibling;

    if (nextQuestion && nextQuestion.classList.contains('showme')) {
        currentQuestion.classList.remove('lol'); 
        nextQuestion.classList.add('lol');      
    } else {
        if(nextQuestion){
          currentQuestion.classList.remove('lol');
          nextQuestion.classList.add('active');
        }
    }
}