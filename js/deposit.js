// step 1:add event listener to the deposit  button

document.getElementById('btn-deposit').addEventListener('click',function(){
    // console.log('diposit button clicked');
    // step 2:get the deposit amount input filde
    const depositField = document.getElementById('deposit-field');
    const newdepositAmountstring = depositField.value;
    const newdepositAmount=parseFloat(newdepositAmountstring);

    // console.log(typeof newdepositAmount); 
    //  step-3:gat the current deposit  total
    const depositTotalElement = document.getElementById('deposit-totel');
    const previousdipositTotelstring = depositTotalElement.innerText;
    const previousdipositTotel=parseFloat(previousdipositTotelstring);
    // console.log(typeof previousdipositTotel);
// step 4:add numbeer  to set totel deposit
    const currentDpositTotal = previousdipositTotel + newdepositAmount
    depositTotalElement.innerText = currentDpositTotal;

// step-5:get ballance current  totel
const balanceTotelElement = document.getElementById('balance-totel');
const previousBalanceTotalString = balanceTotelElement.innerText;
const previousBalanceTotal =parseFloat(previousBalanceTotalString);

// stap-6:calculate current totel balence
const currentBlanceTotal = previousBalanceTotal + newdepositAmount
balanceTotelElement.innerText =currentBlanceTotal;








//  step 7: clear the deposit file
    depositField.value='';
})