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




// Weekend Unlocker

var curDate = new Date();
curDate = curDate.setHours(0,0,0,0);
var day3 = new Date("10/03/2015");
var day4 = new Date("10/04/2015");

// custom appensions
function appendDayThree(){
    $('.day3 img').attr('src','https://s3.amazonaws.com/myfangate.com/getscared/day3thumb.jpg');
    $('.day3').attr( "data-toggle", "modal" );
    $('.day3').attr( "data-target", "#day3" );
}

function appendDayFour(){
    $('.day4 img').attr('src','https://s3.amazonaws.com/myfangate.com/getscared/day4thumb.jpg');
    $('.day4').attr( "data-toggle", "modal" );
    $('.day4').attr( "data-target", "#day4" );
}

// document ready
$(function(){
    // day 3
    if (curDate >= day3.setHours(0,0,0,0)){
        appendDayThree();
    } 
    // day 4
    if (curDate >= day4.setHours(0,0,0,0)){        
        appendDayFour();
    }     
});

// spotify

$(function(){
    $('#spotify').fitVids({ customSelector: "iframe[src^='embed.spotify.com']"});
}); 