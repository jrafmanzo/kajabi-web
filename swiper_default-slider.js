var defaultSwiper = new Swiper ('#swiper-default', {
 	loop: true,
   loopFillGroupWithBlank: true,
  slidesPerView: 1.75,
  slidesPerGroup: 4,
  grabCursor:true,
  a11y: false,
  spaceBetween: 28,
  allowTouchMove: true,
  navigation: {
  nextEl: '#right-button',
  prevEl: '#left-button',
		},
     breakpoints: {
      0: { /* when window >=0px - webflow mobile landscape/portriat */
          slidesPerView: 1,
         slidesPerGroup:1,
        spaceBetween: 28,
      },
          480: { /* when window >=0px - webflow mobile landscape/portriat */
          slidesPerView: 1.2,
         slidesPerGroup:1,
        spaceBetween: 28,
      },
      767: { /* when window >= 767px - webflow tablet */
            slidesPerView: 1.2,
         slidesPerGroup:1,
        spaceBetween: 28,
      },
      992: { /* when window >= 988px - webflow desktop */
         slidesPerView: 1.75,
         slidesPerGroup:1,
        spaceBetween: 28,
      }
    },
      });
