$(document).ready(function(){  

    var change = function () {  
		$('.Choices_banner').click(function () {  
			$(".Choices_banner ul").animate({marginLeft:"-1184px"},600, function () {  
				$(".Choices_banner ul>li").eq(0).appendTo($(".Choices_banner ul"));  
				$(".Choices_banner ul").css('marginLeft','0px');  
			});  
			$(".Choicestel ul").css('marginLeft','-1184px');  
			$(".Choicestel ul>li").eq(0).appendTo($(".Choicestel ul"));  
			$(".Choicestel ul").css({marginLeft:"0px"},600);
		})  
	}
	  
	var Choices = function(){
		$(".Choices_banner ul").animate({marginLeft:"-1184px"},600, function () {  
					$(".Choices_banner ul>li").eq(0).appendTo($(".Choices_banner ul"));  
					$(".Choices_banner ul").css('marginLeft','0px');  
				});  
				$(".Choicestel ul").css('marginLeft','-1184px');  
				$(".Choicestel ul>li").eq(0).appendTo($(".Choicestel ul"));  
				$(".Choicestel ul").css({marginLeft:"0px"},600);
		}
	    var tabChange = setInterval(Choices,6000);
		//鼠标悬停暂停切换
		$('.Choicesnext').mouseover(function(){
			clearInterval(tabChange);
		});
		$('.Choicesnext').mouseout(function(){
			tabChange = setInterval(Choices,3000);
		});
		$(function(){
			change();
            Choices();
        }); 
});