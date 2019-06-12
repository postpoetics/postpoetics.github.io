

$(document).ready(function() {


var ua = navigator.userAgent.toLowerCase(),
    selectorX = $('#hourlyOffrWrper ul#myOffrAdd'); 
  if (ua.indexOf('safari') != -1) { 
    if (ua.indexOf('chrome') > -1) {
      $(function(){
  $gyroArea = $('#gyroArea');
  $ball = $('.book-m');
  // 자이로 센서를 사용할 경우에는 공을 기울기에 의해 움직일 수있게하는
  var balls = $ball,
    bounceRaito = 0.4,
    bounceLimitSpeed = 1.5,
    min = Math.min,
    max = Math.max,
    abs = Math.abs,
    floor = Math.floor,
    rValues = [1.0, 0.76, 0.8, 0.7, 0.6, 0.55, 0.612, 0.9, 0.65, 0.95, 0.62, 0.87, 0.33, 0.45, 0.23, 0.987, 0.67, 0.99, 0.34, 0.77, 0.69, 0.44, 1.2, 1.05],
    ballCanMove = false,
    areaHeight = $gyroArea.height(),
    areaWidth = $gyroArea.width(),
    bottomLimit = Math.floor(areaHeight - ($ball.height() + 250 )),
    rightLimit = Math.floor(areaWidth - $ball.width());
  // 공을 이동 사인을 낸다.
  setTimeout(function() {ballCanMove = true; });
  // 회전을 얻을 수 있습니다.
  window.ondeviceorientation = function(event) {
    // 회 전량
    var alpha = event.alpha;   // z-axis
    var beta = event.beta;     // x-axis
    var gamma = event.gamma;   // y-axis
    // 공을 달린다.
    if (ballCanMove) {
      balls.each(function(index, ball) {
        // gamma 값이 양수이면 오른쪽으로, 음수이면 왼쪽으로 이동한다.
        var oldSpeed = ball.speedX || 0;
        var x = parseInt(ball.style.left || 0);
        if (x === rightLimit && oldSpeed === 0 && gamma > 0) {
          // 아무것도
        } else if (x === 0 && oldSpeed === 0 && gamma < 0) {
          // 아무것도
        } else {
          var speed = oldSpeed + ((gamma) / 100) * rValues[index%rValues.length];
          var x = x + speed;
          x =  max(0, min(rightLimit, x));
          ball.style.left = x + 'px';
          ball.speedX = speed;
        }
      });
    }
  };
  // 장치의 방향이 바뀌면 폭의 재 계산을한다.
  window.onorientationchange = function () {
    //console.debug('orientationchange: is called.');
    areaHeight = $gyroArea.height(),
    areaWidth = $gyroArea.width(),
    bottomLimit = Math.floor(areaHeight - $ball.height()),
    rightLimit = Math.floor(areaWidth - $ball.width())
  };
});
    } else {
      $(function(){
  $gyroArea = $('#gyroArea');
  $ball = $('.book-m');
  // 자이로 센서를 사용할 경우에는 공을 기울기에 의해 움직일 수있게하는
  var balls = $ball,
    bounceRaito = 0.4,
    bounceLimitSpeed = 1.5,
    min = Math.min,
    max = Math.max,
    abs = Math.abs,
    floor = Math.floor,
    rValues = [1.0, 0.76, 0.8, 0.7, 0.6, 0.55, 0.612, 0.9, 0.65, 0.95, 0.62, 0.87, 0.33, 0.45, 0.23, 0.987, 0.67, 0.99, 0.34, 0.77, 0.69, 0.44, 1.2, 1.05],
    ballCanMove = false,
    areaHeight = $gyroArea.height(),
    areaWidth = $gyroArea.width(),
    bottomLimit = Math.floor(areaHeight - ($ball.height() + 250 )),
    rightLimit = Math.floor(areaWidth - $ball.width());
  // 공을 이동 사인을 낸다.
  setTimeout(function() {ballCanMove = true; });
  // 회전을 얻을 수 있습니다.
  window.ondeviceorientation = function(event) {
    // 회 전량
    var alpha = event.alpha;   // z-axis
    var beta = event.beta;     // x-axis
    var gamma = event.gamma;   // y-axis
    // 공을 달린다.
    if (ballCanMove) {
      balls.each(function(index, ball) {
        // gamma 값이 양수이면 오른쪽으로, 음수이면 왼쪽으로 이동한다.
        var oldSpeed = ball.speedX || 0;
        var x = parseInt(ball.style.left || 0);
        if (x === rightLimit && oldSpeed === 0 && gamma > 0) {
          // 아무것도
        } else if (x === 0 && oldSpeed === 0 && gamma < 0) {
          // 아무것도
        } else {
          var speed = oldSpeed + ((gamma) / 100) * rValues[index%rValues.length];
          var x = x + speed;
          x =  max(0, min(rightLimit, x));
          ball.style.left = x + 'px';
          ball.speedX = speed;
        }
      });
    }
  };
  // 장치의 방향이 바뀌면 폭의 재 계산을한다.
  window.onorientationchange = function () {
    //console.debug('orientationchange: is called.');
    areaHeight = $gyroArea.height(),
    areaWidth = $gyroArea.width(),
    bottomLimit = Math.floor(areaHeight - $ball.height()),
    rightLimit = Math.floor(areaWidth - $ball.width())
  };
});
    }
  }


});

