const tapBtn = document.querySelectorAll(".prosses_tap > button");
const tapCon = document.querySelectorAll(".tap_con");

// 예약탭메뉴구현
tapBtn.forEach((item, i) => {
  item.addEventListener("click", () => {
    tapBtn.forEach((item) => {
      item.classList.remove("on");
    });
    tapCon.forEach((tapCon) => {
      tapCon.classList.remove("on");
    });
    tapCon[i].classList.add("on");
    item.classList.add("on");
  });
});

// 개인 단체 선택 구현
const prosses_choice = document.querySelector(".prosses_choice");
const choice = prosses_choice.querySelectorAll("label");

choice.forEach((item) => {
  item.addEventListener("click", () => {
    choice.forEach((item) => {
      item.classList.remove("on");
    });
    item.classList.add("on");
  });
});
// 완료 버튼으로 아코디언

const processes = document.querySelectorAll(".processes");
const confirmation = document.querySelector(".processes_4");

const Btn = document.querySelectorAll(".processes_1Btn > input");
Btn.forEach((item, i) => {
  item.addEventListener("click", () => {
    processes.forEach((item) => {
      item.classList.remove("on");
    });
    processes[i + 1].classList.add("on");
    console.log(`순서 ${i + 1}`);
  });
});

// tit눌렀을 때도 안에 내용 확인 할 수 있도록
const tit = document.querySelectorAll(".selection_tit");
console.log(tit);
tit.forEach((item, i) => {
  item.addEventListener("click", () => {
    processes.forEach((item) => {
      item.classList.remove("on");
    });
    processes[i].classList.add("on");
  });
});
// 마지막 완료버튼 팝업창오픈
const modal = document.querySelector(".reservationModal");
const modalBtn = document.querySelector(".modal_con input");

let arrayLast = Btn[Btn.length - 1];
arrayLast.addEventListener("click", () => {
  console.log("모달오픈");
  modal.classList.add("on");
});
// 모달창 닫기
modalBtn.addEventListener("click", () => {
  modal.classList.remove("on");

  if (confirmation.classList.contains("completion") === false) {
    processes.forEach((item) => {
      item.classList.add("hidden");
    });
    let processes_con = document.querySelector(".processes_con");
    confirmation.classList.add("completion");
    processes_con.style.cssText = `border:none;`;
  }
  return;
});

// 셀렉터박스 구현
const select = document.querySelector(".select");

select.addEventListener("mouseover", () => {
  select.classList.add("active");
});
select.addEventListener("mouseout", () => {
  select.classList.remove("active");
});
