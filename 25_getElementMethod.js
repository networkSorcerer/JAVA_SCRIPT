//1. 웹페이지 로딩이 완료되면 실행되는 함수 정의
window.onload = function(){
    //2."btn"이라는 ID를 가진 요소에 클릭 이벤트 리스너 추가
        document.getElementById("btn").addEventListener("click", function(){
    //3. "title"이라는 ID를 가진 요소 찾기
            let title = document.getElementById("title");
    //4. 찾은 제목의 클래스 이름을 "titleStyle"로 변경
            title.className = "titleStyle";
    //5. 찾은 제목의 내용을 "\"JavaScript"\" 문자열로 변경"으로 설정
            title.innerHTML = "\"JavaScript\" 문자열로 변경.";
        });
    //1. "cover"라는 ID를 가진 요소에 마우스 오버 이벤트 리스너를 추가
        document.getElementById("cover").addEventListener("mouseover", function(){
    //2. 마우스 오버 이벤트가 발생하면 실행되는 함수
    //3. 주석 처리된 코드 : 이미지의 소스(src)를 빈 문자열로 설정
    //this.src = "";
    //4. 현재 요소 (this)의 'src' 속성을 새 이미지 경로로 설정
    //this.src = "";
    //setAttribute는 자바 스트립트에서 요소의 속성을 설정하는 메서드이다 
    //setAtrribute 메서드를 사용하여 HTML요소의 속성값을 변경할수있다
    //여기서 this는 위에서 가져온 id "cover"을 뜻한다
            this.setAttribute("src", "/htmlexample/basic/images/2.jpg");
        });
    
        document.getElementById("cover").addEventListener("mouseout", function(){
            this.src = "/htmlexample/basic/images/1.jpg";
        });
    //1. "colorBtn"이라는 ID를 가진 버튼에 클릭 이벤트 리스너를 추가
        document.getElementById("colorBtn").addEventListener("click", function(){
        
            //let li = document.getElementsByClassName("changeColor");
            //for(let i =0; i < li.length; i++) {
                //li[i].style.color = "pink";
                //li[i].style.backgroundColor = "red";
            //}
             
    //2. "changeColor" 클래스를 가진 모든 요소를 찾아서 NodeList로 반환        
            let li = document.querySelectorAll(".changeColor");
    //3. 반복문 :NodeList에 있는 각 요소에 대해 아래의 작업을 수행
            for(let i = 0; i<li.length ; i ++) {
    //4. 현재 반복중인 요소의 텍스트 색상을 "green"으로 설정
                li[i].style.color = "green";
    //5. 현재 반복중인 요소의 배경색을 "orange"로 설정
                li[i].style.backgroundColor = "orange";
            }
        });
    // HTML 문서에서 클래스가 "check"인 모든 요소를 선택하여 check 변수에 저장합니다
        let check = document.querySelectorAll(".check");
    //반복문을 통해 각 check 요소에 대해 click 이벤트 리스너를 추가합니다 
        for (let i = 0; i < check.length; i++){
            check[i].addEventListener("click", function(){
    //클릭된 요소의 글자 색상을 회색(#ccc)으로 변경합니다
                this.style.color = "#ccc";
    //클릭된 요소의 부모 요소 (일반적으로는 해당 요소의 부모 노드)의 글자 색상을 회색(#ccc)으로 변경
                this.parentNode.style.color = "#ccc";
                this.parentNode.style.textDecoration="line-through";
            });
    
             document.getElementById("choice").addEventListener("click", function(){
                let ul = document.getElementsByTagName("ul");
                let text= "";
    
                for(i=0; i< ul[2].getElementsByTagName("li").length; i ++) {
                    text += ul[2].getElementsByTagName("li")[i].innerHTML;
                    text += "&nbsp;&nbsp;"
                }
                document.getElementById("area").innerHTML = text;
            });
    
        }
    }