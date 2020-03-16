var instagram = document.getElementById('instagram');
var linkedIn = document.getElementById('linked-in');
var whatsapp = document.getElementById('whatsapp');
var facebook = document.getElementById('facebook');

//burger
var burger = document.getElementById('burger');
var line1 = document.getElementById('line-1');
var line2 = document.getElementById('line-2');
var line3 = document.getElementById('line-3');

//burger effect
var expanded = false;
var navPage = document.getElementById('burger-menu');

//scrollto Buttons
var home = document.getElementById('home');
var services = document.getElementById('service');
var projects = document.getElementById('project');
var partners = document.getElementById('partners');
var contact = document.getElementById('contact-section');

//burger buttons
var homeBurger = document.getElementById('home-burger');
var servicesBurger = document.getElementById('service-burger');
var projectsBurger = document.getElementById('project-burger');
var partnersBurger = document.getElementById('partners-burger');
var contactBurger = document.getElementById('contact-burger');

//scrollto Pageheigts
var servicesPage = document.getElementById('services-page');
var projectsPage = document.getElementById('projects-page');
var partnersPage = document.getElementById('partners-page');
var contactPage = document.getElementById('contact-page');

//main navbar
addEvent(home, 0);
addEvent(services, servicesPage);
addEvent(projects, projectsPage);
addEvent(partners, partnersPage);
addEvent(contact, contactPage);

//burger navbar
addEvent(homeBurger, 0);
addEvent(servicesBurger, servicesPage);
addEvent(projectsBurger, projectsPage);
addEvent(partnersBurger, partnersPage);
addEvent(contactBurger, contactPage);

function addEvent(element, page){

    element.addEventListener('click', ()=>{
        window.scrollTo({
            top: page.offsetTop - 50,
            behavior: "smooth"
        });
        navPage.classList.remove('opacity-1');

        line1.classList.remove('turn-right');
        line2.style.display = 'block';
        line3.classList.remove('turn-left');

        expanded = !expanded

    });

}




burger.addEventListener('click', ()=>{


    if (expanded === false){
        line1.classList.add('turn-right');
        line2.style.display = 'none';
        line3.classList.add('turn-left');

        navPage.classList.add('opacity-1');


    }
    else {
        line1.classList.remove('turn-right');
        line2.style.display = 'block';
        line3.classList.remove('turn-left');

        navPage.classList.remove('opacity-1');

    }

    expanded = !expanded;



});

instagram.addEventListener('click', ()=>{
    window.open('https://www.instagram.com/siteenservice/');
});

linkedIn.addEventListener('click', ()=>{
    window.open('https://www.linkedin.com/in/luke-lases-b6315014b/');
});

whatsapp.addEventListener('click', ()=>{
    window.open('https://api.whatsapp.com/send?phone=+31637404703&text=Dag%20Luke!')
});

facebook.addEventListener('click', ()=>{
   window.open('https://www.facebook.com/siteenservice/')
});



