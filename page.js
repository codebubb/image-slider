const sliderViewport = document.querySelector(
  '.image-slider__viewport'
);

const sliderImageContainer = sliderViewport.querySelector(
  '.image-slider__container'
);

const numberOfSliderImages =
  sliderImageContainer.querySelectorAll('img').length;

let slideOffset = 0;

const moveSlides = offset => {
  const imageWidth =
    sliderImageContainer.querySelector('img').offsetWidth;
  sliderImageContainer.style.transform = `translateX(-${
    offset * imageWidth
  }px)`;
};

let timer;

const setTimer = () => {
  timer = setInterval(() => {
    slideOffset =
      slideOffset < numberOfSliderImages - 1
        ? slideOffset + 1
        : 0;
    moveSlides(slideOffset);
  }, 2000);
};

setTimer();

sliderViewport.addEventListener('mouseenter', () => {
  clearInterval(timer);
});

sliderViewport.addEventListener('mouseleave', () => {
  setTimer();
});

const prevButton = document.querySelector(
  '.image-slider__navigation--prev'
);
const nextButton = document.querySelector(
  '.image-slider__navigation--next'
);

prevButton.addEventListener('click', () => {
  slideOffset =
    slideOffset > 1
      ? slideOffset - 1
      : numberOfSliderImages - 1;
  moveSlides(slideOffset);
});

nextButton.addEventListener('click', () => {
  slideOffset =
    slideOffset < numberOfSliderImages - 1
      ? slideOffset + 1
      : 0;
  moveSlides(slideOffset);
});
