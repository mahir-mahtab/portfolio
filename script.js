let nav=document.getElementById('menu');
let btn=document.getElementById('menu-btn');
let btn2=document.getElementById('menu-btn-2');
btn.addEventListener('click',()=>{
    nav.classList.toggle('hidden');
    btn.classList.toggle('hidden');
    btn2.classList.toggle('hidden');

    console.log('clicked');
});
btn2.addEventListener('click',()=>{
    nav.classList.toggle('hidden');
    btn.classList.toggle('hidden');
    btn2.classList.toggle('hidden');

    console.log('clicked');
});