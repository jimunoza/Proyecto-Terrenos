let slideIndex = 0;
const blackFade = document.getElementById('black-fade');
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName('slide');
  
  // Ocultar todas las imágenes antes de mostrar la siguiente
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.opacity = '0';
  }

  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  
  // Mostrar la siguiente imagen
  slides[slideIndex - 1].style.opacity = '1';

  // Añadir capa negra después de 5 segundos de mostrar la imagen
  setTimeout(() => {
    blackFade.classList.add('show');
    
    // Después de 1 segundo, ocultar la capa negra y pasar a la siguiente imagen
    setTimeout(() => {
      blackFade.classList.remove('show');
      showSlides();
    }, 500); // El negro solo se muestra 1 segundo
  }, 5000); // La imagen permanece visible durante 5 segundos
}
