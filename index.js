function countdown(callback) {
  window.setTimeout(function(){
    callback();
  }, 2000);
}

function createMultiplier(multiplyValue){
  return function (value) {
    return multiplyValue * value
  };

}
