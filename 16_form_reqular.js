window.onload = function() {
    document.getElementById("btn1").addEventListener("click", function(){
        const div1 = document.getElementById("div1");
        div1.innerHTML = "";


    const regExp1 = /a/;         div1.innerHTML += "/a/ , apple : " + regExp1.test("apple") + "<hr/>";
    div1.innerHTML += "/a/ , price : " + regExp1.test("price") + "<hr/>";

    let regExp2 = /[abcd]/;
    div1.innerHTML += "/[abcd]/ , apple : " + regExp2.test("apple") + "<hr/>";
    div1.innerHTML += "/[abcd]/ , sub : " + regExp2.test("sub") + "<hr/>";
    div1.innerHTML += "/[abcd]/ , qwert : " + regExp2.test("qwert") + "<hr/>";
    regExp2 = /[^abcd]/;
    div1.innerHTML += "/[^abcd]/, html : " +regExp2.test("html") + "<hr/>";
    const regExp3 =/group$/;
    div1.innerHTML += "/group$/ , group100 : " + regExp3.test("group100") + "<hr/>";
    div1.innerHTML += "/group$/ , 100group : " + regExp3.test("100group") +"<hr/>";



    const regExp4 =/group$/;
    div1.innerHTML += "/group$/ , group100 : " + regExp4.test("group100") + "<hr/>";
    div1.innerHTML += "/group$/ , 100group : " + regExp4.test("100group") +"<hr/>";
});

    document.getElementById("inputName").addEventListener("keyup", function(){

        const span = document.getElementById("inputNameResult");

        const regExp = /^[가-힣]{2,5}$/;

        if (regExp.test(this.value)) {
            span.innerText = "유효한 이름 형식입니다";
            span.style.color = "green";
            span.style.fontWeight = "bold";
        } else {
            span.innerText = "이름 형식이 유효하지 않습니다";
            span.style.color = "red";
            span.style.fontWeight = "bold";
        }

        if (this.value.length ==0) {
            span.innerText = "";
        }
    });

    document.getElementById("idCheck").addEventListener("click", function(){
        const id = document.getElementById("mid").value;
        const pattern = new RegExp("^[a-zA-Z][0-9a-zA-Z]{4,7}$");

        console.log("test반환값 : " + pattern.test(id));

        if(pattern.test(id)){
            alert("유효한 아이디입니다");
        }else {
            alert("아이디는 5~8자로 입력하셔야 하고 첫글자 영문자로, 숫자와 영문자만 가능합니다");
            document.getElementById("mid").value ="";
        }
    });

    document.getElementById("nameCheck").addEventListener("click", function(){
        if (document.getElementById('user_name').value.replace(/\s/g, "") == "") {
            // 코드 실행
        document.getElementById('msg').innerHTML = "이름을 입력해주세요";
            document.getElementById('msg').style.color="red";
            document.getElementById('user_name').value = "";
        }
        
            
        
    });

    document.getElementById("user_name").addEventListener("focus", function(){
        document.getElementById('msg').innerHTML = "";
    });


}
//      1. 버튼이 클릭되면 실행되는 함수 설정
// window.onload = function() {
    
//      2. id가 "div1"인 HTML 요소를 변수에 할당
//     const div1 = document.getElementById("div1");
    
//      3. id가 "div1"인 HTML 요소의 내용을 비움
//     div1.innerHTML = "";

//      4. /a/ 정규 표현식을 나타내는 RegExp 객체 생성
//     const regExp1 = /a/;

//      5. "apple" 문자열에 /a/ 정규 표현식이 매치되는지 테스트하고 결과를 HTML에 추가
//     div1.innerHTML += "/a/ , apple : " + regExp1.test("apple") + "<hr/>";

//      6. /[abcd]/ 정규 표현식을 나타내는 RegExp 객체 생성
//     let regExp2 = /[abcd]/;

