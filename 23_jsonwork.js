document.addEventListener("DOMContentLoaded", function () {
    const subjects = [
        {"번호" : "공지", "제목" : "클라이언트 프로그래밍" , "조회수" : 3, "등록일" : "2023-01-01"}, 
        { "번호": 1, "제목": "Javascript", "조회수": 100, "등록일": "2023-01-01" },
        { "번호": 2, "제목": "jQuery", "조회수": 85, "등록일": "2023-01-02" },
        { "번호": 3, "제목": "Ajax", "조회수": 72, "등록일": "2023-01-03" }
    ];

    const tableBody = document.querySelector("#subject-table tbody");

    subjects.forEach(function (subject) {
        const row = document.createElement("tr");
        Object.values(subject).forEach(function (value) {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });
        tableBody.appendChild(row);
    });
});
