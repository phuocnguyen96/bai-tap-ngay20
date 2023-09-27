const elementShowResultExam6 = document.querySelector("#txtResult6");

const taoDiv = () => {
    for(let i = 1; i<=10; i++){
        if(i%2===0){
            let theChan = document.createElement('div');
            let text = document.createTextNode('Thẻ chẵn');
            theChan.appendChild(text);
            theChan.style.backgroundColor = 'red';
            theChan.style.color = 'blue';
            elementShowResultExam6.appendChild(theChan);
        }else{
            let theLe = document.createElement('div');
            let text1 = document.createTextNode('Thẻ lẻ');
            theLe.appendChild(text1);
            theLe.style.backgroundColor = 'blue';
            theLe.style.color = 'white';
            elementShowResultExam6.appendChild(theLe)
        }
    }
}