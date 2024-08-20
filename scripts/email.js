// Inicaliza EmailJS con la Public Key
emailjs.init("XUiDpjtLKmPxqNM6u");

// Evento submit del formulario
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene que se recarge la pagina

    // Envía el formulario usando EmailJS
    emailjs.sendForm('abogado', 'abogado', this)
        .then(function() {
            alert('Mensaje enviado exitosamente!');
            document.getElementById('contact-form').reset(); // Limpia el formulario
        }, function(error) {
            console.log('FAILED...', error);
            alert('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente');
        });
});