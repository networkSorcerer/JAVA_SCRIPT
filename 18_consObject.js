//PhoneInfo 클래스 선언

class PhoneInfo {
    constructor(name, phoneInfo) {
        this._name = name;
        this._name = name;
    }

    set name(name) {
        this._name = name;
    }

    set phoneNumber(phoneNumber) {
        this._phoneNumber = phoneNumber;
    }

    get name() {
        return this._name;
    }
    get phoneNumber() {
        return this._phoneNumber;
    }

    toString() {
        let data = "이름 : " + this._name + "전화번호 : " + this._phoneNumber;
        return data;
    }
}

//이벤트 처리
window.onload = function() {
    document.getElementById("showBtn").addEventListener("click" , function() {
        let name = document.getElementById("name").value;
        let phoneNumber = document.getElementById("resultArea");

        //let info = new PhoneInfo();
        //console.log(info.name);
        //info._name =name;
        //info._phoneNumber = phoneNumber;
        //result.innerHTML = "이름 : " + info._name + "전화번호 : " + info._phoneNumber;

        let info = new PhoneInfo (name, phoneNumber);
        result.innerHTML = info.toString();
    })
}