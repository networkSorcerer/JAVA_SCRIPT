function add(){
    const number1 = parseInt(document.getElementById("number1").value);
    const number2 = parseInt(document.getElementById("number2").value);
    if(isNaN(number1) || isNaN(number2)){
        alert("숫자만 입력해 주셔야 합니다");
        document.getElementById("number1").value = "";
        document.getElementById("number2").value = "";
        return;
    }
    document.getElementById("result").value = sum(number1, number2);
}
function sum(number1, number2){
    return number1+number2;
}

// var clickCount = 0;

//         function clickCount() {
//             // 클릭 카운트 증가
//             clickCount++;

//             // 클릭된 div 요소에 카운트 업데이트
//             var btn1 = document.getElementById("btn1");
//             btn1.innerHTML = clickCount;
//         }

var clickCount = 0;

  function incrementCounter() {
    clickCount++;
    document.getElementById('clickCount').innerText = clickCount;
  }



function test1(name) {
    console.log(name + "매개변수를 가진 기본 함수");
}
test1("홍길동");

const test2 = function(){
    console.log("익명함수");
}
test2();
//즉시 실행 함수- 매개변수를 가지고 있지 않을 때
(function(){
    console.log("즉시 실행 함수");
}());

//즉시 실행함수
(function(name){
    console.log(name + "매개 변수를 가진 즉시 실행 함수");
}("홍길동"));

//*즉시 실행 함수의 변수명 중복 해결
const str = "전역 변수의 str";

(function(){
    const str = "즉시 실행 함수내 지역변수의 str";
    console.log(str);
})();

console.log(str);

document.getElementById("btn2-1").addEventListener("click",()  => {
    alert("화살표 함수 기본 형태 입니다.");
});
//2. 매개변수 1개 : 매개변수 => {}
document.getElementById("btn2-2").addEventListener("click", e => { 
    console.log(e.target.id);
    e.target.style.backgroundColor = "yellow";
})
//fn = funtion(num){ return num *10}
function printConsole(fn){//매개 변수로 함수가 전달됨
    console.log(fn(2));
    //console.log(fn("홍길동", 20 ));
}

//3. {}, return 생략
document.getElementById("btn2-3").addEventListener("click",()=>{
    //함수 호출(익명 함수)
    printConsole( function(num){ return num*10});
    //함수 호출 (화살표 함수)
    printConsole( num => num*5);
    // 반환값이 Obhect이면 {}, return 생략 불가
    //-> 화살표(=>) 다음에 함수 정의 부분이 있어야 되는데
    // 객체 (obhect) 가 작성되어 있어 문법 오류가 발생
    //printConsole((name, age) => {"name" : name, "age" : age});
    printConsole((name, age)  => {return { "name" : name, "age" : age }});
});

// this(이벤트가 발생한 요소) 사용불가
// 1) 익명 함수는 this 사용가능

document.getElementById("btn2-4").addEventListener("click", function(){
    this.style.backgroudColor= "pink";
})
//2) 화살표 함수는 this 사용불가
document.getElementById("btn2-4").addEventListener("click", (e)=>{
    // 화살표 함수에서 this는 창 자체를 나타내는 객체(window)이다
    console.log(e.target);
    //this.style.color = "white";
    e.target.style.color = "white";
})

// function.js

document.addEventListener("DOMContentLoaded", function () {
    // DOM이 로드되면 실행될 코드

    // "글자색 변경" 버튼 요소 가져오기
    var fontChangeButton = document.getElementById("fontChange");

    // "글자색 변경" 버튼 클릭 이벤트에 대한 핸들러 추가
    fontChangeButton.addEventListener("click", function () {
        // input 요소에서 선택된 색상 가져오기
        var fontColorInput = document.getElementById("fontColor");
        var selectedColor = fontColorInput.value;

        // 블록인용구의 스타일 변경
        var loveBlockquote = document.getElementById("love");
        loveBlockquote.style.color = selectedColor;
    });
});