
// let errorElement=document.getElementById("errorMessage");
// let billElement=document.getElementById("billAmount");
// let percentageElement=document.getElementById("percentageTip");
// let tipElement=document.getElementById("tipAmount");
// let totalElement=document.getElementById("totalAmount");
// let errorMessage="Please Enter a Valid Input";

// function calculatedTip(){
    
//     let billAmount=billElement.value;
//     let percentageTip=percentageElement.value;

//     if(billAmount=== ""){
//         errorElement.textContent = errorMessage;
//     }
//     else if(percentageTip===""){
//         errorElement.textContent=errorMessage;
//     }
//     else {
//         errorElement.textContent= "";
//         let billAmountValue=parseInt(billAmount);
//         let percentageTipValue=parseInt(percentageTip);
//         let calculatedTip= (percentageTipValue / 100) * billAmountValue;
//         let calculatedTotal= billAmountValue + calculatedTip;
//         tipElement.value = calculatedTip;
//         totalElement.value=calculatedTotal;

//     }

// }
let errorElement = document.getElementById("errorMessage");
let billElement = document.getElementById("billAmount");
let percentageElement = document.getElementById("percentageTip");
let tipElement = document.getElementById("tipAmount");
let totalElement = document.getElementById("totalAmount");
let errorMessage = "Please Enter a Valid Input!";

function calculatorTip() {
    let billAmount = billElement.value;
    let percentageTip = percentageElement.value;

    if (billAmount === "") {
        errorElement.textContent = errorMessage;
    } else if (percentageTip === "") {
        errorElement.textContent = errorMessage;
    } else {
        errorElement.textContent = "";
        let billAmountValue = parseInt(billAmount);
        let percentageTipValue = parseInt(percentageTip);
        let calculatedTip = (percentageTipValue / 100) * billAmountValue;
        let calculatedTotal = billAmountValue + calculatedTip;
        tipElement.value = calculatedTip;
        totalElement.value = calculatedTotal;
    }
}