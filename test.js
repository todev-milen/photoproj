const nav = document.querySelector('.nav-links');
const burger = document.querySelector('.burger');
const links = nav.querySelectorAll('li');
const navLinks = document.querySelectorAll('.nav-links li');

const navSlide = () => {
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
    navLinks.forEach((link, index) => {
      if(link.style.animation) {
        link.style.animation = '';

      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards  ${index / 3 + 0.3}s`;
      }
    });
  });

  links.forEach(link => {
    link.addEventListener('click', ()=> {
      nav.classList.remove('nav-active');
      burger.classList.toggle('toggle');
    });
  })

  

}



navSlide();