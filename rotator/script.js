(function(){

  var rotator = document.querySelector('.rotator');
  var rotatorItems = document.querySelectorAll('.rotator__item');
  var itemsCount = rotatorItems.length;
  var colors = ['1', '0.1', '0.1', '0.1', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9'];
  var tmp;
  var timerId;

  function Draw() {
    for (var i = 0; i < itemsCount; ++i) {
      rotatorItems[i].style.backgroundColor = 'rgba(0, 255, 0, ' + colors[i] + ')';
    }
    tmp = colors.pop();
    colors.unshift(tmp);
  }

  function Play() {
    timerId = setInterval(Draw, 100);
  }

  rotator.addEventListener('click', Play);

})();
