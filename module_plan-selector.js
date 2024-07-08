$(document).ready(function() {
  $('#calculateSum').click(function() {
    var sum = 0;
    
    // Adding value of selected radio button in each group
    sum += parseInt($('input[name="Audience"]:checked').val() || 0);
    sum += parseInt($('input[name="Products"]:checked').val() || 0);
    sum += parseInt($('input[name="Team"]:checked').val() || 0);

    // Displaying the sum
    $('#sumResult').text('Total Sum: ' + sum);

    // Hide all plan selectors
    $('.plan-selector_kickstarter').addClass('hide');
    $('.plan-selector_basic').addClass('hide');
    $('.plan-selector_growth').addClass('hide');
    $('.plan-selector_pro').addClass('hide');

    // Conditionally show plan selectors based on the sum
    if (sum < 5) {
      $('.plan-selector_kickstarter').removeClass('hide');
    } else if (sum >= 5 && sum <= 9) {
      $('.plan-selector_basic').removeClass('hide');
    } else if (sum >= 10 && sum <= 13) {
      $('.plan-selector_growth').removeClass('hide');
    } else if (sum >= 14) {
      $('.plan-selector_pro').removeClass('hide');
    }
  });
});
