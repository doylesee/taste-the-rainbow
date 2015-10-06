$(document).ready(function(){
	var a=1;
	setInterval(function(){
		$('#taste-js').removeClass().addClass('fader color-'+a);
		if (a<7) a++; else a=1;
	}, 3000);
});