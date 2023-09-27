const elementShowResultExam1 = document.querySelector("#txtResult")

const timSoChanLe = () => {
    let tapHopSoChan = [];
    let tapHopSoLe = [];

    for(let i = 0; i < 100; i++){
        if(i%2===0){
            tapHopSoChan.push(i);
        }else{
            tapHopSoLe.push(i);
        }
    }

    elementShowResultExam1.textContent = `
    Tập hợp các số chẵn là ${tapHopSoChan}.
    Tập hợp các số lẻ là ${tapHopSoLe}
    `
}