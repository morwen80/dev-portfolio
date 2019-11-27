// $(document).ready(function() {


// link the "See my Work" button to the portfolio section
$('#see-my-work').click(function() {
  $(window.location.href="#projects")
})


  // changing cv button background color on click
  $('#cvBtn').click(function() {
    $(this).css('backgroundColor', '#e0bfc3');
  });


// PROJECTS MENU FILTER
$('#all-projects').click(function() {
  $('#projects .col-sm-12').fadeIn().css("display", "block")
});

$('#id-react').click(function() {
  $('.projectReact').fadeIn().css("display", "block")
  $(".projectBootstrap").fadeOut().css("display", "none");
  $(".projectJs").fadeOut().css("display", "none");
  $(".projectUI").fadeOut().css("display", "none");
});

$('#id-bootstrap').click(function() {
  $('.projectBootstrap').fadeIn().css("display", "block")
  $(".projectReact").fadeOut().css("display", "none");
  $(".projectJs").fadeOut().css("display", "none");
  $(".projectUI").fadeOut().css("display", "none");
});

$('#id-bootstrap').click(function() {
  $('.projectBootstrap').fadeIn().css("display", "block")
  $(".projectReact").fadeOut().css("display", "none");
  $(".projectJs").fadeOut().css("display", "none");
  $(".projectUI").fadeOut().css("display", "none");
});

$('#id-javascript').click(function() {
  $('.projectJs').fadeIn().css("display", "block")
  $(".projectReact").fadeOut().css("display", "none");
  $(".projectBootstrap").fadeOut().css("display", "none");
  $(".projectUI").fadeOut().css("display", "none");
});

$('#id-ui').click(function() {
  $('.projectUI').fadeIn().css("display", "block")
  $(".projectReact").fadeOut().css("display", "none");
  $(".projectBootstrap").fadeOut().css("display", "none");
  $(".projectJs").fadeOut().css("display", "none");
});

// })
