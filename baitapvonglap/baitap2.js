const elementShowResultExam2 = document.querySelector("#txtResult2")

const demSoChia3 = () => {
    let demCacSoChiaHetCho3 = 0;

    for(let i = 0; i < 1000; i++){
        if(i%3===0){
            demCacSoChiaHetCho3 += 1
        }
    }
    elementShowResultExam2.textContent = `Các số chia hết cho 3 có tổng cộng ${demCacSoChiaHetCho3} số`

}