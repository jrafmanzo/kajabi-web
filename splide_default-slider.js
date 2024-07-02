function logos() {

let splides = $('#logos');
for ( let i = 0, splideLength = splides.length; i < splideLength; i++ ) {
	new Splide( splides[ i ], {
  perPage: 5,
  arrows: false,
  pagination: false,
  focus: 'center',
  direction: 'ltr',
  gap: '1.5rem',
  type: 'loop',
  autoScroll: {
    autoStart: true,
    speed: 0.8,
  },
  intersection: {
    inView: {
      autoScroll: true,
    },
    outView: {
      autoScroll: false,
    },
   },
} ).mount( window.splide.Extensions );
}

}
logos();
