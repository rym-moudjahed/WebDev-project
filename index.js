var swiper = new Swiper(".mySwiper", {
      slidesPerView: 5,
      spaceBetween: 20,
      loop: true ,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
const menubutton = document.getElementById('menubutton');
const btn = document.getElementById('btn');
const sidebar = document.getElementById('sidebar');
menubutton.onclick = function() {
    sidebar.classList.add('active');
        
};
btn.onclick = function() {
    sidebar.classList.remove('active');
    
};
