import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
document.addEventListener('DOMContentLoaded', function () {
  const acardion = new Accordion('.questions-container', {
    duration: 400,
    showMultiple: false,
    onOpen: function (currentElement) {
      console.log(currentElement); // Логирует открытый элемент
    },
  });
});
