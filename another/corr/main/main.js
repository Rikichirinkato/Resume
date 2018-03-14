let past=document.getElementById('vid').innerHTML;
document.getElementById('vidbtn').addEventListener('click',()=>{
    let width = document.getElementById('vid').offsetWidth;
    let video = '<article class="close"><div id="cross"><div class="left"></div><div class="right"></div></div></article><iframe src="https://www.youtube.com/embed/SSi8zpwPr9g"></iframe>';
    document.getElementById('vid').innerHTML = video;
    
    document.getElementById('cross').addEventListener('click',()=>{
        document.getElementById('vid').innerHTML=past; 
    });
});
document.addEventListener('scroll',()=>{
    let scroll = window.pageYOffset;
    let width = document.getElementById('vid').offsetWidth;
    if(width>762){
        if(scroll>1){
            document.getElementById('navv').style.backgroundColor="#13365f";
        }
        else{
            document.getElementById('navv').style.backgroundColor="inherit"; 
        }
    }
    else{
        document.getElementById('navv').style.backgroundColor="#13365f";
    }
});

var slides=document.querySelectorAll('#slides .slide-item');
var current=0;
var slideInterval=setInterval(nextSlide,3000);

function nextSlide() {
    slides[current].className='slide-item';
    current = (current+1)%slides.length;
    slides[current].className='slide-item showing';
}
