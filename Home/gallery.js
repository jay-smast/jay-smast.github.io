// Open the carousel
function openModal() {
    document.getElementById('myModal').style.display = 'block';
  }
  
  
  function closeModal() {
    document.getElementById('myModal').style.display = 'none';
  }
  
  let slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    const slides = document.getElementsByClassName('mySlides');
    // const dots = document.getElementsByClassName('dotSpot');
   
    
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    
    // for (let i = 0; i < dots.length; i++) {
    //   dots[i].className = dots[i].className.replace(' active', '');
    // }
    
    slides[slideIndex - 1].style.display = 'block';
    // dots[slideIndex - 1].className += ' active';
    // captionText.innerHTML = dots[slideIndex - 1].alt;
  }