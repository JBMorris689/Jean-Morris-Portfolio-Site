$(document).ready(function(){
	$('.nav-link').click(function(e){
		// Get the href dynamically
		var pageSection = $(this).attr('href');
		
		//hide URL hash
		e.preventDefault();

		//Animate scroll to pageSection
		$('html, body').animate({
			scrollTop: $(pageSection).offset().top
		}, 800);
	});
});//end of doc ready