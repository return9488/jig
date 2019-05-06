$(function() {
	$('.main3').hide();
	
	$('.nav-fen-w li').click(function() {
		//设置样式:点击的选项设置样子,其他去掉样式
		$(this).css({
			"border-bottom": "2px solid #fd5238",
			"color": "#fd5238"
		}).siblings().css({
			"border-bottom": "none",
			"color": "#a7a7a5"
		});

		if($(this).index() == 0) {
			$('.main2').show();
			$('.main3').hide();
		} else {
			$('.main3').show();
			$('.main2').hide();
		}

	})
})