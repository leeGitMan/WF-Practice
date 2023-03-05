// 카톡방 채팅 버튼을 눌렀을 떄, 인풋 값이 화면에 출력되어야함.



// 버튼 요소를 먼저 가져와서 클릭 함수 걸어두기
function readValue() {
    
    // 채팅창 요소들 다 가져오기
    
    const bg = document.getElementById("chat-bg");
    const input = document.getElementById("inputChat");

    // 채팅이 입력되었을 때, 인풋 값이 채팅창에 적용이 되어야함
    // 일단 채팅이 잘 입력되었는지 조건을 따져야함

    if(input.value.trim().length > 0){
        
        bg.innerHTML += "<p><span>" + input.value + "</span></p>";
        bg.scrollTop = bg.scrollHeight;
    }
    else{
        alert("채팅을 입력해주세요.");
    }

    // 채팅창 인풋값 초기화
    input.value = "";
}


function enterInput() {
    
    // 채팅창에 값을 넣고 엔터를 쳤을 때, 위 readValue()함수가 실행이 되어야함.
    if(window.event.key == "Enter"){
        readValue();
    }
}