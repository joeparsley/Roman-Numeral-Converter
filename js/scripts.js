

$(document).ready(function() {
  $('form').submit(function(e) {
    e.preventDefault();
    var input = parseInt($('#input').val());

    result = romanize(input);

    $('#output').text(result);
  });
});
