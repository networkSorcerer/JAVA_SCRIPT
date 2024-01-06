window.onload = function() {
    //회사 정보를 표현하는 데이터 구조를 json으로 정의
    //하나의 json 데이터 안에는 일반 변수와 배열 데이터가 공존할 수 있다
    let company = {
        "name" : "(주)자바컴퍼니",
        "since" : 2013,
        "deparment" : ["기획팀", "영업팀", "디자인팀", "개발팀"],
        "biz" : ["소프트웨어개발", "통신판매업", "위치 정보 서비스"]
    };

    //회사 이름 출력하기
    document.getElementById("name").innerHTML = company.name;

    //설립년도 출력하기
    document.getElementById("since").innerHTML = company.since;

    //주요 사업 부서를 출력하기 위하여 배열을 반복문으로 읽는다
    let dept_li = "";
    for (let i =0; i < company.deparment.length; i++) {
        dept_li += "<li>" + company.deparment[i] + "</li>";
    }

    document.getElementById("department").innerHTML = dept_li;

    //주요 사업 분야를 출력하기 위하여 배열을 반복문으로 읽는다.
    let biz_li ="";
}