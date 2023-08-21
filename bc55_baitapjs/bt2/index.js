var btnketqua = document.getElementById("btnketqua")
btnketqua.onclick = function (){

var so1 = document.getElementById("so1").value;

var so2 = document.getElementById("so2").value;

var so3 = document.getElementById("so3").value;

var so4 = document.getElementById("so4").value;

var so5 = document.getElementById("so5").value;

so1 = Number(so1);
so2 = Number(so2);
so3 = Number(so3);
so4 = Number(so4);
so5 = Number(so5);

var dapan = (so1 + so2 + so3 + so4 + so5)/5;
console.log(dapan);

var ketQua = "Đáp án: " + dapan

var result = document.getElementById("result");

result.innerText = ketQua;

}