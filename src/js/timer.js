// Дата свадьбы и текущий день

const date = new Date();
const dateMarriage = new Date('August 07, 2026 10:30:00');

const dayCount = document.querySelector('.timer__day span');

const result = new Date(dateMarriage - date);

dayCount.textContent = result.getDate(dateMarriage);

