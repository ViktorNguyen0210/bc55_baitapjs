var btnketqua = document.getElementById("btnketqua")
btnketqua.onclick = function (){

var tienVND = 23500;

var tienUSD = document.getElementById("tienUSD").value;

tienVND = Number(tienVND);
tienUSD = Number(tienUSD);

var dapan = tienUSD * tienVND;
console.log(dapan);

var ketQua = "Đáp án: " + dapan

var result = document.getElementById("result");

result.innerText = ketQua;

}