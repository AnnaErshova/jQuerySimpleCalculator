// I am going to permit negative numbers in variables even though the prototype doesn't

$(function(){

  // SETTING THE STAGE:
  var
    num1 = 0,
    num2 = 0,
    operation = 0, // this will come in handy for eval

    // name buttons for num1 and num2:
    $buttonShown1 = $('#number1 .number'), 
      $plusButton1 = $('#number1 .incr'), // increment num1 by 1
      $minusButton1 = $('#number1 .decr'), // decrement num1 by 1

    $buttonShown2 = $('#number2 .number'),
      $plusButton2 = $('#number2 .incr'), // increment num2 by 1
      $minusButton2 = $('#number2 .decr'), // increment num2 by 1

    // name button elements for the 4 functions in +|-|/|*:
    $selectedOperation = $('#operation'), // big button that shows choice
      $addButton = $('#add'),
      $subtractButton = $('#sub'),
      $multButton = $('#mult'),
      $divButton = $('#div'),

    $equalsButton = $('#equals'), // names equals button:
    $resultForm = $('#result'), // names outcome space:
    $resetButton = $('#reset'); // addding a reset button:
  // STAGE HAS BEEN SET. MOVING ON....

  // ACTUAL FUNCTIONS START HERE:
  // STARTS incrementing and decrementing num1 and num2:
  $plusButton1.click(function(){
    num1 ++;
    $buttonShown1.text(num1);
  });

  $plusButton2.click(function(){
    num2 ++;
    $buttonShown2.text(num2);
  });

  $minusButton1.click(function(){
    num1 --;
    $buttonShown1.text(num1);
  });

  $minusButton2.click(function(){
    num2 --;
    $buttonShown2.text(num2);
  });
  // ENDS incrementing and decrementing num1 and num2

  // STARTS assigning arithmetic operations to click of 1 of 4 buttons
  $addButton.click(function(){
    operation = '+';
    $selectedOperation.text(operation);
  });

  $subtractButton.click(function(){
    operation = '-';
    $selectedOperation.text(operation);
  });

  $multButton.click(function(){
    operation = '*';
    $selectedOperation.text(operation);
  });

  $divButton.click(function(){
    operation = '/';
    $selectedOperation.text(operation);
  });
  // ENDS assigning arithmetic operations

  // STARTS processing results (equals button):
  $equalsButton.click(function(){
    if ((num2 === 0) && ($selectedOperation == '/')){
      outcome = "can't divide by 0";
      $resultForm.text(outcome);
      alert("can't divide by 0!");
    }
    else {
      outcome = eval(num1+operation+num2);
      $resultForm.text(outcome);
    };
  });
  // ENDS processing results (equals button)

  // STARTS reset function:
  $resetButton.click(function(){
    num1 = 0;
      $buttonShown1.text(num1);
    num2 = 0;
      $buttonShown2.text(num2);
    operation = '+';
      $selectedOperation.text(operation);
    outcome = 0;
      $resultForm.text(outcome);
  });
  // ENDS reset function

}); // ends function
