let slideIndex = 0;

showSlides();

function showSlides(){
    let i;
    let slidesNum = document.querySelectorAll('.slides');

    for(i=0;i<slidesNum.length;i++){
        slidesNum[i].style.display = 'none';
    }
    slideIndex++;

    if(slideIndex > slidesNum.length){
        slideIndex = 1 ;
    }

    slidesNum[slideIndex-1].style.display = 'block';

    setTimeout(showSlides,2000);
}