

const scrollBtn = document.querySelector(".scroll");

scrollBtn.addEventListener("click", () => {

    document.querySelector(".invitation").scrollIntoView({

        behavior: "smooth"

    });

});

const weddingDate = new Date("August 30, 2026 13:00:00").getTime();

setInterval(() => {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;

    document.getElementById("hours").innerHTML = hours;

    document.getElementById("minutes").innerHTML = minutes;

    document.getElementById("seconds").innerHTML = seconds;

},1000);

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{

    threshold:0.2

});

hiddenElements.forEach(el => observer.observe(el));

const music = document.getElementById("bgMusic");

document.addEventListener("click", function(){

    music.play();

}, { once: true });

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){

    reveals.forEach((item,index)=>{

        const top = item.getBoundingClientRect().top;

        if(top < window.innerHeight - 120){

            setTimeout(()=>{

                item.classList.add("active");

            }, index * 200);

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

