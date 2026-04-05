







function expandSection() {
  const section = document.getElementById('premiumSection');
  section.classList.toggle('expanded');
}





 // Swiper
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



var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  initialSlide:'auto',
  slidesPerView: 'auto',
  
coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 200, // زيادة العمق تجعل البطاقات الجانبية أصغر وأبعد
    modifier: 2.5, // قوة التأثير ثلاثي الأبعاد
    slideShadows: true, // إضافة ظلال داخلية للبطاقات البعيدة
    spaceBetween:30,
  },
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});
