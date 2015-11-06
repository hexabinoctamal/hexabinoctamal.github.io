$(document).ready(function(){

	$('#menu .pull-left').on('mouseenter', 'li', function(){
		//alert("bro");
		$(this).find('a').animate({'font-size' : '13px'}, 100);
		$(this).find('a').animate({'opacity': '1'});
	});
	
	$('#menu .pull-left').on('mouseleave', 'li', function(){
		//alert("bro");
		$(this).find('a').animate({'font-size' : '12px'}, 100);
	});
	
	$('#menu .pull-left').on('click', 'a', function(){
		alert("Sorry, there's nothing here yet.");
	});
	
});
