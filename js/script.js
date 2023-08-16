 // Código JavaScript para mostrar el mensaje emergente y reproducir la música
 window.onload = function() {
    document.getElementById("popup").style.display = "flex";
}

var audio = new Audio("source/cancion1.mp3");

document.getElementById("accept-button").onclick = function() {
    document.getElementById("popup").style.display = "none";
    audio.play();
    document.getElementById("pause-button").style.display = "block";
    
}

document.getElementById("pause-button").onclick = function() {
    audio.pause();
    document.getElementById("pause-button").style.display = "none";
    document.getElementById("play-button").style.display = "block";
}

document.getElementById("play-button").onclick = function() {
    audio.play();
    document.getElementById("play-button").style.display = "none";
    document.getElementById("pause-button").style.display = "block";
}

  document.addEventListener("DOMContentLoaded", function () {
// Obtén el botón "Aceptar" y los elementos con la clase "appear"
const btnAceptar = document.getElementById("accept-button");
const elementsToAppear = document.querySelectorAll(".appear");

// Agrega un controlador de eventos al botón "Aceptar"
btnAceptar.addEventListener("click", function () {
// Agrega la clase "show" a los elementos con la clase "appear" después de un pequeño retraso
elementsToAppear.forEach((element, index) => {
  setTimeout(() => {
    element.classList.add("show");
  }, 300 * index); // Ajusta el valor del retraso (en milisegundos) para cambiar la secuencia de aparición
});
});
});
  // Función para verificar si el elemento está visible en la ventana del navegador
function isElementInViewport(el) {
const rect = el.getBoundingClientRect();
return (
  rect.top >= 0 &&
  rect.left >= 0 &&
  rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
  rect.right <= (window.innerWidth || document.documentElement.clientWidth)
);
}

// Función que maneja el efecto de desvanecimiento cuando el elemento es visible
function fadeInOnScroll() {
const fraseElement = document.getElementById("frase");

function fadeIn() {
  let opacity = 0;
  const targetOpacity = 1;
  const duration = 1000; // Duración de la animación en milisegundos
  const interval = 50; // Intervalo de tiempo para actualizar la opacidad (ms)
  const increment = (targetOpacity / (duration / interval));

  const intervalId = setInterval(function() {
      if (opacity <= targetOpacity) {
          fraseElement.style.opacity = opacity;
          opacity += increment;
      } else {
          clearInterval(intervalId);
      }
  }, interval);
}

function handleScroll() {
  if (isElementInViewport(fraseElement)) {
      fadeIn();
      window.removeEventListener("scroll", handleScroll);
  }
}

// Agregar evento de desplazamiento para activar el efecto de desvanecimiento
window.addEventListener("scroll", handleScroll);
}

// Esperar a que la página esté completamente cargada para agregar el evento de desplazamiento
window.addEventListener("load", fadeInOnScroll);


// Código JavaScript para detener la música al hacer clic en los enlaces
var links = document.querySelectorAll("a");

links.forEach(link => {
link.addEventListener("click", function() {
audio.pause();
document.getElementById("pause-button").style.display = "none";
document.getElementById("play-button").style.display = "block";
});
});


  
// Código JavaScript para el carrusel de imágenes
var slideIndex = 0;
var slides = document.querySelectorAll(".carousel-image");
var leftButton = document.querySelector(".carousel-button.left");
var rightButton = document.querySelector(".carousel-button.right");

// Función para mostrar el slide actual
function showSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

// Función para avanzar al siguiente slide
function nextSlide() {
  slides[slideIndex].style.display = "none";
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  slides[slideIndex].style.display = "block";
}

// Función para retroceder al slide anterior
function prevSlide() {
  slides[slideIndex].style.display = "none";
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  slides[slideIndex].style.display = "block";
}

// Avanzar automáticamente cada 10 segundos
setInterval(nextSlide, 10000);

// Mostrar el primer slide al cargar la página
showSlide();

// Agregar eventos a los botones del carrusel
leftButton.addEventListener("click", prevSlide);
rightButton.addEventListener("click", nextSlide);
  
