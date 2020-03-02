var instagram = document.getElementById('instagram');
var linkedIn = document.getElementById('linked-in');
var whatsapp = document.getElementById('whatsapp');
var facebook = document.getElementById('facebook');

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



