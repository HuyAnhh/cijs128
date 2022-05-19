let A = Number (prompt("Nhập số thứ nhất"))
let B = Number (prompt("Nhập số thứ hai"))
let C = prompt("Nhập phép tính của bạn")

switch (C) {
    case "+": alert (A+B)
    break;
    case "-": alert (A-B)
    break;
    case "*": alert (A*B)
    break;
    case "/": alert (A/B)
    break;
    default: alert("Nhập sai rồi")
}