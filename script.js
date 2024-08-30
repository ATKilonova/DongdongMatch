let slideIndex = 0;
  const slideInterval = 8000; // 自动轮播时间间隔 (毫秒)

  showSlides(slideIndex);

  // 自动轮播
  const autoSlide = setInterval(() => {
    moveSlide(1);
  }, slideInterval);

  function moveSlide(n) {
    showSlides(slideIndex += n);
  }

  function showSlides(n) {
    const slides = document.querySelectorAll('.carousel-item');

    if (n >= slides.length) {
      slideIndex = 0;
    } else if (n < 0) {
      slideIndex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.transform = `translateX(-${slideIndex * 100}%)`;
    }
  }

  // 手动切换时重置自动轮播
  document.querySelector('.carousel-control.prev').addEventListener('click', () => {
    moveSlide(-1);
    resetAutoSlide();
  });

  document.querySelector('.carousel-control.next').addEventListener('click', () => {
    moveSlide(1);
    resetAutoSlide();
  });

  function resetAutoSlide() {
    clearInterval(autoSlide);
    setInterval(() => {
      moveSlide(1);
    }, slideInterval);
  }