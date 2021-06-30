let cards = document.querySelectorAll('.card');
let modal_image = document.querySelector('.full-image');

cards.forEach((card) => {
  card.addEventListener('click', () => {
    let bigSrc = card.getAttribute('data-original');
    modal_image.src = `${bigSrc}`;
  });
});
