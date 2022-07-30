let cards = document.querySelectorAll('.card');
let modal_image = document.querySelector('.full-image');


cards.forEach((card) => {
  card.addEventListener('click', () => {
    modal_image.src = "";
    let bigSrc = card.getAttribute('data-original');
    modal_image.src = `${bigSrc}`;
  });
});


// function functionClose() {
//      $('#i-modal').hide();
//      $("body").removeClass("modal-open");
//      $('div').remove(".modal-backdrop");
//      $('div').remove(".fade");
//      $('div').remove(".show");
// }
