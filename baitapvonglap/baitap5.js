const elementInputExam5 = document.querySelector("#inputN1");
const elementShowResultExam5 = document.querySelector("#txtResult5");

const tinhGT = () => {
    let inputNumber = Number(elementInputExam5.value);
    let ketQua = 1;
    for(let i = 1; i <= inputNumber;i++){
        ketQua *= i;
    }

    elementShowResultExam5.textContent = `Giai thừa của ${inputNumber} là ${ketQua}`
}