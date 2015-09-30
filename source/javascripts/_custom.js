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

// Removed Shadowed class on FF
function checkBrowser(){
    c=navigator.userAgent.search("Chrome");
    f=navigator.userAgent.search("Firefox");
    m8=navigator.userAgent.search("MSIE 8.0");
    m9=navigator.userAgent.search("MSIE 9.0");
    if (c>-1){
        brwsr = "Chrome";
    }
    else if(f>-1){
        brwsr = "Firefox";
        $('.shadowed').removeClass('shadowed');
    }else if (m9>-1){
        brwsr ="MSIE 9.0";
    }else if (m8>-1){
        brwsr ="MSIE 8.0";
    }
    return brwsr;
}

$(function(){
	checkBrowser();
});