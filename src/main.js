let formElem = document.getElementById("form");
let btn = document.getElementById("button");
let inputTurnoverElem = document.getElementById("inputTurnover");
let inputBudgetElem = document.getElementById("inputBudget");
let upWorkFeeElem = document.getElementById("uwFee");
let payoneerSumElem = document.getElementById("payoneerSum");
let payoneerComissionElem = document.getElementById("payoneerComission");
let totalFithdrawalFundsElem = document.getElementById("totalFithdrawalFunds");
let uaTaxesElem = document.getElementById("uaTaxes");
let TotalWithuaTaxesElem = document.getElementById("TotalWithuaTaxes");
let checkBox = document.getElementById("checkBox");
let budgetValue = +inputBudgetElem.value; 
let upworkFeeValue = 0;
let payoneerSum = 0;
let payoneerComission = 0;
let totalWithdrawalSum = 0;
let uaTaxesSum = 0;
let TotalWithuaTaxes = 0;



function calculateData(){   
  let turnoverValue = inputTurnoverElem.value;
  let budgetValue = +inputBudgetElem.value;
  
  if(turnoverValue == 0 && budgetValue <=500){
    upworkFeeValue = budgetValue*0.2+budgetValue*0.2*0.2;
  }
  else if (turnoverValue <= 500 && budgetValue <=10000){
    upworkFeeValue = (500*0.2+500*0.2*0.2)+((budgetValue-500)*0.1+(budgetValue-500)*0.1*0.2);
  }
  else if (turnoverValue <= 500 && budgetValue > 10000){
    upworkFeeValue = ((500*0.2+500*0.2*0.2)+(9500*0.1+9500*0.1*0.2)+((budgetValue-10000)*0.1+(budgetValue-10000)*0.1*0.2));
  }
  else if (500<turnoverValue <= 10000 && budgetValue <= 10000) {
    upworkFeeValue = budgetValue*0.1+budgetValue*0.1*0.2;
  }
  else if (500<turnoverValue <= 10000 && budgetValue > 10000){
    upworkFeeValue = ((10000-turnoverValue)*0.1+(10000-turnoverValue)*0.1*0.2+(budgetValue-(10000-turnoverValue))*0.05+(budgetValue-(10000-turnoverValue))*0.05*0.2);
  }
  else {
    upworkFeeValue = (budgetValue*0.1+budgetValue*0.1*0.2);
  }
  payoneerSum = budgetValue-upworkFeeValue;
  payoneerComission = payoneerSum*0.02;
  totalWithdrawalSum = payoneerSum - payoneerComission;
  if (checkBox.checked == true){
    uaTaxesSum = totalWithdrawalSum*0.1;
    TotalWithuaTaxes = totalWithdrawalSum - uaTaxesSum;
  }
  else {
    uaTaxesSum = 0;
    TotalWithuaTaxes = totalWithdrawalSum;
  }
  
  upWorkFeeElem.innerHTML = upworkFeeValue.toFixed(2);
  payoneerSumElem.innerHTML = payoneerSum.toFixed(2);
  payoneerComissionElem.innerHTML = payoneerComission.toFixed(2);
  totalFithdrawalFundsElem.innerHTML = totalWithdrawalSum.toFixed(2);
  uaTaxesElem.innerHTML = uaTaxesSum.toFixed(2);
  TotalWithuaTaxesElem.innerHTML = TotalWithuaTaxes.toFixed(2);
  
  
}








formElem.addEventListener("submit", function(event){
  event.preventDefault(); 
  calculateData();  
  
  
})