$(document).ready(function(){
    $("#pwd").on("click", function(){
        $("#alert").text("영문자 대/소문자 특수문자, 숫자 포함 8~32자");
    });
    $("#pwd").on("click", function(event){
        event.preventDefault();

        if($("#id").val().trim()==="") {
            alert("아이디는 필수 입력사항입니다");
            return;
        }
    })
    $("#pwd2").on("click", function(event){
        event.preventDefault();

        if($("#id").val().trim()==="") {
            alert("아이디는 필수 입력 사항입니다");
            return;
        }
        if ($("#pwd").val().trim()==="") {
            alert("비밀번호는 필수 입력 사항입니다");
            return;
        }
    })
    $("#email").on("click", function(event){
        event.preventDefault();

        if($("#id").val().trim()==="") {
            alert("아이디는 필수 입력사항입니다");
            return;
        }
        if($("#pwd").val().trim()==="") {
            alert("비밀번호는 필수 입력 사항입니다");
            return;
        }
        if($("#pwd2").val().trim()==="") {
            alert("비밀번호 확인은 필수 입력사항입니다");
            return;
        }
    })
})