var btnketqua = document.getElementById("btnketqua")
btnketqua.onclick = function (){

var dai = document.getElementById("dai").value;

var rong = document.getElementById("rong").value;

dai = Number(dai);
rong = Number(rong);

var dapandientich = dai * rong;
var dapanchuvi =  (dai + rong)/2 ;
console.log(dapandientich);
console.log(dapanchuvi);

var ketQuadt = "Diện tích: " + dapandientich ;
var ketQuachuvi = "Chu vi: " + dapanchuvi ;


var result = document.getElementById("result");

resultdt.innerText = ketQuadt;
resultcv.innerText = ketQuachuvi;

}