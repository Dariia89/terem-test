// скрытие блока с заголовком при клике на кнопку 1
const btn1 = document.querySelector('.btn-warning');
btn1.addEventListener('click', () => {
    document.querySelector('.block1').classList.toggle('hidden');
})

// при клике на кнопку 2 блоки 2 и 4 меняются местами
const btn2 = document.querySelector('.btn-success');
let clicked = false;
const block2 = document.querySelector('.block2');
const block3 = document.querySelector('.block3');
const block4 = document.querySelector('.block4');

btn2.addEventListener('click', () => {
    if (clicked) {
        block2.style.order = 1;
        block3.style.order = 2;
        block4.style.order = 3;
    } else {
        block2.style.order = 2;
        block3.style.order = 1;
        block4.style.order = 3;
    }
    clicked = !clicked;
})


// модальное окно
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.overlay').style.display = 'block';
})
document.querySelector('.btn-close-modal').addEventListener('click', () => {
    document.querySelector('.overlay').style.display = 'none';
})

