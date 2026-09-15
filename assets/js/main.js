(function(){
  var t=document.querySelector('.menu-toggle'),n=document.getElementById('primary-nav');
  if(t&&n){t.addEventListener('click',function(){var o=n.classList.toggle('open');t.setAttribute('aria-expanded',o);});}
  var here=location.pathname.replace(/index\.html$/,'');
  document.querySelectorAll('.primary-nav > ul > li > a').forEach(function(a){
    if(a.getAttribute('href')==='#')return;var p=new URL(a.href,location.href).pathname.replace(/index\.html$/,'');
    if(p===here){a.setAttribute('aria-current','page');}
  });
})();
