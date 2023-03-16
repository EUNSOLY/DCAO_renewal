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
