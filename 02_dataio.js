function btnClick2(){
    alert("외부 알림창 출력!!!");
}

function changeColor1(){
    document.querySelector("#box").style.backgroundColor = "red";
}
function changeColor2(){
    document.getElementById("box").style.backgroundColor = "yellow";
}


function fnAlert(){
    window.alert("alert 버튼 클릭됨");
}
function documentWrite(){
    document.write("자바스크립트<br/>");
    document.write("<b>안녕하세요</b><br/><h2>반가워요</h2>");
}

function getInnerText(){
    const test1 = document.getElementById("test1");
    console.log(test1.innerText);
}

function setInnerText(){
    // const test1 = document.getElementsById("test1");
    // test1.innerText="innerText로 <br/> 변경된 내용입니다";
    document.getElementById("test1").innerText="inner"
}
function getInnerHTML1() {
    const test2 = document.getElementsById("test2");
    console.log(test2.getInnerHTML);
}

function setInnerHTML1(){
    const test2 = document.getElementById("test2");
    test2.innerHTML="<strong>innerHTML</strong>로 변경된 내용<br/> 반갑습니다.";
}

function setInnerHTML1() {
    const test2 = document.getElementById("test2");
    test2.innerHTML="<strong>innerHTML</strong>로 변경괸 내용 <br/>"
}

function print() {
    const title = document.getElementById("title");
    title.innerHTML = "Hello Javascript~~!!";
    // title.style.coloer="orange";
    //  title.style.borderRadius="10px";
    //  title.style.border="1px solid #000";
    //  title.style.backgroundColor="gray";
    //  title.style.padding="10px";
    // title.style.width="400px";
    title.className="box1";

}
function fnConfirm() {
    const confirmBtn = document.getElementById("confirmBtn");

    if(confirm("버튼 배경색을 오렌지 색으로바꾸시겠습니까?")){
        confirmBtn.style.backgroundColor = "orange";

    }else {
        confirmBtn.style.backgroudColor = "green";
    }
}
function fnPrompt1(){
    const name = prompt("당신의 이름은 무엇입니까?", "홍길동");
    const age = prompt("당신의 나이는 몇살입니까?", "30");

    console.log(name);
    console.log(name);

    const divEl = document.getElementById("area2");
    divEl.innerHTML = "<b>앗, 당신이 바로" + age +"살" +name + "님이군요..!</b>";
}

function fnPrompt2() {
    const input = prompt("이름을 입력해주세요", "");
    const promptResult = document.getElementById("area3");

    if (input!=""){
        promptResult.innerText = input + "님 환영합니다";
    } else {
        promptResult.innerText = "이름을 입력해주세요";
    }
}

function fnInput () {
    const input1 = document.getElementById("userId");
    const input2 = document.getElementById
}

function fnInput (){
    const input1 = document.getElementById("userId");
    const input2 = document.getElementsById("userPwd");

    //const id = input1.Value;
    //const pwd = input2.value;

    const result = document.getElementById("result");

    if(id !="" && pwd !="") {
        result.value = id + "," + pwd;

    }else; {
        result.value = "다시 확인해 주세요";
    }
    //id="";
    input.value = "";
    input2.value ="";
}

function fnChange() {
    let temp = document.getElementById("number1").value;
    document.getElementById("number1").value = document.getElementById("number2").value;
    document.getElementById("number2").value = temp;
}