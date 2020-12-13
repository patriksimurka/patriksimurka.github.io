function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function revert() {
  for(i=0; i<=30; i++){
    var j = i.toString();
    var tento = document.getElementById(j);
    if(tento != null && tento.parentElement.style.color!='white'){
      tento.style.fontSize = '16px';
      tento.innerHTML = '???';
    }
  }
}

function no_click() {
  click = false;
  setTimeout(function() {click = true;}, 700);  
}
