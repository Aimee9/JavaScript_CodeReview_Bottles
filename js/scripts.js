var bottleCount = function(number) {
  var song = "";
  for(var i = number; i >= 0; i--){
    if(number > 2) {
      song += number + " bottles of beer on the wall, " + number + " bottles of beer.  Take one down, pass it around, " + (number - 1) + " bottles of beer on the wall.  ";
      number--;
    } else if(number === 2) {
      song += number + " bottles of beer on the wall, " + number + " bottles of beer.  Take one down, pass it around, " + (number - 1) + " bottle of beer on the wall.  ";
        number--;
    } else if(number === 1) {
      song += number + " bottle of beer on the wall, " + number + " bottle of beer.  Take one down, pass it around, " + (number - 1) + " bottles of beer on the wall.  ";
        number--;
    } else {
      song += "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.";
    }
  } return song;
};

$(document).ready(function() {
  $("form#bottleSong").submit(function(event) {
    var number= parseInt($("input#number").val());
    var fullSong = bottleCount(number);

      $(".number").text(fullSong)
      //$(".final").text(result)
       $("#result").show()


    event.preventDefault();
  });
});
