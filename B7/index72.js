let A = parseInt (prompt("Nhập số của bạn"))

let flag = true 

if (A < 2) {
    flag = false
} else {
    for (let i = 2; i < A ; i++) {
        if (A % i === 0) {
            flag = false;
            break;
        }
    }   
}

if (flag) {
    alert("Số của bạn là số nguyên tố")
} else {
    alert("Số của bạn không phải là số nguyên tố")
}







