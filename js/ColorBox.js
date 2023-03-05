// 버튼 클릭 시, 인풋 값에 맞게 색깔 변경
document.getElementById("btnChange").addEventListener("click", () => {
    
    const div1 = document.getElementById("div1");
    const input = document.getElementById("input1");
    
    div1.style.backgroundColor = input.value;
});


// 박스를 인풋 값에 맞게 색깔 변경 시키기

// 인풋 요소들 가져오기
document.getElementById("input2").addEventListener("keyup", () =>{
    
    // 상자 요소들 가져오기
    const divArr = document.getElementsByClassName("div2");

    const input2 = document.getElementsByClassName("input2");

    console.log(divArr);
    console.log(input2.value);
    // 상자 요소들이 배열에 담겨있기에, for문을 통해서 상자 요소 하나하나 접근하여, 인풋 밸류를 적용시켜아한다.
    
    for(let i = 0; i < divArr.length; i++){
        divArr[i].style.backgroundColor = input2[i].value;
    }
    // 왜 첫번째 색깔만 바뀌는거지.. 
});