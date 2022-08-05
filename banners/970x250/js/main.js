function startad() {
    setTimeout(function(){
        document.getElementById('bg-img').style.transform = 'scale(1)';
        document.getElementById('bg-img').style.transition = 'all 0.9s';

    },350)

    setTimeout(function(){
        document.getElementById('img1').classList.add('size')
    //     document.getElementById('img1').style.transform = 'scale(0.5)';
    //     document.getElementById('img1').style.transition = 'all 0.3s';
    // },400)
    // setTimeout(function(){
    //     document.getElementById('img1').style.transform = 'scale(1.1)';
    //     document.getElementById('img1').style.transition = 'all 0.3s';
    // },600)
    // setTimeout(function(){
    //     document.getElementById('img1').style.transform = 'scale(1)';
    //     document.getElementById('img1').style.transition = 'all 0.1s';
    },400)

    setTimeout(function(){
        document.getElementById('img2').style.transform = 'translatey(68px)';
        document.getElementById('img2').style.transition = '0.3s';
        document.getElementById('img3').style.transform = 'translatey(61px)';
        document.getElementById('img3').style.transition = 'all 0.3s';
    },600)

    setTimeout(function(){
        document.getElementById('img4').style.transform = 'translatey(51px)';
        document.getElementById('img4').style.transition = 'all 0.3s';
        document.getElementById('img5').style.transform = 'translatey(-41px)';
        document.getElementById('img5').style.transition = 'all 0.3s';
    },900)

    setTimeout(function(){
        document.getElementById('img6').style.transform = 'translatey(150px)';
        document.getElementById('img6').style.transition = 'all 0.3s';
        document.getElementById('img6').style.opacity = 1;
        document.getElementById('img7').style.transform = 'translatey(11px)';
        document.getElementById('img7').style.transition = 'all 0.3s';
    },1200)

    setTimeout(function(){
        document.getElementById('btn').style.opacity = 1;
        document.getElementById('btn').style.transition = 'all 0.5s'
        document.getElementById('text1').style.opacity = 1;
        document.getElementById('text1').style.top = '76px';
        document.getElementById('text1').style.transition = ' all 1.1s';
        document.getElementById('price1').style.opacity = 1;
        document.getElementById('price1').style.transition = 'all 1s';

        document.getElementById('text2').style.opacity = 1;
        document.getElementById('text2').style.top = '70px';
        document.getElementById('text2').style.transition = ' all 1.1s';
        document.getElementById('price2').style.opacity = 1;
        document.getElementById('price2').style.transition = 'all 1s';
    
        document.getElementById('text3').style.opacity = 1;
        document.getElementById('text3').style.bottom = '79px';
        document.getElementById('text3').style.transition = ' all 1.1s';
        document.getElementById('price3').style.opacity = 1;
        document.getElementById('price3').style.transition = 'all 1s';
    },1800)


        setTimeout(function(){
            document.getElementById('img2').style.opacity = 0;
            document.getElementById('img2').style.transition = 'all 1s';
            document.getElementById('img3').style.opacity = 0;
            document.getElementById('img3').style.transition = 'all 1s';
            document.getElementById('img4').style.opacity = 0;
            document.getElementById('img4').style.transition = 'all 1s';
            document.getElementById('img5').style.opacity = 0;
            document.getElementById('img5').style.transition = 'all 1s';
            document.getElementById('img6').style.opacity = 0;
            document.getElementById('img6').style.transition = 'all 1s';
            document.getElementById('img7').style.opacity = 0;
            document.getElementById('img7').style.transition = 'all 1s';
            document.getElementById('text1').style.opacity = 0;
            document.getElementById('text1').style.transition = 'all 1s';
            document.getElementById('price1').style.opacity = 0;
            document.getElementById('price1').style.transition = 'all 1s';
            document.getElementById('text2').style.opacity = 0;
            document.getElementById('text2').style.transition = 'all 1s';
            document.getElementById('price2').style.opacity = 0;
            document.getElementById('price2').style.transition = 'all 1s';
            document.getElementById('text3').style.opacity = 0;
            document.getElementById('text3').style.transition = 'all 1s';
            document.getElementById('price3').style.opacity = 0;
            document.getElementById('price3').style.transition = 'all 1s';
        },6000)

        setTimeout(function(){
            document.getElementById('img8').style.transform = 'translatey(62px)';
            document.getElementById('img8').style.transition = 'all 0.3s';
            document.getElementById('img9').style.transform = 'translatey(62px)';
            document.getElementById('img9').style.transition = 'all 0.3s';
        },7000)

        setTimeout(function(){
            document.getElementById('img10').style.transform = 'translatey(33px)';
            document.getElementById('img10').style.transition = 'all 0.3s';
            document.getElementById('img11').style.transform = 'translatey(-14px)';
            document.getElementById('img11').style.transition = 'all 0.3s';
        },7500)

        setTimeout(function(){
            document.getElementById('img12').style.transform = 'translatey(148px)';
            document.getElementById('img12').style.transition = 'all 0.3s';
            document.getElementById('img12').style.opacity = 1;
            document.getElementById('img13').style.transform = 'translatey(31px)';
            document.getElementById('img13').style.transition = 'all 0.3s';
        },8000)

        setTimeout(function(){
            document.getElementById('text-4').style.opacity = 1;
            document.getElementById('text-4').style.top = '76px';
            document.getElementById('text-4').style.transition = ' all 1.1s';
            document.getElementById('price-4').style.opacity = 1;
            document.getElementById('price-4').style.transition = 'all 1s';
    
            document.getElementById('text-5').style.opacity = 1;
            document.getElementById('text-5').style.top = '45px';
            document.getElementById('text-5').style.transition = ' all 1.1s';
            document.getElementById('price-5').style.opacity = 1;
            document.getElementById('price-5').style.transition = 'all 1s';
        
            document.getElementById('text-6').style.opacity = 1;
            document.getElementById('text-6').style.bottom = '79px';
            document.getElementById('text-6').style.transition = ' all 1.1s';
            document.getElementById('price-6').style.opacity = 1;
            document.getElementById('price-6').style.transition = 'all 1s';
        },8400)

    


}
window.load = startad()