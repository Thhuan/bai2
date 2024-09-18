let Do_C = document.getElementById('C');
// Đây là gọi hàm
function ChuyenDoi(){
    let F ;
    let C = +Do_C.value;
    F = C * 1.8 + 32 ;
    // document.write(F);
    // xuất hàm ( function ) Vào 1 thẻ chỉ định
    document.getElementById('ketqua').innerHTML = F;
}
