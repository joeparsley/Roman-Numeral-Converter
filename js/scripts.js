//////////////////BUSINESS LOGIC///////////////////////

var romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

//construct a roman numeral from a number
var romanize = function(input) {
  var romanString = "";
  for (var i = 0; i < romans.length; i++) {
    if (input >= numbers[i]) {
      romanString = romanString + romans[i];
      input = input - numbers[i];
      i = i - 1;
    }
  }
  console.log(romanString);
  return romanString;
}

//deconstruct a roman numeral into it's corresponding number
//Convert single character roman numerals
var convertSingleRoman = function(input) {
  for (var i = 0; i < romans.length; i++ ) {
    if ( input.toUpperCase() === romans[i]) {
      return numbers[i];
    }
  }
};

// Identify when a lower number is before a higher number
var checkLowBeforeHigh = function(input, i) {
  // input = input.split("");
  input = input.map(function(element) {
    return convertSingleRoman(element);
  });
  if (input[i] < input[i + 1]) {
    return true;
  }
  // }
  return false;
};

//When there is a lower number first separate the two into their own element
var reorderElements = function(input) {
  if (typeof input === "string") {
    input = input.split("");
  }
  for (var i = 0; i < input.length; i++) {
    if (checkLowBeforeHigh(input, i) === true) {
      input[i] += input[i + 1];
      input.splice(i + 1, 1);
    }
  }
  return input;
}

//Convert multi-character roman numerals where the highest is first
var convertMultiRoman = function(input) {
  var result = 0;
  input = input.map(function(element) {
    return convertSingleRoman(element);
  });
  for (var i = 0; i < input.length; i++) {
    result += input[i];
  }
  return result;
}

var deromanize = function (input) {
  if (input.length === 1) {
    input = convertSingleRoman(input);
  } else if (input.length > 1) {
    input = reorderElements(input);
    input = convertMultiRoman(input);
  }
  return input;
};


////////////////USER INTERFACE LOGIC//////////////////////
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
