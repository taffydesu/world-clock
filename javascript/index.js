function updateTime() {
  //tokyo
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoTime = moment().tz("Asia/Japan");

    tokyoDateElement.innerHTML = tokyoTime.format("dddd, MMMM Do YYYY");
    tokyoTimeElement.innerHTML = tokyoTime.format("HH:mm:ss");
  }
  //bahrain
  let manamaElement = document.querySelector("#manama");
  let manamaDateElement = manamaElement.querySelector(".date");
  let manamaTimeElement = manamaElement.querySelector(".time");
  let manamaTime = moment().tz("Asia/Bahrain");

  manamaDateElement.innerHTML = manamaTime.format("dddd, MMMM Do YYYY");
  manamaTimeElement.innerHTML = manamaTime.format("HH:mm:ss");
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace(`_`, ` `).split(`/`)[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElememnt = document.querySelector("#cities");
  citiesElememnt.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("dddd, MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("HH:mm:ss")}</div>
        </div>
        <center><a href="/">RETURN</a></center> `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
