function updateTime() {
  //london
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTime = moment().tz("Europe/london");

  londonDateElement.innerHTML = londonTime.format("dddd, MMMM Do YYYY");
  londonTimeElement.innerHTML = londonTime.format("HH:mm:ss");

  //tokyo
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Japan");

  tokyoDateElement.innerHTML = tokyoTime.format("dddd, MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("HH:mm:ss");

  //manama
  let manamaElement = document.querySelector("#manama");
  let manamaDateElement = manamaElement.querySelector(".date");
  let manamaTimeElement = manamaElement.querySelector(".time");
  let manamaTime = moment().tz("Asia/Bahrain");

  manamaDateElement.innerHTML = manamaTime.format("dddd, MMMM Do YYYY");
  manamaTimeElement.innerHTML = manamaTime.format("HH:mm:ss");

  //new york
  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  let newYorkTime = moment().tz("America/New_York");

  newYorkDateElement.innerHTML = newYorkTime.format("dddd, MMMM Do YYYY");
  newYorkTimeElement.innerHTML = newYorkTime.format("HH:mm:ss");
}

updateTime();
setInterval(updateTime, 1000);
