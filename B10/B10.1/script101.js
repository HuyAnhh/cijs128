let a = Number(prompt("Nhập số thứ nhất: "))
let b = Number(prompt("Nhập số thứ hai: "))

function result (a , b) {
    if (a < b) {
        return (a);
    }else {
        return (b); 
    } 
}
alert("Số nhỏ hơn là: " + result(a,b))
 

