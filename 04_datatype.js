var str = "JS코드를 함수 내부가 아닌";
    str += "Js파일 또는 script 태그 밑에 바로 작성하면";
    str += "HTML 랜더링 시 바로 수행 된다";
    console.log(str)

    var num1 =10;
    num2 = 20;

    var num1 = "자바스크립트";

    console.log("num1 :" + num1);
    console.log("num2 : " + num2 );

    function test() {
        var num3 =3;
        num4 =4;

        if(true) {
            var num5 =5;
            num6 = 6;
        }

        console.log("num5 : " + num5);
    }
    test();

    //console.log("num4 : " + num4);

    console.log("num6 : " + num6);

function typeTest(){
    const typeTest = document.getElementById("typeBox");
    let temp;
    typeBox.innerHTML = "temp : " + temp;

    const name = "홍길동";

    typeBox.innerHTML += "<br/>name : " +gender + "/" + typeof name;

    const gender = 'M';
    typeBox.innerHTML += "<br/>gender : " + gender + "/" + typeof gender;

    const age = 20;
    const height = 178.3;

    typeBox.innerHTML += "<br/>age : " + age + "/" + typeof age;
    typeBox.innerHTML += "<br/>age : " + age + "/" + typeof height;

    const isTrue = true;
    typeBox.innerHTML += "<br/>isTrue : " + isTrue + "/" + typeof isTrue;

    const array = [10, 30, 70, 50];
    typeBox.innerHTML += "<br/>array : " + array + "/" +typeof array;

    for(let i =0; i< array.length; i++){
        typeBox.innerHTML += "<br/>array[" + i+"] :" +array[i];

        const user = {
            "id" : "javauser",
            "pwd" : "java1234",
            "name" : "홍길동"
        };

        typeBox.innerHTML += "<br/>user : " + user + "/" + typeof user;

        typeBox.innerHTML += "<br>user.id : " + user.id;
        typeBox.innerHTML += "<br>user.pwd : " + user.pwd;
        typeBox.innerHTML += "<br>user.name : " + user.name;

        for(let key in user) {
            typeBox.innerHTML += "<br/>user[" +key +"] :" + user[key];
        }

        console.log(user);

        const sumFn = function(n1,n2){
            return n1 + n2;
        }

        typeBox,innereHTML += "<br/>sumFn : " + sumFn + "/" + typeof sumFn;

        typeBox.innerHTML += "<br/>sumFn(10,20) : " + sumFn(10, 20);

        typeBox.innerHTML += "<br/>tempFn(30, sumFn) : " + tempFn(30, sumFn);


    }
    function tempFn(n3, fn){//fn = funtion(n1,n2){ return n1 + n2;}
        return n3 + fn(10,20);
    }
}