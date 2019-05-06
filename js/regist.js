$(function () {
	 $('#tel').blur(function () {
	 	var $telW = $("#tel").val();
	 	var $tre = /^1[34578]\d{9}$/;
	 	if ($tre.test($telW)) {
	 		$('.main-w-yanZheng-Imgok').show();
	 		$('.main-w-yanZheng-Imgnull').hide();
	 		$('.main-w-yanZheng-Imgerr').hide();
	 		$('#tel').css("border","1px solid #41B91E");
	 	}else if($telW == ""){
	 		$('.main-w-yanZheng-Imgnull').show();
	 		$('.main-w-yanZheng-Imgerr').hide();
	 		$('.main-w-yanZheng-Imgok').hide();
	 		$('#tel').css("border","1px solid red");
	 	}else {
	 		$('.main-w-yanZheng-Imgerr').show();
	 		$('.main-w-yanZheng-Imgok').hide();
	 		$('.main-w-yanZheng-Imgnull').hide();
	 		$('#tel').css("border","1px solid red");
	 	}
	 })
	 
	 $('#name').blur(function () {
	 	var $nameW = $("#name").val();
	 	var $tre = /^[a-zA-Z0-9_-]{4,16}$/;
	 	if ($tre.test($nameW)) {
	 		$('.main-w-yanZheng-Imgok3').show();
	 		$('.main-w-yanZheng-Imgnull3').hide();
	 		$('.main-w-yanZheng-Imgerr3').hide();
	 		$('#name').css("border","1px solid #41B91E");
	 	}else if($nameW == ""){
	 		$('.main-w-yanZheng-Imgnull3').show();
	 		$('.main-w-yanZheng-Imgerr3').hide();
	 		$('.main-w-yanZheng-Imgok3').hide();
	 		$('#name').css("border","1px solid red");
	 	}else {
	 		$('.main-w-yanZheng-Imgerr3').show();
	 		$('.main-w-yanZheng-Imgok3').hide();
	 		$('.main-w-yanZheng-Imgnull3').hide();
	 		$('#name').css("border","1px solid red");
	 	}
	 })
	 
	 $('#pw').blur(function () {
	 	var $pwW = $('#pw').val();
	 	var $tre = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
	 	if ($tre.test($pwW)) {
	 		$('.main-w-yanZheng-Imgok4').show();
	 		$('.main-w-yanZheng-Imgnull4').hide();
	 		$('.main-w-yanZheng-Imgerr4').hide();
	 		$('#pw').css("border","1px solid #41B91E");
	 	}else if($pwW == ""){
	 		$('.main-w-yanZheng-Imgnull4').show();
	 		$('.main-w-yanZheng-Imgerr4').hide();
	 		$('.main-w-yanZheng-Imgok4').hide();
	 		$('#pw').css("border","1px solid red");
	 	}else {
	 		$('.main-w-yanZheng-Imgerr4').show();
	 		$('.main-w-yanZheng-Imgok4').hide();
	 		$('.main-w-yanZheng-Imgnull4').hide();
	 		$('#pw').css("border","1px solid red");
	 	}
	 })
	 
	 $('#repw').blur(function () {
	 	var $pwW = $('#pw').val();
	 	var $repwW = $('#repw').val();
	 		if ($pwW == $repwW && $repwW != "") { 
	 		$('.main-w-yanZheng-Imgok5').show();
	 		$('.main-w-yanZheng-Imgnull5').hide();
	 		$('.main-w-yanZheng-Imgerr5').hide();
	 		$('#repw').css("border","1px solid #41B91E");
	 	}else if($repwW == ""){
	 		$('.main-w-yanZheng-Imgnull5').show();
	 		$('.main-w-yanZheng-Imgerr5').hide();
	 		$('.main-w-yanZheng-Imgok5').hide();
	 		$('#repw').css("border","1px solid red");
	 	}else {
	 		$('.main-w-yanZheng-Imgerr5').show();
	 		$('.main-w-yanZheng-Imgok5').hide();
	 		$('.main-w-yanZheng-Imgnull5').hide();
	 		$('#repw').css("border","1px solid red");
	 	}
	 	
	 })
	 
})

