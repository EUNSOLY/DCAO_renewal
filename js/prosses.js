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
// 뒤로가기 버튼 생성해야하는뎅...

tit.forEach((item, i) => {
  item.addEventListener("click", () => {
    processes.forEach((item) => {
      item.classList.remove("on");
    });
    processes[i].classList.add("on");
  });
});

const Btn = document.querySelectorAll(".processes_1Btn > input");

// 마지막 완료버튼 팝업창오픈
const modal = document.querySelector(".reservationModal");
const modalBtn = document.querySelector(".modal_con input");

// 버튼돌아다니며 클레스 붙여주고 마지막 버튼을 만난다면 모달창 오픈
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
// 모달창 닫기
modalBtn.addEventListener("click", () => {
  modal.classList.remove("on");
});

const tel = document.querySelector("#tel");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordCk = document.querySelector("#confirmationPassword");
const number_error = document.querySelector(".number_error");
const email_error = document.querySelector(".email_error");
const password_error = document.querySelector(".password_error");
const confirmationPassword_error = document.querySelector(
  ".confirmationPassword_error"
);

const telPatten = /^[0-9]+$/;
const emailPatten = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const paasPatten = /^[a-zA-Z0-9]+$/;
tel.addEventListener("change", function (e) {
  const target = e.target;
  let targetValue = target.value;

  if (!telPatten.test(targetValue) || targetValue.trim() == " ") {
    number_error.innerHTML = `핸드폰번호를 제대로 입력해주세요`;
  } else {
    number_error.innerHTML = ``;
  }
});
email.addEventListener("change", function (e) {
  const target = e.target;
  let targetValue = target.value;
  if (!emailPatten.test(targetValue) || targetValue.trim() == " ") {
    email_error.innerHTML = `이메일을 제대로 입력해주세요`;
  } else {
    email_error.innerHTML = ``;
  }
});
password.addEventListener("change", function (e) {
  const target = e.target;
  let targetValue = target.value;
  if (!paasPatten.test(targetValue) || targetValue.trim() == "") {
    password_error.innerHTML = `비밀번호를 제대로 입력해주세요`;
  } else {
    password_error.innerHTML = ``;
  }
});

passwordCk.addEventListener("change", function (e) {
  const target = e.target;
  let targetValue = target.value;
  if (targetValue.trim() == "" || passwordCk.value !== password.value) {
    confirmationPassword_error.innerHTML = `비밀번호가 일치하지않습니다.`;
  } else {
    confirmationPassword_error.innerHTML = ``;
  }
});
// 미사용
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
