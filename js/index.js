$('.order').on('click', () => {
    $('#form').css({ display: 'flex'})
});

$('#close').on('click', () => {
    $('#form').css({ display: 'none'})
});

$('form').on('submit', e => {
    e.preventDefault();
    const userName = $('input[name="name"]').val();
    const userEmail = $('input[name="email"]').val();
    const userMsg = $('textarea').val();
    
    if(userName === '' && userEmail === '' && userMsg === ''){
        return;
    }
    
    $.ajax({
        url: 'https://tranquil-sierra-86540.herokuapp.com/roman28krasko@gmail.com',
        method: 'POST',
        data: {
            name: userName,
            email: userEmail,
            msg: userMsg
        },
        dataType: 'json'
    });
    $('input[name="name"]').val('');
    $('input[name="email"]').val('');
    $('input[name="email"]').val('ПІДТВЕРДИТИ');
    $('textarea').val('');
});


(function info(){
    let screen = $(document).width();
    if(screen > 786){
         $('.about-text').eq(0).animate({ left: 15 + '%'}, 5000);
    }
})();

let x = 0;
$('#left-arrow').on('click', () => {
    x = x - 520;
    $('.slides').css({ marginLeft: x + 'px' })
    if(x < -260){
        $('#right-arrow').css({ visibility: "visible" });
    }
    else{
        $('#right-arrow').css({ visibility: "hidden" });
    }
    if(x < -1500){
        $('#left-arrow').css({ visibility: "hidden" })
    }
    else{
        $('#left-arrow').css({visibility: "visible" })
    }
})
$('#right-arrow').on('click', () => {
    x = x + 520;
    $('.slides').css({ marginLeft: x + 'px' });
    if(x < -260) {
        $('#right-arrow').css({ visibility: "visible" });
    } else {
        $('#right-arrow').css({visibility: "hidden"});
    }
    if(x < -1500) {
        $('#left-arrow').css({ visibility: "hidden" });
    } else {
        $('#left-arrow').css({ visibility: "visible" })
    }
})