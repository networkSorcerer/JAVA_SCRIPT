$(function() {
    $("#sendBtn").click(function(){
        //$(input요소).val() 함수는 사용자가 입력한 값 반환
        // $(input요소).val('설정할 값') 함수는 요소에 값 설정
        
        //** 아이디 입력검사 */
        let userid = $("input[name='user_id']").val();
        if (userid.replace(/\s/g, "") =="") {
            alert("아이디를 입력하세요.");
            $("input[name='user_id']").val("");
            $("input[name='user_id']").focus();
        }
        const idPattern = /(^[a-zA-Z][a-zA-Z0-9]{5,11}$)/g;
        if(!idPattern.test(user_id)){
            alert("아이디는 첫글자 영문자로, 두번째부터 영문자와 숫자로 \n 6글자이상 12글자이하로 작성해 주셔야 합니다");
            $("#user_id").val("");
            $("#user_id").focus();
            return;
        }
    });
    $("#sendBtn").click(function(){
        let userpwd = $("input[name='user_pw']").val();
        if(userpwd.replace(/\s/g, "")=="") {
            alert("비밀번호를 입력하세요.");
            $("input[name='user_pw']").val("");
            $("input[name='user_pw']").focus();
        }
        const pwdPattern = /(^[a-zA-Z][a-zA-Z0-9]{5,11}$)/g;
        if(!pwdPattern.test(userpwd)) {
            alert("비밀번호는 첫글자 영문자로, 두번째부터 영문자와 숫자로 \n 6글자이상 12글자 이하로 작성해 주셔야 합니다");
            $("#user_pw").val("");
            $("#user_pw").focus();
            return;
        }
    });
    result += "<li> 이름 :  " + $("#user_name").val()+ "</li>";
    result += "<li>생년월일 : " + $("input[name='birth']").val() +"</li>";
    result += "<li>성별 : " +$("input[name ='gender']: checked").val() +  " </li>";

    let email = $("input[name = 'email']").val() + "@" + $("input[name='emailDomain']").val();
    result += "<li>이메일 : " +  email + "</li>";

    result += "<li>핸드폰 번호 : " + $("input[name='hopo']").val()+"</li>";

    let hobby = $(".hobby_check:checked");
    let select_hobby = "";

    hobby.each(function(){
        select_hobby += $(this).val() + " ";
    })

    result += "<li>취미 : " + select_hobby + "</li>";
    result += "<li>직업 : " + $("select[name='job'] > option:selected").val() +"</li>";
    result +="</ul>";

    $("formResult").show();
    $("#formResult").html(result);
    $("#emailAddress").change(function(){
        //let emailAddress = $("#emailAddress").val();
        let emailAddress = $("select[name='emailAddress']").val();
        if($("#emailAddress > option:selected").index()==5) {
            $("#emailDomain").removeAttr("readonly");
            $("#emailDomain").val("");
            $("#emailDomain").focus();
        } else {
                    // attr("속성","값"): 속성에 값을 설정할 때 사용(attribute). 
            //                   값이 반드시 필요한 속성
            // prop("속성","값"): 속성에 값을 설정할 때 사용(property). 
            //                   값이 있을 수도 없을 수도 있는 속성. 
            //                   readonly or readonly="readonly", checked, selected
            // prop("속성명")  :  해당 속성이 요소에 존재하면 true, 아니면 false
            // prop("속성명", ture | false) : 해당 속성을 checked 또는 selected 상태로 변경(true)/해제(false)
            $("#emailDomain").prop("readonly", true);
            $("#emailDomain").val(emailAddress);
        }
    });
    if($("#user_name").val().replace(/\s/g,"")==""){
        alert("이름을 입력하세요");
        $("#user_name").val("");
        $("#user_name").focus();
        return;
    }
    if($("#birth").val().replace(/\s/g, "")=="") {
        alert("생년월일을 입력하세요");
        $("#birth").val("");
        $('#birth').focus();
        return;
    }
    if(!$("input[name='gender']").is(":checked")) {
        alert("성별을 선택해 주세요.");
        return;
    }
    if($("#email").val().replace(/\s/g, "")=="") {
        alert("이메일 주소를 입력하세요");
        $("#email").val("");
        $("#email").focus();   
        return;
    }

    if ($("#input[name='hpno']").val().repalce(/\s/g, "")== ""){
        alert("핸드폰 번호를 입력하세요");
        $("#input[name='hpno']").val("");
        $("#input[name='hpno']").focus();   
        return;
    }
    if(!$("input[name'hobby']").is(":checked")) {
        alert("취미를 선택해 주세요");
        return;
    }

    if($("select[name='job'] > option:selected").index() <1) {
        alert("직업을 선택해 주세요");
        return;
    }
    $("#operation").click(function(){
        const number1 = $("#number1").val();
        if(number1.replace(/\s/g,"")=="" || isNaN(number1)) {
            alert("첫번째 숫자를 입력해주세요.");
            $("#number1").val("");
            $("#number1").focus();
            return;
        }
        const number2 = $("#number2").val();
        if (number2.replace(/\s/g,"")==""|| isNaN(number2)) {
            alert("두번째 숫자를 입력해 주세요.");
            $("#number2").val("");
            $("#number2").focus();
            return;
        }
        const symbol = $("#symbol > option:selected").val();
        //let result = eval(number1 + symbol + number2);
        switch(symbol){
            case "+" : 
            result = parseInt(number1) + parseInt(number2);
            break;
            case "-" : 
            result = parseInt(number1) - parseInt(number2);
            break;
            case "*" : 
            result = parseInt(number1) * parseInt(number2);
            break;
            case "/" : 
            result = parseInt(number1) / parseInt(number2);
            //isFinite(123.123) 123.123은 유한한 숫자이므로 true를  반환.
            //isFinite(5/0) Infinity는 무한한 숫자이므로 false를 반환
            if(!isFinite(result)){
                $("#result").val("0으로 나눌 수 없습니다");
                return;
            }
            break;
        }
        $("#result").val(result);
    });
    $("#plusBtn").click(function(){
        const pattern = /[^\d]+/g; //대괄호 안의 ^는 제외하고 d는 숫자임으로 숫자을 제외하고 찾는 것이다
        let temp, total = 0;
        let number3 = $("#number3").val();
        if(number3.replace(/\s/g,"")==""|| pattern.test(number3)) {
            alert("첫번째 숫자를 입력해주세요");
            $("#number3").val("");
            $("#number3").focus();
            return;
        }
        let number4 = $("#number4").val();
        if (number4.replace(/\s/g,"")=="" || pattern.test(number4)) {
            alert("두번째  숫자를 입력해 주세요");
            $("#number4").val("");
            $("#number4").focus();
            return;
        }
        number3 = parseInt(number3);
        number4 = parseInt(number4);
        if (number3 < number4) {
            temp = number3;
            number3 = number4;
            number4 = temp;
        }
        for (let i = 1; i<=number4; i++) {
            total += number3;
        }
        $("#area").val(total);
    });
    
});
$("#resetBtn").click(function(){
    $("#join").each(function(){
        this.reset();
    });
    $("#formResult").hide();
});
$("#all_check").change(function(){
    let is_check = $(this).is(":checked");
    $(".hobby_check").prop("checked", is_check);
});

$("#upload_file_check").change(function(){
    let is_check = $(this).is(":checked");

    $("#upload_file").prop("disabled", !is_check);
});