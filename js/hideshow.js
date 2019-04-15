


 // Wait for DOM to load and be ready
$(document).ready(function(){

  // Click event handler for the 'hide' button
  $("#hideContent").click(function() {

    // Hide the element
    $( "#content" ).hide(2000);

  });

  // Click event handler for the 'show' button
  $("#showContent").click(function() {

    // Show the element
    $( "#content" ).show(2000);

  });

});