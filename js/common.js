// 메뉴
const $gnb = document.querySelector(".gnb");
const $gnb_wrap = document.querySelector(".gnb_wrap");
const $M_nav = document.querySelector(".M_nav");
const $M_btn = document.querySelector(".M_btn");


// 시설안내
const $facility_btn = document.querySelectorAll(".facility_btn");
const $list3_text = document.querySelectorAll(".list3_text");
const $list3_img = document.querySelector(".list3_img");
$M_btn.addEventListener("click", () => {
  $M_nav.classList.toggle("active");
  $gnb_wrap.classList.toggle("active");
});

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
const $popzon = document.querySelector(".popzon")
console.log($popzon);

let sliderWidth = $list_img[0].offsetWidth;

window.addEventListener("resize",()=>{
  sliderWidth = $list_img[0].offsetWidth
  
})
let currentIndex = 0;
let sliderCount = $list_img.length;

$head_next.addEventListener("click", ()=>{
  $popzon.style.cssText = `margin-left:-${sliderWidth}px; transition:0.5s;`
  setTimeout(()=>{
    $popzon.appendChild($popzon.firstElementChild)
    $popzon.style.cssText = `margin-left:0px;`;
  },500)
let nextIndex = (currentIndex + 1) % sliderCount;

currentIndex = nextIndex;
})
$head_prev.addEventListener("click",()=>{
  $popzon.prepend($popzon.lastElementChild)
  $popzon.style.cssText = `margin-left:-${sliderWidth}px`
  setTimeout(()=>{
    $popzon.style.cssText = `margin-left:0px; transition:0.5s;`
  })
})

