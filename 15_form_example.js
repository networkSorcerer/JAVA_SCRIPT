window.onload = function () {
    document.getElementById("valueChange").addEventListener("click", function(){
    let temp;
    temp = document.getElementById("number1").value;
    document.getElementById("number1").value = document.getElementById("number2").value;
    document.getElementById("number2").value = temp;

    });

    document.querySelector("#btn").addEventListener("click", function(){
    const word = document.getElementById("word");
    document.getElementById("result").append(word.value);
    document.getElementById("result").append("\n");

    word.value = "";
    word.focus();
    });

}