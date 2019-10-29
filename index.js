// $(document).ready(function() {

  $('#cvBtn').click(function() {
    $(this).css('backgroundColor', '#e0bfc3');
  });

  const debounce = (func, wait=20, immediate=true) => {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};


// const sliderImages = $('.slide');
//
// jQuery.each( sliderImages, function() {
//
//   const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
//   const imageBottom = sliderImage.offsetTop + sliderImage.height;
//    const isHalfShown = slideInAt > sliderImage.offsetTop;
//    const isNotScrolledPast = window.scrollY < imageBottom;
//    if(isHalfShown && isNotScrolledPast) {
//      sliderImage.classList.add('slideActive')
//    } else {
//      sliderImage.classList.remove('sliceDctive')
//    }
//  })


// PROJECT NATIGATION FILTER
$('#all-projects').click(function() {
  $('.module').fadeIn().css("display", "flex")
});

$('#id-react').click(function() {
  $('#projectReact').fadeIn().css("display", "flex")
  $('.projectGrid div').filter(".projectBootstrap").fadeOut().css("display", "none");
});

$('#id-bootstrap').click(function() {
  $('.projectBootstrap').fadeIn().css("display", "flex")
  $('.projectGrid div').filter("#projectReact").fadeOut().css("display", "none");
});




// })
