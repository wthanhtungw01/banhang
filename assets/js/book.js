document.getElementById("inputDate").valueAsDate = new Date();
const inputTime = document.getElementById("inputTime");
const now = new Date();
const hours = now.getHours().toString().padStart(2, "0");
const minutes = now.getMinutes().toString().padStart(2, "0");
const seconds = now.getSeconds().toString().padStart(2, "0");
const meridian = hours >= 12 ? "PM" : "AM";
const formattedTime = `${hours}:${minutes}:${seconds} ${meridian}`;
inputTime.value = formattedTime;
