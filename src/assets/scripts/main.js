/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

// Importa el bundle de Bootstrap (incluye Popper y comportamientos JS)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

/**
 * Write any other JavaScript below
 */

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();


// Enviar formulario de Netlify con fetch para tener feedback en local
const setupNetlifyForm = () => {
  const form = document.querySelector('#contact-form');
  const statusEl = document.querySelector('.c-contact__status');

  if (!form || !statusEl) return;

  const encode = (data) =>
    new URLSearchParams(data).toString();

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    statusEl.textContent = 'Enviando...';

    const formData = new FormData(form);
    const body = encode(Object.fromEntries(formData.entries()));

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body
    })
      .then(() => {
        statusEl.textContent = '¡Gracias! Tu mensaje se ha enviado correctamente.';
        form.reset();
      })
      .catch((error) => {
        console.error(error);
        statusEl.textContent =
          'Ha habido un error al enviar el formulario. Por favor, inténtalo de nuevo.';
      });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  setupNetlifyForm();
});