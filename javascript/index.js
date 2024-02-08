function updateTime() {
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
}

updateTime();
setInterval(updateTime, 1000);
