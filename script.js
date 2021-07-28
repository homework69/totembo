const burger = document.querySelector('.header_burger');
const item = document.querySelector('.nav_link-item');
const icon = document.querySelector('.nav_icon')

burger.addEventListener('click', function () {
    burger.classList.toggle('active')
    item.classList.toggle('active')
    icon.classList.toggle('active')
    
  })