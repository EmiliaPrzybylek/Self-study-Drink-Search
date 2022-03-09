'use strict';

const drinkSearch = document.querySelector('.search');
const drinkList = document.querySelectorAll('li');

const searchEngine = e => {

    const text = e.target.value.toLowerCase();
    console.log(text);

    drinkList.forEach(el => {
        const task = el.textContent;

        if(task.toLowerCase().indexOf(text) !== -1) {
            el.style.display = 'block'
        } else {
            el.style.display = 'none'
        };
    })
}

drinkSearch.addEventListener('keyup', searchEngine)

