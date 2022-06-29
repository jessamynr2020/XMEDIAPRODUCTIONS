document.querySelectorAll('.carousel').forEach((carousel) => {
  const items = carousel.querySelectorAll('.carousel__item');
  const buttonsHtml = Array.from(items, () => {
      return `<span class="carousel__btn">&#10007;</span>`;
});
  
carousel.insertAdjacentHTML(
  "beforeend",
    `
      <div class="carousel__nav">
        ${buttonsHtml.join("")}
      </div>
    `
);
  
const buttons = carousel.querySelectorAll('.carousel__btn');
  
buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    items.forEach((item) =>
      item.classList.remove('carousel__item--selected')
        );
    buttons.forEach((button) =>
          button.classList.remove('carousel__btn--selected')
        );
    items[i].classList.add('carousel__item--selected');
    button.classList.add('carousel__btn--selected');
  });
});
  
    items[0].classList.add('carousel__item--selected');
    buttons[0].classList.add('carousel__btn--selected');
  });

const menu = document.querySelector('#mobile__menu');
const menuLinks = document.querySelector('.navbar__menu');
const body = document.querySelector('body');

const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
  body.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);
