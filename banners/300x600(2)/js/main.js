function startad(){
    setTimeout(function(){
        document.getElementById('img-1').style.opacity = 1;
        document.getElementById('img-1').style.transition = 'all 0.2s';
        document.getElementById('img-2').style.opacity = 1;
        document.getElementById('img-2').style.transition = 'all 0.2s';
        document.getElementById('img-3').style.opacity = 1;
        document.getElementById('img-3').style.transition = 'all 0.2s';
        document.getElementById('img-4').style.opacity = 1;
        document.getElementById('img-4').style.transition = 'all 0.2s';
        document.getElementById('img-5').style.opacity = 1;
        document.getElementById('img-5').style.transition = 'all 0.2s';
        document.getElementById('logo').style.opacity = 1;
        document.getElementById('logo').style.transition = 'all 0.2s';
    },100)

    setTimeout(function(){
        document.getElementById('container-2').style.transform = 'translatex(0)';
        document.getElementById('container-2').style.transition = 'all 0.5s';
    },2000)

    setTimeout(function(){
        document.getElementById('blue').style.opacity = 1;
        document.getElementById('blue').style.transition = '0.2s';
    },4200)

    setTimeout(function(){
        document.getElementById('text-img').style.opacity = 1;
        document.getElementById('text-img').style.top = '-370px';
        document.getElementById('text-img').style.transition = 'all 0.5s';
    },4500)

    setTimeout(function(){
        document.getElementById('white').style.opacity = 1;
        document.getElementById('white').style.transition = 'all 0.2s';
        document.getElementById('text-img2').style.opacity = 1;
        document.getElementById('text-img2').style.transition = 'all 0.2s';
    },5600)
    
    setTimeout(function(){
        document.getElementById('text-img2').style.opacity = 0;
        document.getElementById('text-img2').style.transition = 'all 0.2s';
    },6500)

    setTimeout(function(){
        document.getElementById('three').style.opacity = 1;
        document.getElementById('three').style.transition = 'all 0.2s';

    },7000)
        
    
    
}window.load = startad()