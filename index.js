// $(document).ready(function() {



// link the "See my Work" button to the portfolio section
$('#see-my-work').click(function() {
  $(window.location.href="#projects")
})


  // changing cv button background color on click
  $('#cvBtn').click(function() {
    $(this).css('backgroundColor', '#e0bfc3');
  });


// PROJECT NATIGATION FILTER
// $('#all-projects').click(function() {
//   $('.module').fadeIn().css("display", "flex")
// });
//
// $('#id-react').click(function() {
//   $('.projectReact').fadeIn().css("display", "flex")
//   $('.projectGrid div').filter(".projectBootstrap").fadeOut().css("display", "none");
// });
//
// $('#id-bootstrap').click(function() {
//   $('.projectBootstrap').fadeIn().css("display", "flex")
//   $('.projectGrid div').filter(".projectReact").fadeOut().css("display", "none");
// });



// SECOND TRY
$('#all-projects').click(function() {
  $('.projectCard').fadeIn().css("display", "block")

});

$('#id-react').click(function() {
  $('.projectReact').fadeIn().css("display", "block")
  $('.projectGrid').filter(".projectBootstrap").fadeOut().css("display", "none");
});

$('#id-bootstrap').click(function() {
  $('.projectBootstrap').fadeIn().css("display", "block")
  $('.projectGrid').filter(".projectReact").fadeOut().css("display", "none");
});




// })
