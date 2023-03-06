document.getElementById("lottoBtn").addEventListener("click", function(){
    
    // 로또 번호 6자리 배열 생성 하기
    let lotto = [];
    
    
    
    // 로또 배열 길이만큼 와일문 돌리기
    while(lotto.length < 6){
        
        let lottoNum = Math.floor(Math.random() * 45 + 1);
        // 로또 번호 생성하기
        // 만약 중복된 숫자가 없을 경우 --> indexOf == -1 배열에 로또 번호를 집어넣기
        console.log(lottoNum)
        
        if(lotto.indexOf(lottoNum) == -1){
            // push로 로또 번호 뒤에서부터 밀어넣기
            lotto.push(lottoNum);
        }
    }
    
    // 콘솔로 로또 번호 찍어보기

    console.log(lotto);

    // 정렬하기 
    lotto.sort(function(a,b) {return b-a});
    
    // 정렬이 잘되었는지 콘솔로 다시 찍어보기.
    console.log(lotto);
    
})