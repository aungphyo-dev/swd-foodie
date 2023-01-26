import * as bootstrap from 'bootstrap';
import Typed from 'typed.js';
import './style.scss';
import ScrollReveal from "scrollreveal";
import 'waypoints/lib/noframework.waypoints';


var typed = new Typed('.counter', {
    strings: ['Food...','Drink...'],
    typeSpeed:30,
    backDelay:3000,
    backSpeed:30,
    smartBackspace: true,
    loop:true,
    loopCount:Infinity,
});
let Todown = {
    distance: '150px',
    origin: 'top',
    interval:350,
    duration:900,
};

ScrollReveal().reveal('.todown', Todown);
let Toup = {
    distance: '150px',
    origin: 'bottom',
    interval:350,
    duration:900,
};
ScrollReveal().reveal('.toup', Toup);
let Toright = {
    distance: '100px',
    origin: 'left',
    interval:350,
    duration:900,
};

ScrollReveal().reveal('.toright', Toright);

let Toleft = {
    distance: '100px',
    origin: 'right',
    interval:350,
    duration:900,
};

ScrollReveal().reveal('.toleft', Toleft);

// let sections = ['about','services','menu']
//
// sections.forEach(function (section){
//     new Waypoint({
//         element: document.getElementById(section),
//         handler: function(direction) {
//             let oldLink = document.querySelector('.nav-link.active');
//             oldLink.classList.remove('active');
//             let currentLink = document.querySelector(`[href=${section}]`);
//             currentLink.classList.add('active')
//         },
//         offset: "50%"
//     })
// })




