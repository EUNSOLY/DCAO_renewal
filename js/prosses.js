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
const prosses_choice = document.querySelector(".prosses_choice")
const choice = prosses_choice.querySelectorAll("input")


const individual = document.querySelector(".individual")
const group = document.querySelector(".group")



const processes = document.querySelectorAll('.processes')
console.log(processes);



const Btn = document.querySelectorAll(".processes_1Btn > input")
console.log(Btn);


Btn.forEach((item,i )=>{
  item.addEventListener("click", ()=>{
    processes.forEach((item)=>{
      item.classList.remove("on")
    })
    processes[i+1].classList.add("on")
  })

 
  
})
const modal = document.querySelector(".reservationModal")
const modalBtn = document.querySelector(".modal_con input")
let arrayLast = Btn[Btn.length - 1]

// console.log(arrayLast);
arrayLast.addEventListener("click", ()=>{
console.log("마지막이다");
modal.classList.add("on")
})
modalBtn.addEventListener("click", ()=>{
  modal.classList.remove("on")
  
})