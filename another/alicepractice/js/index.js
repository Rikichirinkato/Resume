$('#submit').click( e => {
    $('#tnx').animate({ 
        opacity: 1
    },2000);
    $('#tnx').animate({ 
        opacity: 0
    },2000);
});

$('form').on('submit', e => {
    e.preventDefault();
    const userName = $('input[name="name"]').val();
    const userEmail = $('input[name="email"]').val();
    const userMsg = $('textarea').val();
    
    if(userName === '' && userEmail === '' && userMsg === ''){
        $('#tnx').addClass('empty');
        $('#tnx').removeClass('tnx');
        $('#tnx').html('Fields can\'t be empty');
        return;
    } else {
        $('#tnx').removeClass('empty');
        $('#tnx').addClass('tnx');
        $('#tnx').html('Thank you for message!');
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
    $('textarea').val('');
});

$(function() {
    $('.smooth').on('click', function(event) {
        const target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 500);
        }
    });
});
