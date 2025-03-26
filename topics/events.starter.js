/*
 _____                _       
|  ___|              | |      
| |____   _____ _ __ | |_ ___ 
|  __\ \ / / _ \ '_ \| __/ __|
| |___\ V /  __/ | | | |_\__ \
\____/ \_/ \___|_| |_|\__|___/
                                                           
*/

// 1 — Click on the button and show an alert()
// hint: first select the button, then add an event listener to it
const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", () => {
  alert("alert");
});

// 2 — Hover over the square (#zone1) and change its background color
const zone1 = document.querySelector("#zone1");
zone1.addEventListener("mouseover", () => {
  zone1.style.backgroundColor = "blue"; 
});
zone1.addEventListener("mouseout", () => {
    zone1.style.backgroundColor = ""; 
  });

// 3 — Click on the link to display the hidden Message
// hint: first see how the message is hidden, then do the opposite
// hint2: prevent the default behavior of the link by using .preventDefault()
const link = document.querySelector(".show3");
link.addEventListener("click", (e) => {
  e.preventDefault(); // Voorkomt dat de link de pagina verlaat
  const hiddenMessage = document.querySelector(".hiddenMessage");
  hiddenMessage.style.display = "block"; // Maak het verborgen bericht zichtbaar
});

// 4 — Similar to question number 2, this time use event bubbling to change the background color of the squares in #bubbleZone
// hint: with event bubbling you can select the parent element and listen for events on its children to avoid adding multiple event listeners
bubbleZone.addEventListener("mouseover", (e) => {
    // Controleer of het event van een element met de klasse 'zone' komt
    if (e.target.classList.contains("zone")) {
      e.target.style.backgroundColor = "green";
    }
  });
  

// 5 — Bonus: use mouseout to change the background color back to the original one on the squares in question 2 or 4
