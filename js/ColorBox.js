// 버튼 클릭 시, 인풋 값에 맞게 색깔 변경
document.getElementById("btnChange").addEventListener("click", () => {
    
    const div1 = document.getElementById("div1");
    const input = document.getElementById("input");
    
    div1.style.backgroundColor = input.value;
});


// 박스를 인풋 값에 맞게 색깔 변경 시키기

// 인풋 요소들 가져오기
const inputArr = document.getElementsByClassName("input2");
// box 요소 가져오기
const boxArr = document.getElementsByClassName("div2");

// 인풋 요소들에게 이벤트 걸어주기

for(let i = 0; i < inputArr.length; i++){
    inputArr[i].addEventListener("keyup", () => {
        boxArr[i].style.backgroundColor = inputArr[i].value;
    });
}



// selectQuery로 해보기

// 인풋 요소, 박스 요소들을 먼저 가져온다. 배열 형태로 변수에 담아주기

const inputArr2 = document.querySelectorAll(".wrap2 > input")
const boxArr2 = document.querySelectorAll(".wrap > div");

for(let i = 0; i < inputArr2.length; i++){
    inputArr2[i].addEventListener("keyup", () => {
        boxArr2[i].style.backgroundColor = inputArr2[i].value;
    })
}


// 버튼으로 트랜지션 입혀서 색상 바꿔보기

const btn = document.getElementsByClassName("btn1");
const boxArr3 = document.getElementsByClassName("div4");
const inputArr3 = document.querySelectorAll(".wrap3 > input");

for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener("click", () => {
        boxArr3[i].style.backgroundColor = inputArr3[i].value;
        boxArr3[i].classList.add("transition");
    })
}






    
