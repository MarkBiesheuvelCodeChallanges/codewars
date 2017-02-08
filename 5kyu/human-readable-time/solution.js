function pad(x){
  return ('0'+x).slice(-2);
}

function humanReadable(seconds) {

  var hours = Math.floor(seconds / 3600);
  seconds -= hours*3600;
  var minutes = Math.floor(seconds / 60);
  seconds -= minutes*60;

  return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
}