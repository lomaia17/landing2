window.onload = function(){var alertMessages = document.querySelectorAll(".b24-form-control-alert-message");


var phoneInputs = document.querySelectorAll('input[name="phone"]');

var nameInputs =  document.querySelectorAll('input[name="name"]');

for(var  j = 0; j< nameInputs.length;j++){
  nameInputs[j].setAttribute('autocomplete', 'off');
};


var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
if (isFirefox) {
  for(var  g = 0; g< phoneInputs.length;g++){phoneInputs[g].setAttribute('autocomplete', 'off');
  phoneInputs[g].setAttribute('onkeyup','removeCharacters(this)');}
  for(var  j = 0; j< nameInputs.length;j++){
    nameInputs[j].setAttribute('onkeyup', 'removeNumbers(this)');
  };
} else {
 for(var  g = 0; g< phoneInputs.length;g++){phoneInputs[g].setAttribute('autocomplete', 'off');
  phoneInputs[g].setAttribute('oninput','removeCharacters(this)');}
  for(var  j = 0; j< nameInputs.length;j++){
    nameInputs[j].setAttribute('oninput', 'removeNumbers(this)');
  };
}
for (var i = 0; i < alertMessages.length; i++){alertMessages[i].innerHTML = "ფორმა სავალდებულოა";}};

function removeCharacters(inputField){
  let inputValue = inputField.value;
  inputValue = inputValue.replace(/[+\-()\s]/g, "");
  inputValue = inputValue.substring(0, 9);
  inputField.value = inputValue;
}

function removeNumbers(inputField) {
  let inputValue = inputField.value;

  // Remove numeric characters
  inputValue = inputValue.replace(/[^A-Za-zა-ჰ\s]/g, "");

  inputField.value = inputValue;
}