//      7. "apple", "sub", "qwert" 문자열에 /[abcd]/ 정규 표현식이 매치되는지 테스트하고 결과를 HTML에 추가
//     div1.innerHTML += "/[abcd]/ , apple : " + regExp2.test("apple") + "<hr/>";
//     div1.innerHTML += "/[abcd]/ , sub : " + regExp2.test("sub") + "<hr/>";
//     div1.innerHTML += "/[abcd]/ , qwert : " + regExp2.test("qwert") + "<hr/>";

//      8. /[^abcd]/ 정규 표현식을 나타내는 RegExp 객체 생성
//     regExp2 = /[^abcd]/;

//      9. "html" 문자열에 /[^abcd]/ 정규 표현식이 매치되는지 테스트하고 결과를 HTML에 추가
//     div1.innerHTML += "/[^abcd]/, html : " + regExp2.test("html") + "<hr/>";

//      10. /group$/ 정규 표현식을 나타내는 RegExp 객체 생성
//     const regExp3 = /group$/;

//      11. "group100", "100group" 문자열에 /group$/ 정규 표현식이 매치되는지 테스트하고 결과를 HTML에 추가
//     div1.innerHTML += "/group$/ , group100 : " + regExp3.text("group100") + "<hr/>";
//     div1.innerHTML += "/group$/ , 100group : " + regExp3.text("100group") + "<hr/>";

//      12. (오타 수정) /group$/ 정규 표현식을 나타내는 RegExp 객체 생성
//     const regExp4 = /group$/;

//      13. "group100", "100group" 문자열에 /group$/ 정규 표현식이 매치되는지 테스트하고 결과를 HTML에 추가
//     div1.innerHTML += "/group$/ , group100 : " + regExp4.test("group100") + "<hr/>";
//     div1.innerHTML += "/group$/ , 100group : " + regExp4.test("100group") + "<hr/>";

//  inputName 요소에 keyup 이벤트 리스너 추가
// document.getElementById("inputName").addEventListener("keyup", function(){
//      결과를 표시할 span 요소 선택
//     const span = document.getElementById("inputNameResult");

//      유효성을 검사할 정규 표현식
//     const regExp = /^[가-힣]{2,5}$/;

//      정규 표현식 테스트 후 결과에 따라 메시지 출력 및 스타일 변경
//     if (regExp.test(this.value)) {
//         span.innerText = "유효한 이름 형식입니다";
//         span.style.color = "green";
//         span.style.fontWeight = "bold";
//     } else {
//         span.innerText = "이름 형식이 유효하지 않습니다";
//         span.style.color = "red";
//         span.style.fontWeight = "bold";
//     }

//      입력이 비어있을 경우 메시지 초기화
//     if (this.value.length == 0) {
//         span.innerText = "";
//     }
// });

//  idCheck 버튼에 click 이벤트 리스너 추가
// document.getElementById("idCheck").addEventListener("click", function(){
//      mid 요소의 값 가져오기
//     const id = document.getElementById("mid").value;
    
//      아이디 유효성을 검사할 정규 표현식
//     const pattern = new RegExp("^[a-zA-Z][0-9a-zA-Z]{4,7}$");

//      정규 표현식 테스트 후 결과에 따라 알림창 출력
//     if(pattern.test(id)){
//         alert("유효한 아이디입니다");
//     } else {
//         alert("아이디는 5~8자로 입력하셔야 하고 첫글자 영문자로, 숫자와 영문자만 가능합니다");
//         document.getElementById("mid").value = "";
//     }
// });

//  nameCheck 버튼에 click 이벤트 리스너 추가
// document.getElementById("nameCheck").addEventListener("click", function(){
//     user_name 요소의 값에서 공백 제거 후 비어있는지 확인
//     if (document.getElementById('user_name').value.replace(/\s/g, "") == "") {
//          이름을 입력하지 않았을 경우 메시지 출력 및 스타일 변경
//         document.getElementById('msg').innerHTML = "이름을 입력해주세요";
//         document.getElementById('msg').style.color="red";
//         document.getElementById('user_name').value = "";
//     }
// });

//  user_name 요소에 focus 이벤트 리스너 추가
// document.getElementById("user_name").addEventListener("focus", function(){
//      포커스가 이동하면 메시지 초기화
//     document.getElementById('msg').innerHTML = "";
// });

