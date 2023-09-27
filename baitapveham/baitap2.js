const elementIcn = document.querySelector("#inputName") //Icn mean Input customer name
const elementInputKw = document.querySelector("#inputKW")
const elementBtnExam2 = document.querySelector("#btnElecBill")
const elementShowResult = document.querySelector("#txtElecBill")

const checkDataInput = (tenKhachHang, soKw) => {
    let returnCheck;
    if(tenKhachHang && soKw){
        returnCheck = true;
    } else {
        returnCheck = false;
    }

    return returnCheck;
}

const tinhTienDien = () => {
    let soKw = Number(elementInputKw.value);
    let tenKh = elementIcn.value;
    let checkData = checkDataInput(soKw,tenKh);
    let soTienDien;
    let level1 = 1728;
    let level2 = 1786;
    let soKwTrenLv2 = soKw - 50;
    let level3 = 2074;
    let soKwTrenLv3 = soKw - 100;
    let level4 = 2612;
    let soKwTrenLv4 = soKw - 200;
    let level5 = 2919;
    let soKwTrenLv5 = soKw - 300;
    let level6 = 3015;
    let soKwTrenLv6 = soKw - 400;
    let soTienCoBan = level1 * 50;
    let soTienKhiTieuThuTrenLv2 = level2 * 49;
    let soTienKhiTieuThuTrenLv3 = level3 * 100;
    let soTienKhiTieuThuTrenLv4 = level4 * 100;
    let soTienKhiTieuThuTrenLv5 = level5 * 100;

    if(checkData){
        if(soKw <= 50){
            soTienDien = soKw * level1;
        } else if(soKw >= 51 && soKw < 100){
            soTienDien = soTienCoBan + (soKwTrenLv2 * level2)
        } else if(soKw >= 101 && soKw < 200){
            soTienDien = soTienCoBan + soTienKhiTieuThuTrenLv2 + (soKwTrenLv3*level3);
        } else if(soKw >= 201 && soKw < 300){
            soTienDien = soTienCoBan + soTienKhiTieuThuTrenLv2 + soTienKhiTieuThuTrenLv3 + (soKwTrenLv4 * level4);
        } else if(soKw >= 301 && soKw < 400){
            soTienDien = soTienCoBan + soTienKhiTieuThuTrenLv2 + soTienKhiTieuThuTrenLv3 + soTienKhiTieuThuTrenLv4 + (soKwTrenLv5*level5);
        } else {
            soTienDien = soTienCoBan + soTienKhiTieuThuTrenLv2 + soTienKhiTieuThuTrenLv3 + soTienKhiTieuThuTrenLv4 + soTienKhiTieuThuTrenLv5 + (level6*soKwTrenLv6)
        }

        let convertCurrency = soTienDien.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
        elementShowResult.textContent = "Số tiền của KH " + tenKh + "là: " + convertCurrency;

    } else {
        alert("Vui long kiem tra lai thong tin")
    }
    
}

elementBtnExam2.addEventListener("click",tinhTienDien)
