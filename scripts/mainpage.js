$(document).ready(function(){

	$('.pull-left').on('mouseenter', 'li', function(){
		//alert("bro");
		$(this).find('a').animate({'font-size' : '13px'}, 200);
	});
	
	$('.pull-left').on('mouseleave', 'li', function(){
		//alert("bro");
		$(this).find('a').animate({'font-size' : '12px'}, 200);
	});
	
	$('.pull-left').on('click', 'li', function(){
		alert("Sorry, there's nothing here yet.");
	});
	
});
