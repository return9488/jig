$(function() {

	$('.main4-w-gengDou-w').click(function() {
		$('.main4-w4').show();
		$('.main4-w5').show();
		$('.main4-w-gengDou-w').hide();
	})
    //以下代码实现选项卡
    $('.main-fen-w li').click(function() {
		$('.main-fen-w li').eq(0).css({
			"border-bottom": "2px solid #fd5238",
			"color": "#fd5238"
		});
		$('.main-fen-w li').eq(1).css({
			"border-bottom": "none",
			"color": "#a7a7a5"
		});
		$('.main-fen-w li').eq(2).css({
			"border-bottom": "none",
			"color": "#a7a7a5"
		});

		$('.main4').show();
		$('.main4').siblings().hide();

	})



	$('.main-fen-w li').eq(1).click(function() {
		$('.main-fen-w li').eq(1).css({
			"border-bottom": "2px solid #fd5238",
			"color": "#fd5238"
		});
		$('.main-fen-w li').eq(0).css({
			"border-bottom": "none",
			"color": "#a7a7a5"
		});
		$('.main-fen-w li').eq(2).css({
			"border-bottom": "none",
			"color": "#a7a7a5"
		});

		$('.main5').siblings().hide();
		$('.main5').show();

	})
    
    $('.main-fen-w li').eq(2).click(function() {
		$('.main-fen-w li').eq(2).css({
			"border-bottom": "2px solid #fd5238",
			"color": "#fd5238"
		});
		$('.main-fen-w li').eq(0).css({
			"border-bottom": "none",
			"color": "#a7a7a5"
		});
		$('.main-fen-w li').eq(1).css({
			"border-bottom": "none",
			"color": "#a7a7a5"
		});

		$('.main6').siblings().hide();
		$('.main6').show();

	})
    //选项卡到此结束


	//查看更多
	$('.main5-w-gengDou-w').click(function() {
		$('.main4').hide();
		$('.main5-w3').show();
		$('.main5-w-gengDou').hide();
	})

})