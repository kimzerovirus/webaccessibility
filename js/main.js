const btnCall = document.querySelector(".btnCall"); 
const menuMo = document.querySelector(".menuMo"); 


btnCall.onclick = function(e){
    e.preventDefault(); 

    btnCall.classList.toggle("on"); 
    menuMo.classList.toggle("on"); 
}

const swiper = new Swiper("#slide", {
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor : true, 
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        539:{ 
            slidesPerView: 2,
        },
        1179:{  
            slidesPerView: 3.5,
        },
    },
});