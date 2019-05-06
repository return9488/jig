$(function () {
	$('.nav-fen-w li').click(function() {
	//设置样式:点击的选项设置样子,其他去掉样式
    $(this).css({"border-bottom": "2px solid #fd5238","color": "#fd5238"}).siblings().css({"border-bottom": "none","color": "#a7a7a5"});
		
		//显示隐藏的切换
		if ($(this).index() == 1) {
			$('.main5').show().siblings().hide();
		}else{
			$('.main1').show().siblings().hide();
		}
	});
	
	$('.nav1-w li').click(function () {
		$(this).css("color","black").siblings().css("color","#a7a7a5");
		
		if ($(this).index() == 1) {
			$('.main2').show().siblings().hide();
		}else if($(this).index() == 2){
			$('.main3').show().siblings().hide();
		}else if($(this).index() == 3){
			$('.main4').show().siblings().hide();
		}else{
			$('.main1').show().siblings().hide();
		}
	})
	
})