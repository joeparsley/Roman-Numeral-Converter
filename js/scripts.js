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

















//Convert single character roman numerals
var convertSingleRoman = function(input) {
  for (var i = 0; i < romans.length; i++ ) {
    if ( input.toUpperCase() === romans[i]) {
      return numbers[i];
    }
  }
};

// Identify when a lower number is before a higher number
var checkLowBeforeHigh = function(input) {
  input = input.split("");
  input = input.map(function(element) {
    return convertSingleRoman(element);
  });
  for (var i = 0; i < input.length; i++) {
    if (input[i] > input[i - 1]) {
      return true;
    }
  }
  return false;
};



var deromanize = function (input) {
  if (input.length === 1) {
    input = convertSingleRoman(input);
  }
  input = checkLowBeforeHigh(input);
  return input;
};




$(document).ready(function() {
  $('#to-roman').submit(function(e) {
    e.preventDefault();
    var input = parseInt($('#number-input').val());

    result = romanize(input);

    $('#roman-output').text(result);
  });

  $('#to-number').submit(function(e) {
    e.preventDefault();
    var input = $('#roman-input').val();

    result = deromanize(input);

    $('#number-output').text(result);
  });
});
