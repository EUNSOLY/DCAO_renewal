// 변수
const $gnb = document.querySelector(".gnb");
const $gnb_wrap = document.querySelector(".gnb_wrap");
const $M_nav = document.querySelector(".M_nav");
const $M_btn = document.querySelector(".M_btn");

// 메뉴 & 모바일버전 2댑스
$M_btn.addEventListener("click", () => {
  $M_nav.classList.toggle("active");
  $gnb_wrap.classList.toggle("active");
});

const $gnb_list = document.querySelectorAll(".gnb_list");

$gnb_list.forEach((item, i) => {
  item.addEventListener("click", () => {
    $gnb_list.forEach((item, i) => {
      item.classList.removegit("on");
    });

    item.classList.add("on");
  });
});

// 시설안내
const $facility_btn = document.querySelectorAll(".facility_btn");
const $list3_text = document.querySelectorAll(".list3_text");
const $list3_img = document.querySelector(".list3_img");

$facility_btn.forEach((item, i, array) => {
  item.addEventListener("click", () => {
    let imgLink = `   
     <img src="./img/facilityimg_${i + 1}.png" alt="천체투영실" />`;
    $list3_img.innerHTML = imgLink;
    $list3_text.forEach((item, i, array) => {
      item.classList.remove("active");
    });
    $list3_text[i].classList.add("active");
    $facility_btn.forEach((item, i) => {
      item.classList.remove("active");
    });
    item.classList.add("active");
  });
});

//팝업존
const $list_img = document.querySelectorAll(".list_img");
const $head_prev = document.querySelector(".head_prev_btn");
const $head_next = document.querySelector(".head_next_btn");
const $popzon = document.querySelector(".popzon");
// console.log($popzon);

let sliderWidth = $list_img[0].offsetWidth;

window.addEventListener("resize", () => {
  sliderWidth = $list_img[0].offsetWidth;
});
let currentIndex = 0;
let sliderCount = $list_img.length;

$head_next.addEventListener("click", () => {
  $popzon.style.cssText = `margin-left:-${sliderWidth}px; transition:0.5s;`;
  setTimeout(() => {
    $popzon.appendChild($popzon.firstElementChild);
    $popzon.style.cssText = `margin-left:0px;`;
  }, 500);
  let nextIndex = (currentIndex + 1) % sliderCount;

  currentIndex = nextIndex;
});
$head_prev.addEventListener("click", () => {
  $popzon.prepend($popzon.lastElementChild);
  $popzon.style.cssText = `margin-left:-${sliderWidth}px`;
  setTimeout(() => {
    $popzon.style.cssText = `margin-left:0px; transition:0.5s;`;
  });
});

// API
function loadItems() {
  return fetch(
    "https://www.7timer.info/bin/api.pl?lon=127.378&lat=36.349&product=civillight&output=json"
  ) //
    .then((data) => data.json())
    .then((list) => list.dataseries);
}

const apiApp = document.querySelector(".api_zon");
let today = new Date();
let Month = today.getMonth() + 1;
let Day = today.getDate();

function displayActive(item) {
  function loadData(item) {
    let listP = document.createElement("p");
    listP.classList.add("weather_tit");
    let listD = document.createElement("div");
    let weaterReady = item[0].weather;

    let text = "";
    let iconImg = "";

    listD.classList.add("weather_icon");

    if (weaterReady == "clear") {
      // console.log("맑음");
      text = "맑음";
      iconImg = "clear";
    } else if (
      weaterReady == "Partly cloudy" ||
      weaterReady == "cloudy" ||
      weaterReady == "Very cloudy" ||
      weaterReady == "pcloudy"
    ) {
      // console.log("흐림");
      text = "흐림";
      iconImg = "Cloudy";
    } else if (weaterReady == "Foggy") {
      // console.log("안개");
      text = "안개";
      iconImg = "Foggy";
    } else if (
      weaterReady == "Light rain or showers" ||
      weaterReady == "Occasional showers" ||
      weaterReady == "Isolated showers"
    ) {
      // console.log("소나기");
      text = "소나기";
      iconImg = "Rain";
    } else if (weaterReady == "rain") {
      // console.log("비");
      text = "비";
      iconImg = "Rain";
    } else if (weaterReady == "snow") {
      text = "눈";
      iconImg = "Snow";
      // console.log("눈");
    } else if (weaterReady == "mixed") {
      // console.log(비 & 눈);
      text = "비 & 눈";
      iconImg = "Mixed";
    } else if (
      weaterReady == "Thunderstorm possible" ||
      weaterReady == "Thunderstorm"
    ) {
      text = "천둥번개";
      iconImg = "Thunderstorm";
      // console.log("천둥번개");
    } else if (weaterReady == "ThuWindy") {
      text = "강풍";
      iconImg = "ThuWindy";
      // console.log("거센바람");
    }

    listP.innerHTML = `
    <p  class="weather_mons">
    <span class="month">${Month}</span>월<span class="day">${Day}</span>일
    </p>
    <p class="weater"><span class="weaterData">${text}</span>&#32;/&#32;<span>${item[0].temp2m.max}ºC</span></p>
  `;
    listD.innerHTML = `
    <img src="./img/${iconImg}.svg" alt="당일날씨아이콘" />
  </div>`;
    apiApp.appendChild(listP);
    apiApp.appendChild(listD);
  }

  loadData(item);
}
loadItems() //
  .then((item) => {
    console.log(item);
    displayActive(item);
  });
