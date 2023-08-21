var btnketqua = document.getElementById("btnketqua")
btnketqua.onclick = function (){

var haikyso = document.getElementById("haikyso").value;

haikyso = Number(haikyso);

var hangchuc = Math.floor(haikyso/10);

var hangdonvi = haikyso % 10;

// var hangdonvi = haikyso % 10;

var tong = hangchuc + hangdonvi
console.log(tong);

var ketQua = "Đáp án: " + tong

var result = document.getElementById("result");

result.innerText = ketQua;

}