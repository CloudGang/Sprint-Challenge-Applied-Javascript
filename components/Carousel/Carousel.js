/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carImgs = [
  './assets/carousel/mountains.jpeg',
  './assets/carousel/computer.jpeg',
  './assets/carousel/trees.jpeg',
  './assets/carousel/turntable.jpeg'
];

function Carousel(carImgs) {

  const splide = document.querySelector("image-slider");
  const carousel = document.createElement('div');
  const navL = document.createElement('div');
  const navR = document.createElement('div');
  const splideT = document.createElement('div');
  const splideL = document.createElement('ul');
  const splideS = document.createElement('li');
  const images = carImgs.map(imagePath => {
    const img = document.createElement('img');
    img.src = imagePath;
    img.addEventListener('imgNav', () => {
      img.style.animationName = 'BasicNav';
    });
    return img;
  });
    
  carousel.append(...images, navL, navR);
  /**** whhhyyyyyyy???? ;'o

  ...images.append(splideT, splideL, splideS);
  
  splide.append(splideT, splideL, splideS);
  
  ****/
  carousel.classList.add('carousel');
  carousel.classList.add('splide');
  carousel.setAttribute('id', 'image-slider');
  splideT.classList.add('splide_track'); 
  splideL.classList.add('splide_list');
  splideS.classList.add('splide_slide');
  navL.classList.add('left-button');
  navR.classList.add('right-button');
  navL.textContent = 'L';
  navR.textContent = 'R';


  let index = 1;

  images[index].style.display = 'block';

  /************* vV Needs Work Vv
  navR.addEventListener('click', () => {
    TweenMax.to((carImgs[index]) , 1, {autoAlpha: 0, display: "none"});
    if(index === 0){
      index = carImgs.length;
    }
    index--;
    
    setTimeout(function(){
      TweenMax.to((carImgs[index]) , 0.3, {autoAlpha: 1, display: "block"});
    }, 350);
  })
  ****************/
  navR.addEventListener('click', () => {
    images[index].style.animationName = 'one-way';
    setTimeout(() => {
      images[index].style.display = 'none';
      if (++index === images.length) index = 0;
      images[index].style.animationName = 'other-way';
      images[index].style.display = 'block';
    }, 250);
  });

  navL.addEventListener('click', () => {
    images[index].style.animationName = 'one-way';
    setTimeout(() => {
      images[index].style.display = 'none';
      if (--index === -1) index = images.length - 1;
      images[index].style.animationName = 'other-way';
      images[index].style.display = 'block';
    }, 500); /* Slight delay incase clicked too often */
 });

  return carousel;
}

const carC = document.querySelector('.carousel-container');

carC.append(Carousel(carImgs));

document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '#image-slider' ).mount();
} );