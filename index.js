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




document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons in the toggle group
        button.parentElement.querySelectorAll('.toggle-btn').forEach(btn => {
            btn.classList.remove('activee');
        });
        
        // Add active class to the clicked button
        button.classList.add('activee');
        
        console.log("Mode switched to:", button.innerText);
    });
});

const goBtn = document.querySelector('.go-btn');
const searchInput = document.querySelector('input');

goBtn.addEventListener('click', () => {
    if(searchInput.value) {
        alert("Searching for vibes related to: " + searchInput.value);
    }
});








function expandSection() {
  const section = document.getElementById('premiumSection');
  section.classList.toggle('expanded');
}



function changeSection() {
    const s1 = document.getElementById('search-1');
    const s2 = document.getElementById('search-2');

    // تبديل الكلاسات بين الحاويتين
    if (s1.classList.contains('change')) {
        s1.classList.remove('change');
        s2.classList.add('change');
    } else {
        s2.classList.remove('change');
        s1.classList.add('change');
    }
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