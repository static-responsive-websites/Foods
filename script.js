const icons = document.querySelectorAll('.section-1-icons i');
const menuIcon = document.querySelector('.menu-icon');

menuIcon.addEventListener('click', () => {
  document.querySelectorAll('.target').forEach((el) => {
    el.classList.toggle('change');
  });
});

let i = 1;

setInterval(() => {
  i++;
  const icon = document.querySelector('.section-1-icons .change');

  icon.classList.remove('change');

  if (i > icons.length) {
    icons[0].classList.add('change');
    i = 1;
  } else {
    icon.nextElementSibling.classList.add('change');
  }
}, 4000);
