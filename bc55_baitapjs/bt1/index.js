var btnTong = document.getElementById("btnTong")
btnTong.onclick = function (){

var luong = document.getElementById("luong").value;

var ngay = document.getElementById("ngay").value;

luong = Number(luong);
ngay = Number(ngay);

var tong = luong * ngay;
console.log(tong);

var ketQua = "Kết quả: " + tong

var result = document.getElementById("result");

result.innerText = ketQua;
// cập nhật
}