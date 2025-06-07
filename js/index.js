    //Pagination - About me
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

//Pagination - Project
let currentStartIndex = 0; // initial index
let visibleCount = 3;
const allProjects = document.querySelectorAll('.project-card.swiper-div');


// function updateProjectVisibility() {
//     if(window.innerWidth>= 700){
//         allProjects.forEach((card, index) => {
//             if (index >= currentStartIndex && index < currentStartIndex + visibleCount) {
//                 card.style.display = 'flex';
//             } else {
//                 card.style.display = 'none';
//             }
//         });
//     }
// }

function updateProjectVisibility() {
    if (window.innerWidth >= 700) {
        allProjects.forEach((card, index) => {
            if (index >= currentStartIndex && index < currentStartIndex + visibleCount) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    } else {
        allProjects.forEach(card => {
            card.style.display = 'flex';
        });
    }
}

// Initialize visibility on page load
updateProjectVisibility();

// Event listeners
document.getElementById('next-button-project').addEventListener('click', () => {
    if (currentStartIndex + visibleCount < allProjects.length) {
        currentStartIndex++;
        updateProjectVisibility();
    }
});

document.getElementById('prev-button-project').addEventListener('click', () => {
    if (currentStartIndex > 0) {
        currentStartIndex--;
        updateProjectVisibility();
    }
});


document.addEventListener("DOMContentLoaded",()=>{
    showSlide(currentContent);
    
});

window.addEventListener('resize',()=>{
    updateProjectVisibility();
});