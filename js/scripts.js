var romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

var romanize = function(input) {
  var romanString = "";
  for (var i = 0; i < romans.length; i++) {
    if (input >= numbers[i]) {
      romanString += romans[i];
      input -= numbers[i];
      i -= 1;
    }
  }
  console.log(romanString);
  return romanString;
}

$(document).ready(function() {
  $('form').submit(function(e) {
    e.preventDefault();
    var input = parseInt($('#input').val());

    result = romanize(input);

    $('#output').text(result);
  });
});
