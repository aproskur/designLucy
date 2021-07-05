let cards = document.querySelectorAll('.card');
let modal_image = document.querySelector('.full-image');
let mdi = document.querySelector('.dynamic_modal_image')

cards.forEach((card) => {
  card.addEventListener('click', () => {
    mdi.setAttribute("src", "");
    console.log(mdi);
    let bigSrc = card.getAttribute('data-original');
    modal_image.src = `${bigSrc}`;
  });
});
