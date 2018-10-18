//use the Power jquery to...

$(document).ready(function(){
  
  input = $("input[type=text]");
  inputPass = $("input[type=password]");
  // output = $("div:nth-child(3)");
  button = $("button");
  
  toggleButton(); 
  
   // alert('I am a horrible alert msg. Please delete me')
  input.keypress(toggleButton).keyup(toggleButton);
  
 inputPass.keypress(toggleButton).keyup(toggleButton);
  
  function toggleButton() {
    len = input.val().length;
    pass = inputPass.val().length; 
    
    if (len != 0 & pass != 0) {
    button
       .text("Sign In")
       .removeAttr("disabled")
       .addClass('activeButton'); 
    } 
    else {
       button.attr("disabled", "disabled");
       button.text("Sign In...");
       button.removeClass('activeButton'); 
    }
  }
  
  
  //is apple id have value?
  var x = $("input[type=text]").val().length();
  
  if(x) {
    console.log("this should be if x is false")
  }
  console.log(x);
  //is pwd have value?
  //turn on button
  $(button).toggle;
});




// function enableSignIn(){

//   enableSignIn();
// }
// //var x = document.getElementById('appleID');
// //x.value = "enter your id";

// //document.getElementById('appleId').value = "Enter your apple id";

// //document.getElementsByTagName('h1')[0].innerText = "hi there";

// //var flexDivs = document.getElementsByTagName('div');

// //console.log(flexDivs.length);

// //for (i=0;i<flexDivs.length; i++){
//   //
// //}
// //put this in a function
// //see if appleid has a value
// var appleIDElem =document.getElementById('appleID');
// var nsole.log(appleIDElem.value.length);
// //see if pwd has a value
// var passElem =document.getElementById('password');
// console.log('password:' + passElem.value.length);

// //if they both do,enable the button SignInBtn

// If (appleIDElem.value.length != 0){
//   console.log('here');
  
// }else if (idLength == 0) {
//   console.log('not here');
  
// }
// enableSignIn();