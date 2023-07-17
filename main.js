const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = false;
const intervaltime = 5000;
let slideInterval;
const prevslide = () => {
    //get current class
    const current = document.querySelector('.current');
    //remove current class
    current.classList.remove('current');
    //check for next slide
    if (current.previousElementSibling) {
        //add current to next sibling
        current.previousElementSibling.classList.add('current');
    } else {

        //add current to start
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));

};
//button events
next.addEventListener('click', e => {
nextslide();
});
prev.addEventListener('click', e => {
    prevslide();
});
