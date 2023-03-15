//체크박스 1개만 선택되게 하기

// const btn1 = document.querySelector("#btn1");
// btn1.addEventListener("click");
// function check(item) {
//   const checkBox = document.getElementsByName("step_choice");
//   checkBox.forEach((item) => {
//     item.checked = false;
//   });
//   item.checked = true;
// onclick="check(this)"
// }

const $processes_2_num = document.querySelector(".processes_2_num");

const selectBox = document.querySelectorAll(".select");

function toggleSelectbox(selectBox) {
  selectBox.classList.toggle("active")
  
}

selectBox.forEach((selecBox) => {
  selecBox.addEventListener("click", function (e) {
    toggleSelectbox(selecBox);
    
  });
});

