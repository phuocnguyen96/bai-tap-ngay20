const elementInputExam7 = document.querySelector("#inputN2");
const elementShowResultExam7 = document.querySelector("#txtResult7")

const inSoNguyenTo = () => {
    let tapHopSoNguyenTo = [];
    let inputNumber = Number(elementInputExam7.value);

    for(let i = 2;i <= inputNumber; i++){
        let check = checkNumber(i);
        
        if(check == false){
            tapHopSoNguyenTo.push(i)
        }
    }

    elementShowResultExam7.textContent = `Tập hợp các số nguyên tố là : ${tapHopSoNguyenTo}`
}

const checkNumber = (soI) => {
    let tapHopCanBac2 = [];
    let canBac2CuaI = Math.sqrt(soI);
    let checkReturn = false;

    for(t = 2; t <= canBac2CuaI; t++){
        tapHopCanBac2.push(t)
    };

    for(n=0;n<tapHopCanBac2.length;n++){
        if(soI % tapHopCanBac2[n] === 0){
            checkReturn = true;
            break;
        }};

    return checkReturn;
}

//B1: tìm ra dãy số từ 2 đến căn bậc 2 của số cần tìm;
//B2: chia x cho dãy số đã tìm được -> nếu ko chia hết thì kết luận x là số nguyên tố
