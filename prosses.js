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

// 셀럭터 박스 이너HTML
// $processes_2_num.innerHTML = `   <select name="num" class="select">
// <option disabled selected>인원수를 선택하세요</option>
// <option value="1">1</option>
// <option value="2">2</option>
// <option value="3">3</option>
// <option value="4">4</option>
// <option value="5">5</option>
// <option value="6">6</option>
// <option value="7">7</option>
// <option value="8">8</option>
// <option value="9">9</option>
// <option value="10">10</option>
// <option value="11">11</option>
// <option value="12">12</option>
// <option value="13">13</option>
// <option value="14">14</option>
// <option value="15">15</option>
// <option value="16">16</option>
// <option value="17">17</option>
// <option value="18">18</option>
// <option value="19">19</option>
// <option value="20">20</option>
// </select>`;

// 셀랙터박스 커스텀 기능
// const selectBox = document.querySelector(".select");

// selectBox.addEventListener("click", function (e) {
//   console.log(e);
// });

function toggleSelectbox(selectBox) {
  selectBox.classList.toggle("active");
}
const selectBox = document.querySelectorAll(".select");

selectBox.forEach((selecBox) => {
  selecBox.addEventListener("click", function (e) {
    toggleSelectbox(selecBox);
  });
});
