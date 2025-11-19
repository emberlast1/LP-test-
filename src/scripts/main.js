'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('ticketModal');
  const closeButton = document.querySelector('.close-button');
  const orderButtons = document.querySelectorAll('.button--concerts');
  const modalCity = document.getElementById('modalCity');
  const modalDate = document.getElementById('modalDate');

  orderButtons.forEach(button => {
    button.addEventListener('click', () => {
      const city = button.getAttribute('data-city');
      const date = button.getAttribute('data-date');

      modalCity.textContent = city;
      modalDate.textContent = date;

      modal.style.display = 'block';
    });
  });

  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  document.getElementById('ticketForm').addEventListener('submit', (event) => {
    event.preventDefault();
    modal.style.display = 'none';
  });
});
