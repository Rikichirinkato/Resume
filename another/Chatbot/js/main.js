window.onload=function(){
    var one=document.getElementById('first');
    var two=document.getElementById('second');
    var three=document.getElementById('third');
    var counter=0;
    var send=document.getElementById('send');
    var chat=document.getElementById('chat');
    
    var typing=setInterval(function(){
        if(counter==0){
            one.style.backgroundColor="rgba(0,0,0,0.3)";
            two.style.backgroundColor="rgba(0,0,0,0.1)";
            three.style.backgroundColor="rgba(0,0,0,0.5)";
            counter++;
        }
        else if(counter==1){
            one.style.backgroundColor="rgba(0,0,0,0.1)";
            two.style.backgroundColor="rgba(0,0,0,0.5)";
            three.style.backgroundColor="rgba(0,0,0,0.3)";
            counter++;
        }
        else if(counter==2){
            one.style.backgroundColor="rgba(0,0,0,0.5)";
            two.style.backgroundColor="rgba(0,0,0,0.3)";
            three.style.backgroundColor="rgba(0,0,0,0.1)";
            counter=0;
        }
    },500);
    var endType=setInterval(function(){
        send.style.visibility='hidden';
        var message='<div class="user-nulla">Nulla malesuada</div>';    
        chat.innerHTML+=message;
        var vision=setTimeout(function(){
            send.style.visibility='visible';
        },2000);
        var botMessage='<div class="message"><div class="user-pic">S</div><p class="user-info-text">Nulla malesuada fermentum purus. Nullam blandit ligula eget hendrerit ultricies. Suspendisse potenti. Phasellus euismod ultrices ligula, venenatis suscipit   mauris tempor id.</p></div>';
        chat.innerHTML+=botMessage;
        chat.scrollTop=chat.scrollHeight;
    },4000)
}
