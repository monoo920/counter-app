let counter =0;
const counterValue=document.querySelector('.display');
const decValue=document.querySelector('.dec-btn');
const incValue=document.querySelector('.incr-btn');
const resetBtn=document.querySelector('.reset');

decValue.addEventListener('click', ()=>{
    counter--;
    counterValue.innerHTML=counter;
});

incValue.addEventListener('click', ()=>{
    counter++;
    counterValue.innerHTML=counter;
});

resetBtn.addEventListener('click', ()=>{
    counter=0;
    counterValue.innerHTML=counter;
});



