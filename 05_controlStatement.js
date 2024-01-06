function result (){
    const kor = parseInt(document.getElementById("kor").value);
    const eng = parseInt(document.getElementById("eng").value);
    const math = parseInt(document.getElementById("math").value);
    let sum = kor + eng +math;
    let ave = sum/3;
    document.getElementById("sum").value = sum;
    document.getElementById("ave").value = ave.toFixed(1);

    let grade;

     if (ave>=90 && ave < 100) {
        grade = "A";
     } else if (ave >= 80) {
         grade = "B";
     } else if (ave >= 70) {
         grade = "C";
     } else if (ave >= 60) {
         grade = "D";
     } else {
         grade= "F";
     }
    }
    console.log(parseInt(ave/10));

