// 10번 출력할거니깐 횟수를 세는 카운트 변수 선언 및 초기화
count = 0;
const box = document.getElementById("area1");
box.addEventListener("mouseover",function(){

    // 글자를 변경시킬 p태그 요소 가져오기
    let p = document.getElementById("spanText");

    if(count == 0){
        p.innerText = "사랑해";
        count ++;
    }
    else if(count <= 10){
        p.innerText += "사랑해 가지마";
        count++;
        
    }
    else{
        p.innerText = "야매로!";
        box.style.backgroundColor = "black";
        p.style.color = "white";
        box.style.border = "1px solid black";
    }

})