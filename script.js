 function countdown(){
const now = new Date();
const olympicsDate = new Date("2028-07-14T00:00:00");

const diff = olympicsDate - now;

const days = Math.floor(diff / (1000 * 60 * 60 * 24));
const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
const minutes = Math.floor((diff / (1000 * 60)) % 60);
const seconds = Math.floor((diff / 1000) % 60);

document.getElementById("countdown").textContent = 
  `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
 }
setInterval(countdown,1000);