function countdown(callback) {
  window.setTimeout(function(){
    callback();
  }, 2000);
}