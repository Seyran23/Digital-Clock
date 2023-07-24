window.addEventListener("load", calculateTime);

function calculateTime() {
  let date = new Date();
  let dayNumber = date.getDay();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let ampm = hour >= 12 ? "PM" : "AM";
  let daynames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  hour = hour % 12;
  hour = hour ? 12 : "12";
  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;

  const weekDayContainer = document.querySelector(".day_container");
  const hoursContainer = document.querySelector(".hours_container");
  const minutesContainer = document.querySelector(".minutes_container");
  const hour12FormatContainer = document.querySelector(".am-pm_container");

  weekDayContainer.innerHTML = daynames[dayNumber];
  hoursContainer.innerHTML = hour;
  minutesContainer.innerHTML = minute;
  hour12FormatContainer.innerHTML = ampm;

  setTimeout(calculateTime, 200);
}
