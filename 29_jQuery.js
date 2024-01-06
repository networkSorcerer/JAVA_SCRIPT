//Js와 jQuery 차이점

//javascript
//window.onload = function() {
    //document.querySelector("#jsBtn").addEventListener("click", function(){
        //this.style.backgroundColor = "black";
        //this.style.color = "yellow";
        //this.style.fontSize = "20px";
    //});
    
    //document.getElementById("colorChange").addEventListener("click", function(){
        //let wrapper = document.getElementById("wrapper");
        //let ul = wrapper.getElementsByTagName("ul");
        //let li = ul[0].getElementsByTagName("li");

        //for(let i = 0; i < li.length; i++) {
            //let l = li[i];
            //if(l.className == "three") {
                //let txt = l.getElementsByTagName("span");
                //txt[0].style.color = "red";
            //}
        //}
    //});
//};

//jQuery
$(document).ready (function(){
    $("#colorChange").on("click", function(){
        $("#wrapper > ul > li.three > span").css("color", "blue");
    });

    $("#jQueryBtn").on("click", function(){
        $(this).css("background-color", "black").css("color", "yellow").css("font-size", "20px");
    });
});

//ready() 함수 다른 형태
$(function(){
    //jQuery
    $("#btnChange").click(function(){
        $("#hello").html("오늘도 최선을 다해...");
    });
});
$(document).ready(function(){
//mouseenter : 마우스 커서가 올라감, mouseleave : 마우스 커서가 벗어났을 때
$("#img").hover(function(){
    //$("#img").attr("src", ".../images/easys-2.jpg");
    $(this).attr("src", "/images/1.jpg")
}, function() {
    $(this).attr("src", "/images/2.jpg")
    }
);
});


//예제-5
$(document).ready (function(){
const regExp = /^[a-z][a-zA-Z0-9]{7,19}$/;

$("#input1").on("keyup", function(){
    // on() == addEventListener
    //-> 특정 이벤트 발생시 동작 (이벤트 핸들러) 지정
    //특히 동적 요소에 이벤트 설정시 사용

    // 1) 작성된 값이 정규 표현식에 맞는 형식인지 검사
    if( regExp.test( $("#input1").val())){
        //$("#input1").val();
        // : 아이디가 input1인 요소에 작성된 값(value)을 얻어옴
        //$("#input1").val("값");
        //: 아이디가 input1인 요소에 값을 설정함

        // 2) 정규식 결과에 따라 내용 출력
        $("#span1").text("유효한 문자열 형식입니다");
        $("#span1").css("color", "green");
    }  else {
        $("#span1").text("유효하지 않는 문자열 형식입니다").css("color", "red");
        // method chaining : 하나에 대상에 다하여 여러 메소드를 연달아 작성하는 기술
    }

    if( $("#input1").val().length == 0) {
        $("#span1").text("");
    }
});
});



$(document).ready (function(){
$(".singleButton").on("click", function(){
    //눌러진 자가 자신을 의미한다
    $(this).html("오늘도 파이팅합시다~!");
});

$(".multiButton").on("click", function(){
    let index = $(this).index();
    let result = (index + 1 ) + "번째 요소를 눌렀습니다";
    $(this).html(result);
});
});

$(document).ready(function(){

    var number=1;
    $("#treeImage").click(function(){
        number = (number % 6) +1;
        $(this).attr("src", "/images/tree-" + number + ".jpg");
    });
});