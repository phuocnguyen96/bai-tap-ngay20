const elementInputCustomerName = document.querySelector("#inputName2")
const elementInputSalary = document.querySelector("#inputSalary");
const elementInputSoNgPhuThuoc = document.querySelector("#inputUser");
const elementBtnExam3 = document.querySelector("#btnTax")
const elementShowResultEx3 = document.querySelector("#txtTax")

const checkDta = (hovaten,tongThuNhap,soNgPhuThuoc) => {
    let returnCheckData;
    if(hovaten && tongThuNhap && soNgPhuThuoc >= 0){
        returnCheckData = true;
    } else {
        returnCheckData = false;
    }
    return returnCheckData;
}

const tinhThueThuNhap = () => {
    let tenKhachHang = elementInputCustomerName.value;
    let tongThuNhap = Number(elementInputSalary.value);
    let soNgPhuThuoc = Number(elementInputSoNgPhuThuoc.value);
    let soTienMienTru = soNgPhuThuoc * 4400000;
    let soTienCanDongThue = tongThuNhap - soTienMienTru;
    let soTienThue;
    let checkData = checkDta(tenKhachHang,tongThuNhap,soNgPhuThuoc);
    let level1 = 0.05
    let level2 = 0.1
    let level3 = 0.15
    let level4 = 0.2


    if(checkData){
        if(tongThuNhap <= 60e+6){
            soTienThue = soTienCanDongThue * level1;
        } else if(tongThuNhap > 60e+6 && tongThuNhap <= 216e+6){
            soTienThue = soTienCanDongThue * level2;
        } else if(tongThuNhap>216e+6 && tongThuNhap <= 384e+6){
            soTienThue = soTienCanDongThue * level3;
        } else {
            soTienThue = soTienCanDongThue * level4;
        }
    } else {
        alert("Vui long kiem tra lai thong tin")
    }

    converCurrency = soTienThue.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
    elementShowResultEx3.textContent = "Số tiền thuế KH : " + tenKhachHang + " cần nộp là: " + converCurrency;
}

elementBtnExam3.addEventListener("click",tinhThueThuNhap)