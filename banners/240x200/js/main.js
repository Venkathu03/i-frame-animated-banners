var image1=document.querySelector('.image-1');
var image2=document.querySelector('.image-2');
var text=document.querySelector('.text');
var text2=document.querySelector('.text2');
var car1=document.querySelector('.car-1');
var car2=document.querySelector('.car-2');
var car3=document.querySelector('.car-3');
var text3=document.querySelector('.text3');
var button=document.querySelector('.btn');

function handleimage1(){
image1.classList.add("show");
}
function handleimage1out(){
    image1.classList.add("hide")
}


function handleimage2() {
image2.classList.add("show");
}

function textadj() {
    text.classList.add("show")
}

function textadj2(){
    text2.classList.add("show")
}
function textadj2out(){
    text2.classList.add("hide")
}

function carsorder(){
    car1.classList.add("show")
}

function carsorder2(){
    car2.classList.add("show")
}

function carsorder3(){
    car3.classList.add("show")
}

function textadj3(){
    text3.classList.add("show")
}

function buttonadj(){
    button.classList.add("show")
}

setTimeout(handleimage1,500);
setTimeout(handleimage1out,4500);
setTimeout(handleimage2,6000);
setTimeout(textadj,4500);
setTimeout(textadj2,6000)
setTimeout(textadj2out,9000)
setTimeout(carsorder,6500)
setTimeout(carsorder2,7000)
setTimeout(carsorder3,7500)
setTimeout(textadj3,9500)
setTimeout(buttonadj,10500)
// var firstpage=document.querySelector('.first')
// function page(){
// firstpage.classList.add("show")
// }

// setTimeout(page,5000)