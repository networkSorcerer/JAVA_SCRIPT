let number =1;
$(function(){
    //$("button:eq(0)").click(function(){
    $("button:eq(0)").on("click", function(){
        let li1 = $("<li>").css("color", "red").html("추가항목" + (number++));
        li1.addClass("liEvent");
        let li2 = $("<li>").css("color", "green").html("추가항목" + (number++));
        li1.addClass("liEvent");
        let li3 = $("<li>").css("color", "blue").html("추가항목" + (number++));
        li1.addClass("liEvent");

        //새로 생성된 요소에 대한 이벤트 추가
        //li1.click(function(){
            //$(this).remove();
        //})
        li1.click(function(){
            $(this).remove();
        });

        li2.click(function(){
            $(this).remove();
        });
        li3.click(function(){
            $(this).remove();
        });

        $("ul").append(li1).append(li2).append(li3)
    });

    //동적 요소에 이벤트 처리
    $(document).on("click", ".liEvent", function(){
        $(this).remove();
    });

    $("button:eq(1)").click(function(){
        $("ul").empty();
    });

    $("#print").on("click", function(){
        $("div#result").html(""); //id가 result인 요소의 값 초기화
        let h3 = $("<h3>").html("무엇보다 중요한 것은 아프지 않는것.. <br/> 오늘도 최선을 다하자");
        let p = $("<p>").html("노력은 절대 배신하지 않는다");

        let img = $("<img>");
        img.attr("src", "/images/doit.jpg");

        let btn = $("<button>");
        btn.attr({
            "type":"button",
            "class":"resetBtn"
        });
        btn.html("초기화");//<button type = "button" class = "resetBtn">초기화</button> 생성

        $("div#result").append(h3).append(p.append(img)).append(btn);

    });

    $(document).on("click", ".resetBtn", function(){
        $("div#result").empty();
    });
});