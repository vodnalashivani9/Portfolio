/*============ toggle icon navbar =============*/
let nemuIcon = document.querySelection('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-mark');
    navbar.classList.toggle('active')
}
/*==============scroll section active link==================*/
let sections = document.querySelectionAll('section');
let navLink = document.queryselectionAll('header nav a');
window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLink.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*================sticky navbar================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scroll > 100);
    /*====================remove toggle icon and navbar========================*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};
/*==================scroll reveal=================*/
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});
ScrollReveal().reveal('.home-content,heading',{orgin: 'top'});
ScrollReveal().reveal('.home-img .services-container, .portfolio-box, .contact form', {orgin: 'button' });
ScrollReveal().reveal('.home-contact h1, .about-img', { orgin: 'left'});
ScrollReveal().reveal('.home-contact p, .about-content', { orgin: 'right' });
/*======TYPED JS========*/
