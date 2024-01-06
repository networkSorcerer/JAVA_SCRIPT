$(function(){
    $("td:eq(4)").css("background", "#ffff00");
    $("td").eq(2).css("background", "#ff0000");

    //eq(n) 함수는 n번째 index 요소를 반환
    // 현재 요소의 다음  요소 반환
    $("td:eq(4)").next().css("background-color",  "#00ff00");
    
    //현재 요소의 이전요소반환
    $("td").eq(4).prev().css("background", "#0000ff");

    //현재 요소의 부모요소 반환
    $("td:eq(4)").parent().css("color", "#ffffff");
    $("td:eq(4)").parent().next().css("color", "#ff0000");
    $("td").eq(4).parent().prev().css("color", "#0000ff");

    //clidren() 현재 요소의 자식 요소 반환
    $("td:eq(4)").parent().next().children().css("text-decoration", "underline");

    $("td").eq(4).parent().next().children().eq(1).css("font-weight", "bold");


// 제공된 jQuery 코드는 HTML 문서의 <td>(테이블 셀) 요소들을 조작하는데 사용됩니다. 
//각 줄마다 해당 코드가 하는 일에 대한 설명은 다음과 같습니다:

// $("td:eq(4)").css("background", "#ffff00");
// 페이지의 모든 <td> 요소 중에서 5번째(인덱스 4) <td>의 배경색을 노란색으로 설정합니다.

// $("td").eq(2).css("background", "#ff0000");
// 페이지의 모든 <td> 요소 중에서 3번째(인덱스 2) <td>의 배경색을 빨간색으로 설정합니다.

// $("td:eq(4)").next().css("background-color", "#00ff00");
// 5번째 <td> 요소의 다음에 있는 형제(<td>)의 배경색을 초록색으로 설정합니다.

// $("td").eq(4).prev().css("background", "#0000ff");
// 5번째 <td> 요소의 이전에 있는 형제(<td>)의 배경색을 파란색으로 설정합니다.

// $("td:eq(4)").parent().css("color", "#ffffff");
// 5번째 <td> 요소의 부모(<tr>)의 글자색을 흰색으로 설정합니다.

// $("td:eq(4)").parent().next().css("color", "#ff0000");
// 5번째 <td> 요소의 부모(<tr>)의 다음 형제(<tr>)의 글자색을 빨간색으로 설정합니다.

// $("td").eq(4).parent().prev().css("color", "#0000ff");
// 5번째 <td> 요소의 부모(<tr>)의 이전 형제(<tr>)의 글자색을 파란색으로 설정합니다.

// $("td:eq(4)").parent().next().children().css("text-decoration", "underline");
// 5번째 <td> 요소의 부모(<tr>)의 다음 형제(<tr>)의 자식 요소들(<td>)의 텍스트에 밑줄을 추가합니다.

// $("td").eq(4).parent().next().children().eq(1).css("font-weight", "bold");
// 5번째 <td> 요소의 부모(<tr>)의 다음 형제(<tr>)의 자식 요소들(<td>) 중에서 두 번째(인덱스 1) <td>의 글자를 굵게(bold) 설정합니다.



    //링크가 클릭된 경우
    $(".item > a").click(function(event){
        event.preventDefault();

        let image = $(this).text();
        //클릭된 링킈의 조상들 중에서 <div></div> 태그를 검색하여 css 배경이미지설정
        //$(this).parent().parent().parent().css({
            //"background-image" : "url('" + image +"')"
        //});
        //background-image:URL('/images/tree-1.jpg')
        $(this).closest("#area").css({
            "background-image" : "url('" + image + "')"
        });
    });
});