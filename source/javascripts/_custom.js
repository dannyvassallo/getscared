function alignCta(){
	var cta = $('.cta'),
	video = $('.video'),
	vH = video.height(),
	cH = cta.height(),
	halfVid = (vH-cH)/2,
	themargin = halfVid;
	$('.cta').css('margin-top',themargin);
}

$(function(){
	if ($(window).width() >= 989){
		alignCta();
	}
});

$(window).resize(function(){
	if ($(window).width() >= 989){
		alignCta();
	}
});