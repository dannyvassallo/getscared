$(document).ready(function($){
    $('#social-stream').dcSocialStream({
        feeds: {
            twitter: {
                id: '#31DaysOfGS, #getscared'
            },
            instagram: {
                id: '#31DaysOfGS, #getscared',
                accessToken: '9803372.ad5b8ca.ad04165a1fbc4852b5f7d82abe8da3ba',
                clientId: 'ad5b8cadaf80454698639bb22f59a0f9',
                comments: 3,
                likes: 10,
            }
        },
        rotate: {
            delay: 0
        },
        wall: true,
        order: 'random',
        iconPath: 'images/dcsns-dark/',
        imagePath: 'images/dcsns-dark/'
    });
});
