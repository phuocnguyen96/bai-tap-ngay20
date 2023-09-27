const elementBtnExam1 = document.querySelector("#btnResult")
const elementInputScore = document.querySelector("#inputScore1")
const elementUserLocation = document.querySelector("#selLocation")
const elementKindOfUser = document.querySelector("#selUser")
const elementInputDiemMonThu1 = document.querySelector("#inputScore2")
const elementInputDiemMonThu2 = document.querySelector("#inputScore3")
const elementInputDiemMonThu3 = document.querySelector("#inputScore4")
const elementExam1Result = document.querySelector("#txtResult")

const kiemTraDuLieu = (diemChuan,diemMonThu1,diemMonThu2,diemMonThu3) => {
    var returnKetQua;

    if(diemChuan && diemMonThu1 && diemMonThu2 && diemMonThu3){
        returnKetQua = true;
    } else {
        returnKetQua = false;
    }

    return returnKetQua;
}

const quanLyTuyenSinh = () => {
    let diemMonThu1 = Number(elementInputDiemMonThu1.value);
    let diemMonThu2 = Number(elementInputDiemMonThu2.value);
    let diemMonThu3 = Number(elementInputDiemMonThu3.value);
    let diemChuan = Number(elementInputScore.value);
    let khuVucCuaHs = elementUserLocation.value;
    let doiTuongHs = elementKindOfUser.value;
    let checkDuLieu = kiemTraDuLieu(diemMonThu1,diemMonThu2,diemMonThu3,diemChuan);
    let diemCongTheoVung = checkDiemCongTheoKhuVuc(khuVucCuaHs)
    let diemCongTheoDoiTuong = checkDiemCongTheoDoiTuong(doiTuongHs)
    let finalScore = (diemMonThu1 + diemMonThu2 + diemMonThu3 + diemCongTheoVung + diemCongTheoDoiTuong)

    if(checkDuLieu){
        if(diemMonThu1===0||diemMonThu2===0||diemMonThu3===0||finalScore < diemChuan){
            elementExam1Result.textContent = "Học sinh này đã bị rớt"
        } else {
            elementExam1Result.textContent = "Chúc mừng bạn đã đậu đại học"
        }
    } else {
        alert("Vui long kiem tra lai thong tin")
    }

}

const checkDiemCongTheoKhuVuc = (khuvuc) => {
    let checkDiemCongTheoVung;    

    if (khuvuc == 2){
        checkDiemCongTheoVung = 2;
    } else if(khuvuc == 1){
        checkDiemCongTheoVung = 1;
    } else if(khuvuc == 0.5){
        checkDiemCongTheoVung = 0.5;
    } else{
        checkDiemCongTheoVung = 0;
    }

    return checkDiemCongTheoVung;
}

const checkDiemCongTheoDoiTuong = (doiTuong) => {
    let checkDiemCongTheoDoiTuong;    

    if (doiTuong == 2.5){
        checkDiemCongTheoDoiTuong = 2.5;
    } else if(doiTuong == 1.5){
        checkDiemCongTheoDoiTuong = 1.5;
    } else if(doiTuong == 1){
        checkDiemCongTheoDoiTuong = 1;
    } else{
        checkDiemCongTheoDoiTuong = 0;
    }    
    return checkDiemCongTheoDoiTuong;
}

elementBtnExam1.addEventListener("click", quanLyTuyenSinh)