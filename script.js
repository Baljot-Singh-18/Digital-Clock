var clock = document.getElementById('clock');
var btn12hr = document.getElementById('btn12hr');
var btn24hr = document.getElementById('btn24hr');
var format = '24hr';

function updateTime() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  if (format == '12hr') {
      var period = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
      hours = hours < 10 ? '0' + hours : hours;
  } else {
      hours = hours < 10 ? '0' + hours : hours;
  }

  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  var timeString = format == '12hr' ? (hours + ":" + minutes + ":" + seconds + ' ' + period) : (hours + ":" + minutes + ":" + seconds);

  clock.textContent = timeString;

};

updateTime();
setInterval(updateTime, 1000); // 1000ms = 1s

// Add event listeners to buttons to change time format
btn12hr.addEventListener('click', function() {
    format = '12hr';
});

btn24hr.addEventListener('click', function() {
    format = '24hr';
});
