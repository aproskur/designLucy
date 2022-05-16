let cards = document.querySelectorAll('.card');
let modal_image = document.querySelector('.full-image');


cards.forEach((card) => {
  card.addEventListener('click', () => {
    modal_image.src = "";
    let bigSrc = card.getAttribute('data-original');
    modal_image.src = `${bigSrc}`;
  });
});



//Кнопка для возвращения наврех
const mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
