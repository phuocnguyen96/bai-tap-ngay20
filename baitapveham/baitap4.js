const elementTypeOfCustomer = document.querySelector("#selCustomer");
const elementInputCustomerID = document.querySelector("#inputID");
const elementInputChanel = document.querySelector("#inputChanel");
const elementBtnExam4 = document.querySelector("#btnNet");
const elementShowResultEx4 = document.querySelector("#txtNet");
const elementInputConnect = document.querySelector("#inputConnect");

const checkDataEx4 = (idCustomer,numberChanel,typeOfCustomer) => {
    let returnCheckData;
    if(idCustomer && numberChanel && typeOfCustomer){
        returnCheckData = true;
    } else {
        returnCheckData = false;
    }
    return returnCheckData;
}

elementTypeOfCustomer.addEventListener("change", () => {
    if(elementTypeOfCustomer.value === "company"){
        elementInputConnect.style.display = "block";
    }else{
        elementInputConnect.style.display = "none";
    }
});

const tinhTienCap = () => {
    let idCustomer = elementInputCustomerID.value;
    let numberOfChanel = elementInputChanel.value;
    let typeOfCustomer = elementTypeOfCustomer.value;
    let numberOfConnect = elementInputConnect.value;
    let checkData = checkDataEx4(idCustomer,numberOfChanel,typeOfCustomer);
    let price1Chanel = 5;
    let priceDefautForConnects = 75;
    let priceForChanels = price1Chanel * numberOfChanel;
    let finalResult;

    if(checkData){
        if(typeOfCustomer === "user"){
            finalResult = priceForChanels;
        } else if(typeOfCustomer === "company"){
            if(numberOfChanel <= 10 && numberOfChanel > 0){
                finalResult =priceForChanels + priceDefautForConnects;
            } else{
                finalResult = (((numberOfConnect - 10) * 5) + priceDefautForConnects) + priceForChanels;
            }
        }
    } else{
        alert("Vui long kiem tra lai thong tin")
    }

    elementShowResultEx4.textContent = `Số tiền cáp của khách hàng có id ${idCustomer} là ${finalResult} $`
}



elementBtnExam4.addEventListener("click", tinhTienCap)

