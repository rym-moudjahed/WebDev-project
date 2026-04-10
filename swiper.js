
const menubutton = document.getElementById('menubutton');
const btn = document.getElementById('btn');
const sidebar = document.getElementById('sidebar');
menubutton.onclick = function() {
    sidebar.classList.add('activex');
        
};
btn.onclick = function() {
    sidebar.classList.remove('activex');
    
};
const swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,      
  spaceBetween: 10,
  loop: true,
  pagination: {
        el: ".swiper-pagination",
        clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 4,   
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 5,   
      spaceBetween: 30
    }
  }
});

