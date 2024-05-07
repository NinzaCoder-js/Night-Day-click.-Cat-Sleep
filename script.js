
let submit = document.querySelector("#btn2");
let submit1 = document.querySelector("#btn1");
let img = document.querySelector('img');

submit.addEventListener('click', ()=>{
    let selected = document.querySelector('body');
    selected.style.background='black';
    selected.style.transition='All 0.4s';
    submit.style.background='red';
    submit1.style.background='white';
    img.style.transform='scale(0.9)';
    img.style.transition='All 0.4s';

})

submit1.addEventListener('click', ()=>{
    let selected = document.querySelector('body');
    selected.style.background='white';
    selected.style.transition='All 0.4s';
    submit1.style.background='red';
    submit.style.background='white';
    img.style.transform='scale(1)';
    img.style.transition='All 0.4s';

})