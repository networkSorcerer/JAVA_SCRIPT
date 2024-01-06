
//페이지가 로드 될 때 실행되는 함수를 등록
window.onload = function() {
    //"createBtn" 이라는 id를 가진 요소에 클릭 이벤트 리스너를 추가하고, 클릭시 createNod 함수를 실행
        document.getElementById("createBtn").addEventListener("click", createNode);
    //"subject"이라는 id를 가진 요소에 keypress 이벤트리스너를 추가
        document.getElementById("subject").addEventListener("keypress", (e) =>{
    // 만약 키가 'Enter' 키인 경우
            if (e.key === 'Enter') {
    // 이벤트의 기본동작 (Enter 키의 엔터 동작 )을 막음
                e.preventDefault();
    //createNode 함수를 실행
                createNode();
            }
        });
    };
    
    function createNode() {
        //요소 노드 추가
        let newItem = document.createElement("li");
        // 폼의 텍스트 필드 요소 접근
        let subject = document.querySelector("#subject");
        //텍스트 필드의 값을 텍스트 노드로 만들기
        let newText = document.createTextNode(subject.value);
        //텍스트 노드를 요소 노드의 자식 노드로 추가
        newItem.appendChild(newText);
        // 웹 문서에서 부모 노드 가져오기 (ul)
        let itemList = document.querySelector("#itemList");
        // 새로 만든 요소 노드를 부모 노드에 추가
        itemList.appendChild(newItem);
    
        subject.value="";
    
        //let items = document.querySelectorAll("li");
        //for(i = 0 ; i <items.length; i++) {
            //items[i].addEventListener("click", function(){
                //if(this.parentNode) {
                    //this.parentNode.removeChild(this);
                //}
            //});
        //}
    
    
    //HTML 문서에서 모든 <li></li> 요소를 선택하여 items 변수에 할당 
        let items = document.querySelectorAll("li");
    // 각 <li></li> 요소에 대해 반복
        items.forEach((target)=> {
    //현재 클릭된 <li></li>요소에 클릭 이벤트리스너를 추가 
            target.addEventListener("click", function(){
                //현재 클릭된 <li></li>요소의 부모 노드가 존재하는지 확인
                if(this.parentNode) {
                    //만약 부모노드가 존재한다면, 현재 클릭된 <li></li>요소를 부모노드로부터 제거
                    this.parentNode.removeChild(this);
                }
            });
        });
    }