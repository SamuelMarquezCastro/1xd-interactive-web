/*
  __  .__                             
_/  |_|__| _____   ___________  ______
\   __\  |/     \_/ __ \_  __ \/  ___/
 |  | |  |  Y Y  \  ___/|  | \/\___ \ 
 |__| |__|__|_|  /\___  >__|  /____  >
               \/     \/           \/ 
*/

// 1 — start a timer and show a ⏰ in #clock after 10 seconds
setTimeout(() => {
  document.getElementById("clock").textContent = "⏰";
}, 10000);


// 2 — click the start button to show a ticking clock in #timer that goes up every second
// clicking stop should clear and stop the timer and reset the clock to 0
let timer;
let counter = 0;
const timerElement = document.querySelector("#timer");

document.querySelector("#start").addEventListener("click", () => {
    if (!timer) {
        timer = setInterval(() => {
            counter++;
            timerElement.innerHTML = counter;
        }, 1000);
    }
});

document.querySelector("#stop").addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
    counter = 0;
    timerElement.innerHTML = counter;
});


// 3 — create an image gallery that shows a new image every 5 seconds and repeats that cycle
// use the images gallery1.jpg, gallery2.jpg, gallery3.jpg in the images/timers_intervals folder
// use only one img tag in the html and change its src attribute (#slideshow)
const images = [
  "../images/timers_intervals/gallery1.jpg",
  "../images/timers_intervals/gallery2.jpg",
  "../images/timers_intervals/gallery3.jpg"
];
let currentImageIndex = 0;
const slideshowElement = document.querySelector("#slideshow");

setInterval(() => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  slideshowElement.src = images[currentImageIndex];
}, 5000);

