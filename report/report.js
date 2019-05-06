$(function() {
	$('.nav-fen-w li').eq(0).click(function() {
		$('.nav-fen-w li').eq(0).css({
			"border-bottom": "2px solid #fd5238",
			"color": "#fd5238"
		});
		$('.nav-fen-w li').eq(1).css({
			"border-bottom": "none",
			"color": "#a7a7a5"
		});
		$('.nav-fen-w li').eq(2).css({
			"border-bottom": "none",
			"color": "#a7a7a5"
		});
        $('.main3').siblings().hide();
        $('.main3').show();
        
	})



	$('.nav-fen-w li').eq(1).click(function() {
		$('.nav-fen-w li').eq(1).css({
			"border-bottom": "2px solid #fd5238",
			"color": "#fd5238"
		});
		$('.nav-fen-w li').eq(0).css({
			"border-bottom": "none",
			"color": "#a7a7a5"
		});
		$('.nav-fen-w li').eq(2).css({
			"border-bottom": "none",
			"color": "#a7a7a5"
		});
		
        $('.main4').siblings().hide();
        $('.main4').show();
	})
	
	$('#zhuangX').click(function () {
		window.location.href="report-details.html";
	})
	$('#zhuangZ').click(function () {
		window.location.href="report-details.html";
	})
})