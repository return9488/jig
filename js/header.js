	$(function() {
	$('#inpImg').mouseover(function() {
		$('#inpImg').hide();
		$('.sou').css({
			"border": "1px solid #6b6b6b"
		});
		$('.sou input').show();
	})

	$('.sou input:first').mouseover(function() {
		$('#inpImg').hide();
		$('.sou').css({
			"border": "1px solid #6b6b6b"
		});
		$('.sou input').show();
	})

	$('.sou input:first').mouseout(function() {
		$('.sou').css({
			"border": "1px solid white"
		});
		$('.sou input').hide();
		$('#inpImg').show();
	})

	$('.sou input:last').mouseout(function() {
		$('.sou').css({
			"border": "1px solid white"
		});
		$('.sou input').hide();
		$('#inpImg').show();
	})
	
})