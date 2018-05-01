$(document).ready(function(){
	if (window.navigator.vendor == "Google Inc."){
		document.getElementById("footer").style.webkitTransform = "scale(0.75)";
		document.getElementById("footer").style.width = "420px";
		document.getElementById("footer").style.lineHeight = "30px";
		document.getElementById("footer").style.letterSpacing = "2.5px";
	}

	$("#content").hide();
	$("#content").fadeIn(2000);

	$(".nav").hide();

		$(window).scroll(function(){

			if($(document).scrollTop()<7){
				$(".nav").fadeOut(200);
			}
			else if($(document).scrollTop()>7){
				$(".nav").fadeIn(200);
			}
		})
});