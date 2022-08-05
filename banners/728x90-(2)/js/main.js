function startad(){
     setTimeout(function(){
        document.getElementById('flight').style.transform = 'translate(-166px , 17px)';
        document.getElementById('flight').style.transition = 'all 1s'
    },200)

    setTimeout(function(){
        document.getElementById('flight').classList.add('fly')
    },1100)

    setTimeout(function(){
        document.getElementById('text1').style.transform = 'translatex(25px)';
        document.getElementById('text1').style.opacity = 0.6;
        document.getElementById('text1').style.transition = 'all 0.8s';
    },1000)

    setTimeout(function(){
        document.getElementById('text2').style.transform = 'scale(1)';
        document.getElementById('text2').style.transition = 'all 0.8s';
    },1100)

    setTimeout(function(){
        document.getElementById('text3').style.transform = 'translatex(142px)';
        document.getElementById('text3').style.opacity = 0.8;
        document.getElementById('text3').style.transition = 'all 0.8s';
    },1400)

    setTimeout(function(){
        document.getElementById('round').style.transform = 'scale(1)';
        document.getElementById('round').style.transition = 'all 0.5s';
        document.getElementById('text4').style.transform = 'scale(1)';
        document.getElementById('text4').style.transition = 'all 0.5s';
    },2000)

    setTimeout(function(){
        document.getElementById('logo').style.transform = 'translatey(14px)';
        document.getElementById('logo').style.transition = 'all 0.4s';
    },2800)
    setTimeout(function(){
        document.getElementById('btn').style.transform = 'translatey(-10px)';
        document.getElementById('btn').style.transition = 'all 0.4s';
    },3200)
}
window.load = startad();