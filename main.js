// // Toggle icon navbar

// let nemuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('fa-xmark');
//     navbar.classList.toggle('active');
// }

// // scroll section active link

// let sections = document.querySelectorAll('section')
// let navLinks = document.querySelectorAll('header nav a');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollV;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if(top >= offset && top < offset + height){
//             navLinks.forEach.apply(links => {
//                 links.classList.remove('active');
//                 document.querySelector('header nav a[href*=' + id +']').classList.add('active');

//             });
//         };
//     });
// }


// //sticky navbar
// let header = document.querySelector('header');
// header.classList.toggle('sticky', window.scrollY > 100);


// //remove toogle icon and navbar
// menuIcon.classList.remove('fa-xmark');
// navbar.classList.remove('active');



// //Scroll Reveal
// ScrollReveal({ 
//     distance: '80px',
//     duration: 2000,
//     delay: 200,
//  });

//  ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
//  ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'buttom' });
//  ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
//  ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });


//  //typed.js
// // const typed = new typed('.multiple-text', {
// //     strings: ['web developer, java developer'],
// //     typeSpeed: 70,
// //     backSpeed: 70,
// //     backDelay: 100,
// //     loop: true,
// // }) ;
// // Ensure you have included Typed.js library in your HTML

// // Correctly initializing Typed.js
// const typed = new Typed('.multiple-text', {
//     strings: ['web developer', 'java developer'],
//     typeSpeed: 70,
//     backSpeed: 70,
//     backDelay: 100,
//     loop: true,
// });



// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon'); // Fixed variable name
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

// scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY; // Fixed scroll value
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(link => { // Fixed forEach function
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
}

// Sticky navbar
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

// Remove toggle icon and navbar on scroll
menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');

// Scroll Reveal
ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// Typed.js
const typed = new Typed('.multiple-text', {
    strings: ['web developer', 'java developer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 100,
    loop: true,
});
// console.log("alrt")