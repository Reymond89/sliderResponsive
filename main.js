
const bigImg = document.querySelector('.big__img');
const smallImg = document.querySelectorAll('.small__img');

smallImg.forEach( small => {
    small.addEventListener('click', function(){
        const active = document.querySelector('.active');
        active.classList.remove('active');
        small.classList.add('active');
        bigImg.src = small.src;
    })
})

const images = [ "images/img1.jpg", "images/img2.jpg", "images/img3.jpg", "images/img4.jpg"];
let num = 0;

function next () {
    num++;
    if(num >= images.length){
        num=0;
        bigImg.src = images[num];
    }else{
        bigImg.src = images[num]
    }
}
function back () {
    num--;
    if(num < 0){
        num = images.length -1;
        bigImg.src = images[num];
    }else{
        bigImg.src = images[num]
    }
}