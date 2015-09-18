var bottleAmount = function(number) {
  return number;
};

var completeSentence = function(number) {
  var whole = number + " bottles of beer on the wall.";
  return whole;
};

var lessNumber = function(number) {
  var printNumber = "";
  for(var i = number; i > 0; i--) {
    printNumber += (i);
    printNumber += (" ");
 } return printNumber;
  // while (number > 0) {
  //   console.log(number);
  //   return number;
  //   number--;
  //     console.log(number);
};

// $(document).ready(function() {
//   $("form#factorial").submit(function(event) {
//     var number= parseInt($("input#number").val());
//     var result = factorial(number);
//
//       $(".number").text(number)
//       $(".final").text(result)
//        $("#result").show()
//
//
//     event.preventDefault();
//   });
// });
