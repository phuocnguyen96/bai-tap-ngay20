const elementInputNumberX = document.querySelector("#inputX");
const elementInputNumberN = document.querySelector("#inputN");
const elementShowResultExam4 = document.querySelector("#txtResult4");

const tinhTong = () => {
    let sum = 0;
    let numberX = Number(elementInputNumberX.value);
    let numberN = Number(elementInputNumberN.value);

    for (let i = 1; i <= numberN; i++){
        sum += Math.pow(numberX, i)
    }
    elementShowResultExam4.textContent = `Tổng là ${sum}`
}
