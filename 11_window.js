let win, time_id;
window.onload = function() {
    document.getElementById("openBtn").addEventListener("click", () => {
        let url = prompt ("원하는 URL 주소를 입력하시오");
        if (url!="") {
            win = window.open(url, "", "width=800, height=500, scrollbars = no, toolbar = no, menubar = no, location = no");
            if (win == null) {
                alert("팝업이 차단되어 있습니다 . 팝업 차단을 해제해 주세요")
            }
        }
    });

    document.getElementById("closeBtn").addEventListener("click", () =>{
        win.close();
    });

    document.getElementById("btn1").addEventListener("click", () => {
        setTimeout(function(){
            alert("setTimeout()을 사용하여 표시됩니다")
        }, 3000);
    });

    document.getElementById("btn2").addEventListener("click", ()=> {
        start_time();
    });

    document.getElementById("btn3").addEventListener("click", ()=>{
        clearTimeout(time_id);
        document.querySelector('#result').value = "";
    });

    document.getElementById("btn4").addEventListener("click", ()=>{
        color_id = setInterval(function(){
            let element = document.getElementById("target");
            element.style.color = (element.style.color == "red") ? "navy" : "red";
            element.style.backgroundColor = 
                (element.style.backgroundColor == "green") ? "yellow" : "green";
        },1000);
        document.getElementById("btn4").setAttribute("disabled","true");
        document.getElementById("btn5").removeAttribute("disabled");
    });

    document.getElementById("btn5").addEventListener("click", ()=>{
        clearInterval(color_id);
        document.getElementById("btn4").removeAttribute("disabled");
        document.getElementById("btn5").setAttribute("disabled", "disabled");
    });
};


function start_time() {
    let now = new Date();
    document.querySelector('#result').value = now.toLocaleTimeString();
    time_id = setTimeout(start_time, 1000);
}
