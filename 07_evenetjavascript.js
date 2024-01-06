function test1(button){
    button.style.backgroundColor="pink";
    button.style.color = "white";
}

function changeBg(color) {
    const result = document.querySelector('#result');
    result.style.backgroundColor=color;
}

let cnt = 0;

function imageChange(){
    if(cnt == 0) {
        document.getElementById("quiz").src="/htmlexample/basic/images/백과사전1.png";
        cnt =1;
    } else {
        document.getElementById("quiz").src="/htmlexample/basic/images/백과사전2.png";
        cnt = 0;
    }
}

// let btn = document.querySelector("#btn1");
// btn.onclick= changeColor;

// function changeColor() {
//     document.querySelector("p").style.color = "#f00";
// }

// //방법2 : 요소를 따로 변수로 만들지 않고 사용
// document.querySelector("#btn1").onclick = changeColor;

// function changeColor() {
//     document.querySelector("p").style.color = "#0f0";
// }

//방법3: 직접 함수를 선언
document.querySelector("#btn1").onclick = function() {
    document.querySelector("p").style.color = "#00f";
};

document.getElementById("test2-1").onclick = function(){
    alert("고전 이벤트 모델로 출력된 대화상자");
};
//이벤트 제거
document.getElementById("test2-2").onclick = function(){
    document.getElementById("test2-1").onclick = null;
    alert("test2-1 이벤트를 제거하였습니다");
};


document.getElementById("test2-3").onclick=function(e) {
    console.log(this);
    this.style.backgroundColor = "pink";
};

document.getElementById("test2-3").onclick = function(){
    this.style.color = "green";
};


//커서 이동
document.getElementById("test3").addEventListener("click",function(){
    
    console.log(this.clientWidth);
    
    this.style.width=(this.clientWidth+20) +"px";
});

document.getElementById("test3").addEventListener("click", function(){

    this.style.height = (this.clientHeight +20) + "px";
});

document.getElementById("jumin1").addEventListener("keyup", function(){
    const jumin1 = document.getElementById("jumin1").value;
    if(jumin1.length == 6) {
        document.getElementById("jumin2").focus();
    }  
});



// document.getElementById("changeBtn1").addEventListener("click", function(){

//     const div1 = document.getElementById("div1");
//     const input1 = document.getElementById("input1");

//     const bgColor = input1.value;

//     div1.style.backgroundColor = bgColor;
// });



document.getElementById("input1").addEventListener("change", function(){
    console.log("change 이벤트 발생!");
    const div1 = document.getElementById("div1");

    const bgColor = this.value;

    div1.style.backgroundColor = bgColor;
});



document.getElementById("goNaver").addEventListener("click",function(e){
    e.preventDefault();

    alert("네이버 이동이 되지 않습니다");
});
