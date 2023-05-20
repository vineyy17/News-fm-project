// const menu = document.querySelectorAll('menu__link');
// const toggle = document.getElementById('menu-toggle');

// menu.forEach((link) => {
//     link.addEventListener('click', (e) => {
//         e.preventDefault();
//     })

//     toggle.checked = false;

//     const target = link.getAttribute('href');
//     scrollToTarget(target);
// })


// function scrollToTarget(target) {
//     const element = document.querySelector(target);
  
//     if (element) {
//       element.scrollIntoView({
//         behavior: 'smooth' 
//       });
//     };
//   };


  const menu = document.querySelector(".menu");

  const yListener = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
          menu.classList.add('menu__hide');
        } else {
          menu.classList.remove('menu__hide');
        }
    };
  
  window.addEventListener('scroll', yListener);


