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

// make the date
// line it up horizontally
// change text color to stand out
// One Step At A Time :)

// function(){
//   const newDate = new Date(month, day, year);
//   let month = newDate.getMonth();
//   const day = newDate.getDay();
//   const year = newDate.getYear();
//   const dateString = `${month},${day}.${year}`;
// }

// updateDate();
// setInterval(updateDate, 60); 
// document.getElementById("date").textContent

// var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// var today  = new Date();

// console.log(today.toLocaleDateString("en-US", options));

// var dateFormat = require('dateformat');
// var now = new Date();
// dateFormat(now, "mmmm dS, yyyy");
