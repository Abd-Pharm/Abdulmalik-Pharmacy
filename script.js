
document.addEventListener('DOMContentLoaded',()=>{
 const nav=document.querySelector('.nav'), menu=document.querySelector('.menu');
 if(menu) menu.addEventListener('click',()=>nav.classList.toggle('open'));
 const forms=document.querySelectorAll('form[data-demo]');
 forms.forEach(f=>f.addEventListener('submit',e=>{
   e.preventDefault();
   const box=f.querySelector('.form-message');
   if(box){box.textContent='Thank you. Your request has been recorded in this demo. Connect this form to email, WhatsApp, or a database before launch.';box.hidden=false;}
 }));
});
