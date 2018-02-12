(function(){

  var menuBtn = document.querySelector('.menu-btn');
  var menuWnd = document.querySelector('.menu-wnd');

  menuBtn.addEventListener('click', function(evt) {
    menuBtn.classList.toggle('menu-btn-clicked');
    menuWnd.classList.toggle('menu-wnd-opened');
  });

})();
