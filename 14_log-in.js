window.onload = function() {
    const form = document.querySelector('#form1');
    
    form.addEventListener('submit', (event) =>{
        event.preventDefault()
        doSubmit() 
    
//         const frm = document.form1;

//         if (document.getElementById("user_name").value.replace(/\s/g, "")=="") {
//             alert("이름을 입력해주세요");
//             frm.user_name.value = "";
//             frm.user_name.focus();
//             return false;
        });
    }
// document.getElementById("sendBtn").addEventListener("click", function(){
//     const frm = document.form1;

//     if (document.getElementById("user_name").value.replace(/\s/g, "")=="") {
//         alert("이름을 입력해주세요");
//         frm.user_name.value = "";
//         frm.user_name.focus();
//         return;   
//     }
//     if (!frm.gender[0].checked && !frm.gender[1].checked) {
//             alert("성별을 선택해 주세요");
//         return;
//     }
//     if(frm.job.selectedIndex < 1) {
//             alert("직업을 선택해 주세요");
//             return;
//     }
//     });
// };

function doSubmit() {
    const frm = document.form1;

    if (document.getElementById("user_name").value.replace(/\s/g, "")=="") {
    alert("이름을 입력해주세요");
    frm.user_name.value = "";
    frm.user_name.focus();
    return false;   
    }

    if(!frm.gender[0].checked && !frm.gender[1].checked) {
        alert("성별을 선택해 주세요");
        return false;
    }

    if(frm.job.selectedIndex < 1) {
        alert("직업을 선택해주세요");
        return false;
    }

    let chk = false;
        for (let i = 0; frm.hobby.length; i ++) {
            if (frm.hobby[i].checked) {
                chk = true;
                break;
            }
        }

        if (!chk) {
            alert("취미를 선택해 주세요");
        }

        let str = inputData(frm);

        str +="\n\n입력하신 내용이 맞습니까?\n[취소를 누르면 모든 데이터가 사라집니다]";

        if(confirm(str)) {
            return false;
        }else {
            frm.reset();
            return false;
        }
    }

function inputData(form) {
    let result = " 이름 : " + document.getElementById("user_name").value;
    let sex;
    for(let i = 0; i< form.gender.length; i ++) {
        if (form.gender[i].checked) {
            sex=form.gender[i].value;
        }
    }

    result +="\n &raquo 성별 : " + sex;
    result += "\n &racuo 직업 : " + form.job.value;

    let hby = "";
    for (let i = 0; i < form.hobby.length; i++) {
        if(form.hobby[i].checked) {
            hby += form.hobby[i].value + " ";

        }
    }
    result +="\n &racuo 취미 : " + hby;

    return result;
}