// Código JavaScript para la cuenta regresiva
  const countdownElement = document.getElementById('countdown-timer');
  const weddingDate = new Date('October 21, 2023 00:00:00').getTime();

  function updateCountdown() {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Actualizar las celdas de la tabla con los valores de la cuenta regresiva
      document.getElementById('days').textContent = days;
      document.getElementById('hours').textContent = hours;
      document.getElementById('minutes').textContent = minutes;
      document.getElementById('seconds').textContent = seconds;

      if (distance < 0) {
          countdownElement.textContent = "¡Ha llegado el día de nuestra boda!";
          document.getElementById('countdown-labels').style.display = 'none';
      } else {
          document.getElementById('countdown-labels').style.display = 'table-row';
      }
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  //calendario

  document.getElementById("agregar-al-calendario-button").onclick = function() {
// Formatear la fecha de inicio y fin para el evento
const startDate = new Date('2023-10-21T18:00:00');
const endDate = new Date('2023-10-21T23:00:00');

// Crear la URL para agregar el evento al calendario (Google Calendar y otros)
const googleCalendarLink = `https://www.google.com/calendar/render?action=TEMPLATE&text=Boda+Martha+y+Ricardo&dates=${startDate.toISOString().replace(/-|:|\.\d+/g, "")}/${endDate.toISOString().replace(/-|:|\.\d+/g, "")}&details=¡No+te+pierdas+nuestra+boda!&location=Parroquia+de+Nuestra+Señora+de+Guadalupe,+AV.+Tepeyac+550,+Col:+Chapalita,+Guadalajara,+Jalisco`;

// Enlace para dispositivos iOS (iPhone, iPad)
const iOsCalendarLink = `webcal://www.google.com/calendar/event?text=Nuestra+Boda&dates=${startDate.toISOString().replace(/-|:|\.\d+/g, "")}/${endDate.toISOString().replace(/-|:|\.\d+/g, "")}&details=¡No+te+pierdas+nuestra+boda!&location=Parroquia+de+Nuestra+Señora+de+Guadalupe,+AV.+Tepeyac+550,+Col:+Chapalita,+Guadalajara,+Jalisco`;

// Intentar abrir primero el enlace para iOS y, si falla, abrir el enlace para otros dispositivos
const openInIos = () => {
window.open(iOsCalendarLink, "_blank");
window.location.href = googleCalendarLink;
};

// Intentar abrir el enlace para iOS
if (navigator.platform.match(/iPhone|iPad|iPod/)) {
// Verificar si es un dispositivo iOS (iPhone, iPad, iPod)
if (navigator.standalone) {
  // Si la aplicación está en modo de pantalla completa (sin navegador), abrir el enlace en una nueva pestaña
  openInIos();
} else {
  // Si no está en modo de pantalla completa (con navegador), mostrar una ventana emergente con instrucciones
  alert("Para agregar el evento a tu calendario, selecciona 'Abrir' cuando se te solicite abrir la aplicación Calendario.");
}
} else {
// Si no es un dispositivo iOS, abrir el enlace para otros dispositivos
window.open(googleCalendarLink, "_blank");
}
};
// Inicializar ScrollReveal al cargar la página
const sr = ScrollReveal({
origin: 'top',
distance: '20px',
duration: 2000,
delay: 500,
});

sr.reveal('.reveal-text', { interval: 200 });
sr.reveal('.frase-container', { interval: 200 });
sr.reveal('.contador-content', { interval: 200 });
sr.reveal('.carousel', { interval: 200 });
  sr.reveal('.confirmation-form-container', { interval: 200 });
  sr.reveal('.agregar-al-calendario-section', { interval: 200 });
  sr.reveal('.confirmation-form-container', { interval: 200 });
  sr.reveal('.mesa-de-regalos-section', { interval: 200 });
  sr.reveal('.sin-ninos-section', { interval: 200 });
  sr.reveal('.dress-code-section', { interval: 200 });
  sr.reveal('.image-container', { interval: 200 });
  sr.reveal('.salon-section', { interval: 200 });
  sr.reveal('.blessing-container', { interval: 200 });
  sr.reveal('.bendicion-container', { interval: 200 });
  sr.reveal('.separador-section', { interval: 200 });
  sr.reveal('.container', { interval: 200 });
  sr.reveal('.tituloceremony-container', { interval: 200 });
  sr.reveal('.thank-you', { interval: 200 });

// Función para enviar mensaje de WhatsApp
function sendWhatsAppMessage(message) {
  const phoneNumber = '+523338062465'; // Reemplaza con el número de WhatsApp destino
  const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, '_blank');
}

// Capturar respuesta y enviar mensaje de WhatsApp
document.getElementById('yes-button').addEventListener('click', function() {
  sendWhatsAppMessage('Confirmo mi asistencia a la boda chique. ¡Nos vemos pronto!');
});

document.getElementById('no-button').addEventListener('click', function() {
  sendWhatsAppMessage('Lamento informar que no podré asistir picate la cola. ¡Espero que tengan un gran día!');
});
