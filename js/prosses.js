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

const processes = document.querySelectorAll(".processes");
const confirmation = document.querySelector(".processes_4");
const tit = document.querySelectorAll(".selection_tit");
// tit눌렀을 때도 안에 내용 확인 할 수 있도록
tit.forEach((item, i) => {
  item.addEventListener("click", () => {
    processes.forEach((item) => {
      item.classList.remove("on");
    });
    processes[i].classList.add("on");
  });
});

// 완료 버튼으로 아코디언
// const Btn = document.querySelectorAll(".processes_1Btn > input");
// console.log(Btn);
// Btn.forEach((item, i) => {
//   item.addEventListener("click", () => {
//     processes.forEach((item) => {
//       item.classList.remove("on");
//     });
//     processes[i + 1].classList.add("on");
//     console.log(`순서 ${i + 1}`);
//   });
// });
const Btn = document.querySelectorAll(".processes_1Btn > input");
//input 창에 정보가 제대로 됬는지 확인 후 넘어갈수있도록
// input요소
//number  input // number_error (핸드폰번호)
//email  input //  email_error (이메일)
//password input // password_error(비밀번호)
//confirmationPassword input // confirmationPassword_error  비밀번호확인)
const tel = document.querySelector("#tel");
const number_error = document.querySelector(".number_error");
const email_error = document.querySelector(".email_error");
const password_error = document.querySelector(".password_error");
const confirmationPassword_error = document.querySelector(
  ".confirmationPassword_error"
);
// 마지막 완료버튼 팝업창오픈
const modal = document.querySelector(".reservationModal");
const modalBtn = document.querySelector(".modal_con input");

Btn.forEach((item, i) => {
  item.addEventListener("click", (e) => {
    processes.forEach((item) => {
      item.classList.remove("on");
    });
    if (e.target == Btn[2]) {
      // e.preventDefault();
      modal.classList.add("on");
      console.log("모달오픈");
    } else {
      processes[i + 1].classList.add("on");
    }
  });
});

// 모달창 닫기
modalBtn.addEventListener("click", () => {
  modal.classList.remove("on");
});

// modalBtn.addEventListener("click", () => {
//   modal.classList.remove("on");

// 예약프로세스완료를 다른 페이지로 연결하여서 아래 내용은 필요없음
//   if (confirmation.classList.contains("completion") === false) {
//     processes.forEach((item) => {
//       item.classList.add("hidden");
//     });
//     let processes_con = document.querySelector(".processes_con");
//     confirmation.classList.add("completion");
//     processes_con.style.cssText = `border:none;`;
//   }
//   return;
// });

// 셀렉터박스 구현
const select = document.querySelector(".select");

select.addEventListener("mouseover", () => {
  select.classList.add("active");
});
select.addEventListener("mouseout", () => {
  select.classList.remove("active");
});

// if (even.target === Btn[2] && ) {
//   console.log("마지막번튼인데용....... ");
//   if (!numberpattern.test(tel.value) || tel.value.trim() === " ") {
//     number_error.textContent = "번호를 잘못 입력하였습니다.";
//     error = true;
//     return false;
//   }
// }
