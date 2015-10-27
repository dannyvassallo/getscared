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
var day10 = new Date("10/10/2015");
var day11 = new Date("10/11/2015");
var day17 = new Date("10/17/2015");
var day18 = new Date("10/18/2015");
var day28 = new Date("10/28/2015");
var day29 = new Date("10/29/2015");

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
function appendDayTen(){
    $('.day10 img').attr('src','https://s3.amazonaws.com/myfangate.com/getscared/day10thumb.jpg');
    $('.day10').attr( "data-toggle", "modal" );
    $('.day10').attr( "data-target", "#day10" );
}
function appendDayEleven(){
    $('.day11 img').attr('src','https://s3.amazonaws.com/myfangate.com/getscared/day11thumb.jpg');
    $('.day11').attr( "data-toggle", "modal" );
    $('.day11').attr( "data-target", "#day11" );
}
function appendDaySeventeen(){
    $('.day17 img').attr('src','https://s3.amazonaws.com/myfangate.com/getscared/day17thumb.jpg');
    $('.day17').attr( "data-toggle", "modal" );
    $('.day17').attr( "data-target", "#day17" );
}
function appendDayEighteen(){
    $('.day18 img').attr('src','https://s3.amazonaws.com/myfangate.com/getscared/day18thumb.jpg');
    $('.day18').attr( "data-toggle", "modal" );
    $('.day18').attr( "data-target", "#day18" );
}
function appendDayTwentyEight(){
    $('.day28 img').attr('src','https://s3.amazonaws.com/myfangate.com/getscared/day28thumb.jpg');
    $('.day28').attr( "data-toggle", "modal" );
    $('.day28').attr( "data-target", "#day28" );
}
function appendDayTwentyNine(){
    $('.day29 img').attr('src','https://s3.amazonaws.com/myfangate.com/getscared/day29thumb.jpg');
    $('.day29').attr( "data-toggle", "modal" );
    $('.day29').attr( "data-target", "#day29" );
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
    // day 10
    if (curDate >= day10.setHours(0,0,0,0)){
        appendDayTen();
    } 
    // day 11
    if (curDate >= day11.setHours(0,0,0,0)){        
        appendDayEleven();
    }  
    // day 17
    if (curDate >= day17.setHours(0,0,0,0)){        
        appendDaySeventeen();
    } 
    // day 18
    if (curDate >= day18.setHours(0,0,0,0)){        
        appendDayEighteen();
    } 
    // day 28
    if (curDate >= day28.setHours(0,0,0,0)){        
        appendDayTwentyEight();
    }  
    // day 29
    if (curDate >= day29.setHours(0,0,0,0)){        
        appendDayTwentyNine();
    }              
});

// spotify

$(function(){
    $('#spotify').fitVids({ customSelector: "iframe[src^='embed.spotify.com']"});
}); 