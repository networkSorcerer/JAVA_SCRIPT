window.onload = function(){
    const div = document.getElementById("area");

    let mydate = new Date();

    let yy = mydate.getFullYear();
    let mm = mydate.getMonth()+1;

    let dd = mydate.getDate();

    let days = ["일" , "월" ,"화" , "수" , "목" , "금" , "토" ];

    let i = mydate.getDay();
    let day = days[i];
    
    let hh = mydate.getHours();
    let mi = mydate.getMinutes();
    let ss = mydate.getSeconds();

    let result = "오늘은" + yy + "년" + mm + "월" + dd + "일" + day +"요일입니다</br>";
    result += "현재 시간은" + hh + "시" + mi + "분" + ss + "초입니다"
    div.innerHTML = "<h1>현재 날짜와 시간 출력</h1>";
    div.innerHTML +="<h3>"+ result + "</h3>";

    div.innerHTML += "<h1>toXXXString() 메서드 예제</h1>";

    div.innerHTML += "<h3>" + mydate.toLocaleDateString()+ "</h3>";

    div.innerHTML += "<h3>" + mydate.toLocaleTimeString() + "</h3>";

    div.innerHTML += "<h3>" + mydate.toLocaleString() + "</h3>";

    document.querySelector("#btn").addEventListener("click", () => {
        startTime();
    });
};

function startTime() {
    let now = new Date();
    let result = now.toLocaleString();
    document.getElementById("timeArea").innerHTML = result;
    window.setTimeout(startTime, 1000);
}