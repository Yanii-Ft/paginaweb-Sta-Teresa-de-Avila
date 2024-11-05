document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById('contact-form');
    const suggestionForm = document.getElementById('suggestion-form');
    const backToTopButton = document.createElement('button');

    backToTopButton.innerText = "Volver Arriba";
    backToTopButton.classList.add('back-to-top');
    document.body.appendChild(backToTopButton);

    // Muestra el botón "Volver Arriba" cuando se desplaza hacia abajo
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Desplazar hacia arriba al hacer clic en el botón
    backToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Validar y enviar el formulario de contacto
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email').value;
        const message = document.getElementById('contact-message').value;

        if (name && email && message) {
            console.log('Enviando formulario de contacto...');
            alert('Mensaje enviado con éxito. ¡Gracias por contactarnos!');
            contactForm.reset();
        }
    });

    // Validar y enviar el formulario de sugerencias
    suggestionForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const suggestion = document.getElementById('suggestion').value;

        if (name && email && suggestion) {
            console.log('Enviando sugerencia...');
            alert('Sugerencia enviada con éxito. ¡Gracias por tu aporte!');
            suggestionForm.reset();
        }
    });
});

let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) currentIndex = 0;
    else if (index < 0) currentIndex = slides.length - 1;
    else currentIndex = index;

    // Mueve las diapositivas hacia la izquierda o derecha
    document.querySelector('.slides').style.transform = `translateX(-${currentIndex * 100}%)`;
}

function moveSlide(step) {
    showSlide(currentIndex + step);
}

// Avanza automáticamente cada 3 segundos
setInterval(() => moveSlide(1), 3000);
