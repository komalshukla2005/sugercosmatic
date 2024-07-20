let currentSlideIndex = 0;
function showSlide(index) {
    const slides = document.querySelectorAll('.list img');
    const dots = document.querySelectorAll('.dot');

    if (index >= slides.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex = index;
    }
    const offset = -currentSlideIndex * 2000;
    document.querySelector('.list').style.transform = `translateX(${offset}px)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlideIndex].classList.add('active');
}

function moveSlide(direction) {
    showSlide(currentSlideIndex + direction);
}

function currentSlide(index) {
    showSlide(index);
}

document.getElementById('prev').addEventListener('click', () => moveSlide(-1));
document.getElementById('next').addEventListener('click', () => moveSlide(1));
setInterval(() => {
    moveSlide(1);
}, 2000);
showSlide(currentSlideIndex);



// second Slider 
let images = document.querySelectorAll('.box1-slide');
let next = document.querySelector('.next2');
let prev = document.querySelector('.pre1');
let counter = 0;

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

function nextSlide() {
    images[counter].classList.remove('active');
    images[counter].style.animation = 'next1 1s ease-in forwards';
    images[counter].style.animation = '0.3s';

    counter = (counter + 1) % images.length;
    images[counter].classList.add('active');
    images[counter].style.animation = 'next2 1s ease-in forwards';
    images[counter].style.animation = '0.3s';
}

function prevSlide() {
    images[counter].classList.remove('active');
    images[counter].style.animation = 'next1 1s ease-in forwards';
    images[counter].style.animation = '0.3s';
    counter = (counter - 1 + images.length) % images.length;
    images[counter].classList.add('active');
    images[counter].style.animation = 'next2 1s ease-in forwards';

    images[counter].style.animation = '0.3s';
}


// for the 3
// let h = document.querySelector('.little-box');
// let b = document.querySelector('#btn');
// let p=0
// b.addEventListener('click', () => {
//     // h.style.display = 'block';
//     if(p==0){
//         h.style.display = 'block';
//         p=1
//     }else{
//         h.style.display = 'none';
//         p=0
//     }
// });


// here i am making the third slider
let choseImage = document.querySelectorAll('.box-3-1-slide');
let next3 = document.querySelector('.next-3-1');
let prev3 = document.querySelector('.pre-3-1');
let counter3 = 0;

next3.addEventListener('click', nextSlide3);
prev3.addEventListener('click', prevSlide3);
function nextSlide3() {
    choseImage[counter3].classList.remove('active3');
    choseImage[counter3].style.animation = 'next1 1s ease-in forwards';
    choseImage[counter3].style.animation = '0.3s';
    counter3 = (counter3 + 1) % choseImage.length;
    choseImage[counter3].classList.add('active3');
    choseImage[counter3].style.animation = 'next2 1s ease-in forwards';
    choseImage[counter3].style.animation = '0.3s';
}
function prevSlide3() {
    choseImage[counter3].classList.remove('active3');
    choseImage[counter3].style.animation = 'next2 1s ease-in forwards';
    choseImage[counter3].style.animation = '0.3s';
    counter3 = (counter3 - 1 + choseImage.length) % choseImage.length;
    choseImage[counter3].classList.add('active3');
    choseImage[counter3].style.animation = 'next1 1s ease-in forwards';
    choseImage[counter3].style.animation = '0.3s';
}
// this is the 5 part of my code
let choseImage5 = document.querySelectorAll('.box-5-1-slide');
let next5 = document.querySelector('.next-5-1');
let prev5 = document.querySelector('.pre-5-1');
let counter5 = 0;

next5.addEventListener('click', nextSlide5);
prev5.addEventListener('click', prevSlide5);

function nextSlide5() {
    choseImage5[counter5].classList.remove('active5');
    choseImage5[counter5].style.animation = 'next1 1s ease-in forwards';
    choseImage5[counter5].style.animation = '0.3s';
    counter5 = (counter5 + 1) % choseImage5.length;
    choseImage5[counter5].classList.add('active5');
    choseImage5[counter5].style.animation = 'next2 1s ease-in forwards';
    choseImage5[counter5].style.animation = '0.3s';
}

function prevSlide5() {
    choseImage5[counter5].classList.remove('active5');
    choseImage5[counter5].style.animation = 'next2 1s ease-in forwards';
    choseImage5[counter5].style.animation = '0.3s';
    counter5 = (counter5 - 1 + choseImage5.length) % choseImage5.length;
    choseImage5[counter5].classList.add('active5');
    choseImage5[counter5].style.animation = 'next1 1s ease-in forwards';
    choseImage5[counter5].style.animation = '0.3s';
}


// this is the 6 slider
const slidesContainer6 = document.querySelector('.slides-6-3');
const slides6 = document.querySelectorAll('.box-6-1-slide');
const nextButton6 = document.querySelector('.next-6-1');
const prevButton6 = document.querySelector('.pre-6-1');
let index6 = 0;
nextButton6.addEventListener('click', () => {
    if (index6 >= slides6.length - 1) {
        slidesContainer6.style.transition = 'none';
        index6 = 0;
        updateSlidePosition();
        setTimeout(() => {
            slidesContainer6.style.transition = 'transform 0.5s ease-in-out';
            index6++;
            updateSlidePosition();
        }, 200);
    } else {
        index6++;
        updateSlidePosition();
    }
});
prevButton6.addEventListener('click', () => {
    if (index6 <= 0) {
        slidesContainer6.style.transition = 'none';
        index6 = slides6.length - 1;
        updateSlidePosition();
        setTimeout(() => {
            slidesContainer6.style.transition = 'transform 0.5s ease-in-out';
            index6--;
            updateSlidePosition();
        }, 200);
    } else {
        index6--;
        updateSlidePosition();
    }
});

function updateSlidePosition() {
    slidesContainer6.style.transform = `translateX(${-index6 * 100}%)`;
}
// this is the 7 part of this code
let choseImage7 = document.querySelectorAll('.con-box7');
let next7 = document.querySelector('.next-7-1');
let prev7 = document.querySelector('.pre-7-1');
let counter7 = 0;

next7.addEventListener('click', nextSlide7);
prev7.addEventListener('click', prevSlide7);

function nextSlide7() {
    choseImage7[counter7].classList.remove('active7');
    choseImage7[counter7].style.animation = 'next1 1s ease-in forwards';
    choseImage7[counter7].style.animation = '0.3s';
    counter7 = (counter7 + 1) % choseImage7.length;
    choseImage7[counter7].classList.add('active7');
    choseImage7[counter7].style.animation = 'next2 1s ease-in forwards';
    choseImage7[counter7].style.animation = '0.3s';
}

function prevSlide7() {
    choseImage7[counter7].classList.remove('active7');
    choseImage7[counter7].style.animation = 'next2 1s ease-in forwards';
    choseImage7[counter7].style.animation = '0.3s';
    counter7 = (counter7 - 1 + choseImage7.length) % choseImage7.length;
    choseImage7[counter7].classList.add('active7');
    choseImage7[counter7].style.animation = 'next1 1s ease-in forwards';
    choseImage7[counter7].style.animation = '0.3s';
}

// this is the 8 part of this code and i write code here
const slidesContainer8 = document.querySelector('.slides8');
const slides8 = document.querySelectorAll('.box-8');
const nextButton8 = document.querySelector('.next8');
const prevButton8 = document.querySelector('.pre8');
let index8 = 0;
nextButton8.addEventListener('click', () => {
    if (index8 >= slides8.length - 1) {
        slidesContainer8.style.transition = 'none';
        index8 = 0;
        updateSlidePosition8();
        setTimeout(() => {
            slidesContainer8.style.transition = 'transform 0.5s ease-in-out';
            index8++;
            updateSlidePosition8();
        }, 200);
    } else {
        index8++;
        updateSlidePosition8();
    }
});

prevButton8.addEventListener('click', () => {
    if (index8 <= 0) {
        slidesContainer8.style.transition = 'none';
        index8 = slides8.length - 1;
        updateSlidePosition8();
        setTimeout(() => {
            slidesContainer8.style.transition = 'transform 0.5s ease-in-out';
            index8--;
            updateSlidePosition8();
        }, 200);
    } else {
        index8--;
        updateSlidePosition8();
    }
});

function updateSlidePosition8() {
    slidesContainer8.style.transform = `translateX(${-index8 * 100}%)`;
}

// this is the 10 part of this code 
const slidesContainer10 = document.querySelector('.slides10');
const slides10 = document.querySelectorAll('.box-10');
const nextButton10 = document.querySelector('.next10');
const prevButton10 = document.querySelector('.pre10');
let index10 = 0;
nextButton10.addEventListener('click', () => {
    if (index10 >= slides10.length - 1) {
        slidesContainer10.style.transition = 'none';
        index10 = 0;
        updateSlidePosition10();
        setTimeout(() => {
            slidesContainer10.style.transition = 'transform 0.5s ease-in-out';
            index10++;
            updateSlidePosition10();
        }, 200);
    } else {
        index10++;
        updateSlidePosition10();
    }
});

prevButton10.addEventListener('click', () => {
    if (index10 <= 0) {
        slidesContainer10.style.transition = 'none';
        index10 = slides10.length - 1;
        updateSlidePosition10();
        setTimeout(() => {
            slidesContainer10.style.transition = 'transform 0.5s ease-in-out';
            index10--;
            updateSlidePosition10();
        }, 200);
    } else {
        index10--;
        updateSlidePosition10();
    }
});

function updateSlidePosition10() {
    slidesContainer10.style.transform = `translateX(${-index10 * 100}%)`;
}

// This is the text part of this code ;
let showText = document.querySelector('.print');
let longText = document.querySelector('.longText');

showText.addEventListener('click', () => {

    if (longText.style.display === 'block') {
        longText.style.display = 'none';
        showText.style.backgroundColor = 'white';

    } else {
        longText.style.display = 'block';
        showText.style.backgroundColor = 'grey';
    }
});

// this is the Subscribe Part of this code //
let inputValue = document.querySelector('.bottam-input');
let inputButton = document.querySelector('.bootam-button');
let showValueOnUI = document.querySelector('.Check-Value');

inputButton.addEventListener('click', function () {
    let email = inputValue.value.trim();
    if (isValidEmail(email)) {
        console.log(email);
        showValueOnUI.textContent = 'You have logged in successfully...';
        inputValue.value = '';
    } else {
        console.log('Invalid email');
        showValueOnUI.textContent = 'Please enter a valid email...';
        inputValue.value = '';
    }
    setTimeout(function () {
        showValueOnUI.textContent = '';
    }, 5000);
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
let stars = document.querySelectorAll('.click-btn');
let ShowBoxes_Little = document.querySelector('.little-box');
let cancelBtn1=document.querySelector('.cancel-btn1')
cancelBtn1.addEventListener('click',()=>{
      ShowBoxes_Little.style.display='none'
})
stars.forEach((star) => {
    star.addEventListener('click', () => {
        console.log("Hey I am star");
        if(ShowBoxes_Little.style.display=='block'){
             ShowBoxes_Little.style.display='none'
        }else{
           ShowBoxes_Little.style.display='block'
        }
    });
});