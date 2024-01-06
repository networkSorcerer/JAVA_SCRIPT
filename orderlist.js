//주어진 문장ㄹ에서 숫자 이외의 모든 문자를 제거하는 함수
function uncomma(str) {
    return str.replace(/[^\d]+/g, '');
}
//입력 매개 변수로 'str'을 받습니다
//str.replace(...) : 문자열에서 특정패턴을 찾아 다른 문자열로 대체하는 
//JavaScript의 문자열 메소드입니다
//숫자가 아닌 모든 문자 ('\d' 이외의 문자)를 찾습니다
//+는 한번이상 반복되는 것을 의미합니다 'g'는 전체 문자열에서 모든 패턴을 
//찾아야 함을 나타냅니다
// ' '  찾은 팬턴들을 빈문자여로 대체합니다 따라서 숫자이외의 모든 문자가 
//제거 됩니다 

function update() {
// 총수량을 저장할 변수를 초기화 합니다    
    let totalNumber = 0;
//모든 수량을 입력받는 input 요소를 선택합니다
    let number = document.querySelectorAll("input[type='number']");
//반복문을 통해 각 수량을 정수로 변환하여 총 수량에 더합니다 
    for (let i = 0; i < number.length; i++) {
        totalNumber += parseInt(number[i].value);
    }
//HTML 문서에서 id가 "totalNumber"인 요소의 값을 계산된 총 수량으로 설정합니다    
    document.getElementById("totalNumber").value = totalNumber;
// 총 가격을 저장할 변수를 초기화 합니다
    let totalPrice =0;
// 모든 가격을 입력받는 input 요소를 선택합니다 (name 속성이 "Total"로 끝나는 요소)
    let price = document.querySelectorAll("input[name$='Total']");
// 반복문을 통해 각 가격을 정수로 변환하여 총 가격에 더합니다     
    for(let i = 0; i < price.length; i++) {
        totalPrice += parseInt(price[i].value);
    }
//HTML 문서에서 id가 "totalPrice"인 요소의 값을 계산된 총 가격으로 설정합니다.   
    document.getElementById("totalPrice").value = totalPrice;
    
}

// HTML 문서의 모든 요소가 로드되면 실행될 함수를 정의합니다
window.onload = function(){
//"btn" 이라는 아이디를 가진 요소에 클릭 이벤트 리스너를 추가합니다 
    document.getElementById("btn").addEventListener("click", update);
//HTML 문서에서 모든 수량을 입력 받는 input 요소를 선택합니다
    let input = document.querySelectorAll("input[type='number']");
// 선택된 각 input 요소에 대해 아래의 작업을 수행합니다
    input.forEach((target)=> {
//input 요소에 포커스가 해제 될 때 (blur 이벤트 ) 실행될 함수를 정의합니다
        target.addEventListener("blur", function(e){
//console 창에 이벤트 대상 (현재 input 요소)을 출력합니다
            console.log(e.target)
//현재 input 요소의 id 값을 가져옵니다
            const id = e.target.id;
//id에서 "Number"를 "Price"로 변경하여 가격을 나타내는 input 요소의 id를 만듭니다
            const price = id.replace("Number", "Price");
//id에서 "Number"를 "Total"로 변경하여 합계를 나타내는 input 요소의 id를 만듭니다
            const total = id.replace("Number", "Total");
//합계를 나타내는 input 요소의 값을 계산하여 설정합니다 
            document.getElementById(total).value = uncomma(document.getElementById(price).innerHTML)*parseInt(this.value);
            
        });
    });
};    


        //let totalNumber = 0;

       // let number = document.querySelectorAll("input[type='number']");
        //for (let i = 0; i < number.length; i++) {
            //totalNumber += parseInt(number[i].value);
        //}
        //document.getElementById("totalNumber").value = totalNumber;
        //let totalPrice =0;

        //let price = document.querySelectorAll("input[name$='Total']");
        //for(let i = 0; i < price.length; i++) {
            //totalPrice += parseInt(price[i].value);
        //}
        //document.getElementById("totalPrice").value = totalPrice;
        //});

    