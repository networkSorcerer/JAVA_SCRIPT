window.onload = function() {
    document.getElementById("btn1").addEventListener("click", ()=>{
        if (confirm("정말 네이버로 이동하시겠습니까?")) {
            location.href = "http://www.naver.com/";
        }
    });

    document.getElementById("btn2").addEventListener("click", ()=>{
        location.href = "10_date.html";
    });

    let value = "";
    for ( let i = 0; i < 5; i++) {
        value += Math.floor(Math.random()*10);
    }

    document.getElementById("result").innerHTML = value;
    document.getElementById("result").style.color = "blue";

    document.getElementById("btn3").addEventListener("click", ()=>{
        location.reload();
    });
};