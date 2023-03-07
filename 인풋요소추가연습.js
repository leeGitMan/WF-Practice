document.getElementById("add").addEventListener("click", () => {
    
    // 생성할 요소들 box, input, span
    const div = document.createElement("div");
    div.classList.add("row");

    const input = document.createElement("input")
    input.classList.add("in");
    input.setAttribute("type", "number");
    
    const span = document.createElement("span");
    span.classList.add("remove");
    span.innerHTML = "&times;";

    span.addEventListener("click", function() {
        this.parentElement.remove();
    });

    div.append(input,span);
    document.querySelector("#boxParent").append(div);
});



document.getElementById("calc").addEventListener("click", () => {


    let sum = 0;

    const inputArr = document.getElementsByClassName("in");

    for(let input of inputArr){
        sum += Number(input.value);
    }

    alert("합계 : " + sum);
 
});

