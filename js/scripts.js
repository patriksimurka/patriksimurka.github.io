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
  setTimeout(function() {click = true;}, 1500);  
}

//not in use yet
function main(skupina) {
  shuffle(orig_ziaci);

  var storedNames = JSON.parse(localStorage.getItem(skupina));

  if(storedNames === null || storedNames.length == 0) {
    var ziaci = orig_ziaci;
  } else {
    var ziaci = storedNames;
  }

  for(i=ziaci.length+1; i<=30; i++){
    j = i.toString();
    document.getElementById(j).parentElement.style.display='none';
  }

  var uz = [];

  var click = true;

  $(document).on('click', 'button', function () {

    if(click) {

      revert();
      
      $(this).css({'background-color':"#6b027d","color":"white","font-weight":"900","width":"140px","margin-left":"auto"});
      
      ake = $( this ).find(".cislo").attr( "id" );
      var uz_ziaci = [];
      if(!uz.includes(ake)){
        $( this ).find(".cislo").text( ziaci.pop() );
        uz.push(ake);
        var temp = ziaci.slice();
        var vsetky = document.getElementsByClassName("cislo");
        for (i=0; i<=vsetky.length-1; i++) {
          if((vsetky[i]).innerHTML == '???'){
            vsetky[i].style.fontSize = '12px';
            vsetky[i].innerHTML = (temp.pop());
            shuffle(temp);
          }
          setTimeout(function(){revert();}, 1500);

        } 
        shuffle(ziaci);
      };
      localStorage.setItem(skupina, JSON.stringify(ziaci));
      no_click();
    }
  });

  document.getElementById("reset").onclick = function(){
    localStorage.setItem(skupina, JSON.stringify(orig_ziaci));
    location.reload();
    return false;
  }
}
