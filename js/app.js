// navigation img swiper 
var swiper = new Swiper(".swiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
 //section group-d
//  btn section icons
let navBtn = document.querySelector(".toggle-btn");

navBtn.onclick = () => {
  navBtn.classList.toggle("active");
};

// section container-e item list
var swiper = new Swiper(".zain-item-list", {
  spaceBetween: 30, // Space between items
  slidesPerView: 4, // Show 4 items at a time
  loop: true, // Infinite loop
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // breakpoints: {
  //   1024: {
  //     slidesPerView: 4, // Show 4 items on large screens
  //   },
  //   768: {
  //     slidesPerView: 3, // Show 3 items on tablet size
  //   },
  //   480: {
  //     slidesPerView: 2, // Show 2 items on mobile size
  //   },
  // },
});

// footer 
/* Created by Tivotal */

let wrapper = document.querySelector(".wrapper");
let toggleBtn = document.querySelector(".js-media-toggle-btn");

toggleBtn.addEventListener("click", () => {
  wrapper.classList.toggle("active");
});



