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


    
