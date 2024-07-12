const button = document.getElementById('main__ham__button');
const links = document.querySelector('.main__nav__button__links');
const bars = document.getElementsByClassName('main__nav__button__bars');

button.addEventListener('click', () => {
    links.classList.toggle('open');
    for (let i = 0; i < bars.length; i++) {
        bars[i].classList.toggle('open');
    }
})  