$(function(){
    $("#joinBtn").on("click", function(){
        if($("#userId").val().replace(/\s/g, "")=="") {
            alert("아이디는 필수 입력사항입니다");
            return;
        }
        if($("#userName").val().replace(/\s/g, "")=="") {
            alert("이름은 필수 항목입니다");
            return;
        }

    })

    // $("#userId, #userNmae").on({
    //     blur : function() {
    //         if($(this).val().replace(/\s/g, "")== ""){
    //             $(this).next().html($(this).prev().html()+ "는 필수항목입니다");
    //             return;
    //         }
    //     },
    //     focus: function() {
    //     $(this).next().html("");
    //     }
    // });
    $(".inputData").on("focusout", function(){
        if($(this).val().replace(/\s/g, "")=="") {
            $(this).next().html($(this).prev().html()+"는 필수 항목입니다");
            return;
        }
    });
    $(".inputData").on("focusin", function(){
        $(this).next().html("");
    });

    $("p").on({
        mouseenter:function(){
            $(this).css("background-color", "lightgray");
        },
        mouseleave: function(){
            $(this).css("background-color", "lightblue");
        },
        click: function() {
            $(this).css("background-color", "yellow");
        }
    });
});
// if($("#email").val().replace(/\s/g, "")=="") {
//     alert("이메일 주소를 입력하세요");
//     $("#email").val("");
//     $("#email").focus();   
//     return;
