document.querySelector('.menu-toggle')?.addEventListener('click',function(){
 var n=document.querySelector('.main-nav');var o=n.classList.toggle('open');
 this.setAttribute('aria-expanded',o);});