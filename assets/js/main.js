

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();

// Función para mostrar el servicio seleccionado
function showServiceDetails(serviceId) {
  var contents = document.getElementsByClassName('service-content');
  for (var i = 0; i < contents.length; i++) {
    contents[i].style.display = 'none';
  }
  document.getElementById(serviceId).style.display = 'block';
}

// Función única para la carga inicial
window.onload = function() {
  // Muestra 'web-design' al cargar la página si es la sección correspondiente
  var serviceWebDesign = document.getElementById('web-design');
  if (serviceWebDesign) {
    showServiceDetails('web-design');
  }

  // Muestra 'servies-aconise' al cargar la página si es la sección correspondiente
  var serviceAconise = document.getElementById('low-tension-distribution');
  if (serviceAconise) {
    showServiceDetails('low-tension-distribution');
  }
};


document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".img-move");

  function handleScroll() {
    images.forEach(image => {
      const imagePosition = image.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (imagePosition < windowHeight - 50) {
        image.classList.add("img-visible");
      }
    });
  }

  window.addEventListener("scroll", handleScroll);

  // Ejecuta la función inmediatamente para comprobar si la imagen ya está en vista
  handleScroll();
});

// script.js

let index = 0;
const imagenes = document.getElementById('imagenes');
const totalImagenes = document.querySelectorAll('.imagen').length;
let intervalo;

// Función para mostrar la imagen actual
function mostrarImagen() {
    imagenes.style.transform = 'translateX(' + (-index * 100) + '%)';
}

// Función para ir a la siguiente imagen
function siguiente() {
    index = (index + 1) % totalImagenes;
    mostrarImagen();
    resetIntervalo();
}

// Función para ir a la imagen anterior
function anterior() {
    index = (index - 1 + totalImagenes) % totalImagenes;
    mostrarImagen();
    resetIntervalo();
}

// Añadir eventos a los botones
document.getElementById('siguiente').addEventListener('click', siguiente);
document.getElementById('anterior').addEventListener('click', anterior);

// Función para iniciar el cambio automático de imágenes
function iniciarIntervalo() {
    intervalo = setInterval(siguiente, 3000); // Cambia cada 3 segundos
}

// Función para reiniciar el intervalo cuando el usuario navega manualmente
function resetIntervalo() {
    clearInterval(intervalo);
    iniciarIntervalo();
}

// Iniciar el intervalo al cargar la página
window.onload = iniciarIntervalo;


function showServiceDetails(serviceId) {
      // Oculta todos los elementos de contenido de servicio
      var serviceContents = document.getElementsByClassName('service-content');
      for (var i = 0; i < serviceContents.length; i++) {
          serviceContents[i].style.display = 'none';
      }
      // Muestra el contenido correspondiente
      document.getElementById(serviceId).style.display = 'block';
  }

