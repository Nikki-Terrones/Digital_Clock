// Video I was able to understand and follow along 
// https://youtu.be/2glfqa-ZbNw?si=RBKsLBd85NOQR4Hr

function updateClock(){
  const now = new Date();
  let hours = now.getHours();
  const meridiem = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  hours = hours.toString().padStart(2, 0);
  const minutes = now.getMinutes().toString().padStart(2, 0);
  const seconds = now.getSeconds().toString().padStart(2, 0);
  const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
  document.getElementById("clockFace").textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);