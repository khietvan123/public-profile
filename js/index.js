    //Pagination
    let currentContent = 0;
    const slides = document.querySelectorAll('.swiper-slide');
    //console.log(slides)
    function showSlide(index){
        slides.forEach((slide,i)=>{
            slide.classList.toggle('active',i===index);
        });
    }

    function nextSlide(){
        if(currentContent < slides.length-1){
            currentContent++;
            showSlide(currentContent);
        }
    }

    function prevSlide(){
        if(currentContent>0){
            currentContent--;
            showSlide(currentContent);
        }
    }
document.addEventListener("DOMContentLoaded",()=>{
    showSlide(currentContent);
});