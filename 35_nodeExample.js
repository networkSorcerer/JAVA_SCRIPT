// window.onload = function() {
//     document.getElementById("creareBtn").addEventListener("click", function(){
//         let contents =document.querySelector('#contents');
//         contents.innerHTML = "";

//         let rowCount = parseInt(document.querySelector("#rowCount").value);
//         let columnCount = parseIntt(document.querySelector('#columnCount').value);

//         let newTable = document.createElement("table");
//         for(let i =0; i < rowCount; i++) {
//             let newRow = document.createElement("tr");
//             for(let j = 0; j < columnCount; j++) {
//                 let newCell = document.createElement("td");
//                 let cellText = document.createTextNode(i + ", " +j);

//                 newCell.appendChild(cellText);
//                 newRow.appendChild(newCell);
//             }

//             newTable.appendChild(newRow);
//         }

//         contents.appendChild(newTable);
//     })
// };

// $(function(){
//     $("#createBtn").on("click", function(){
//         $("#contents").html("");

//         let rowCount = parseInt($("#rowCount").val());
//         let columnCount = parseInt($("#columnCount").val());
//         console.log(rowCount + " / " + columnCount);

//         let newTable = $("<table>");
//         for(let i=0; i<rowCount; i++) {
//             let newRow = $("<tr>");
//             for(let j = 0; j < columnCount; j++) {
//                 let newCell = $("<td>").html(i+"," + j);
//                 newRow.append(newCell);
//             }
//             newTable.append(newRow);
//         }

//         $("#contents").append(newTable);
//     })
// })

$(function(){
    $("#createBtn").on("click", function(){
        $("#contents").html("");

        let rowCount = parseInt($("#rowCount").val());
        let columnCount = parseInt($("#columnCount").val());
        console.log(rowCount + " / " + columnCount);

        let newTable = $("<table>");
        for(let i = 0; i < rowCount; i++) {
            let newRow = $("<tr>");
            for(let j = 0; j < columnCount; j++) {
                let newCell = $("<td>").html(i + "," + j);
                newRow.append(newCell);
            }
            newTable.append(newRow);
        }

        $("#contents").append(newTable);
    });
});
