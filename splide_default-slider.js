function banner() {

let splides = $('#banner');
for ( let i = 0, splideLength = splides.length; i < splideLength; i++ ) {
	new Splide( splides[ i ], {
  perPage: 6,
  arrows: false,
  pagination: false,
  focus: 'center',
  direction: 'ltr',
  gap: '1rem',
  type: 'loop',
  autoScroll: {
    autoStart: true,
    speed: 0.6,
  },
  intersection: {
    inView: {
      autoScroll: true,
    },
    outView: {
      autoScroll: false,
    },
   },
  breakpoints: {
     1320: {
      perPage: 5,
		},
    1080: {
      perPage: 4,
		},
   }
} ).mount( window.splide.Extensions );
}

}
banner();
