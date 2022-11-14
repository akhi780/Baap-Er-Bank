  

  document.getElementById('btn-withdraw').addEventListener("click",function(){
    // console.log('withdrow button clicked');
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrowAmountstring = withdrawField.value;
    const newWithdrowAmount=parseFloat(newWithdrowAmountstring);
    // console.log(newWithdrowAmount);
    withdrawField.value='';
    
    if (isNaN(newWithdrowAmount)){
      alert('please provide a valid number');
      return;
    }


    const withdrawTotalElement = document.getElementById('withdraw-totel');
    const previousWithdrowTotalString = withdrawTotalElement.innerText;
    const previousWithdrowTotal = parseFloat(previousWithdrowTotalString);
    // console.log(previousWithdrowTotal);

   

    


    const balanceTotelElement = document.getElementById('balance-totel');
    const previousBalanceTotalString = balanceTotelElement.innerText;
    const previousBalanceTotal =parseFloat(previousBalanceTotalString);

    


    if(newWithdrowAmount > previousBalanceTotal){
      alert('Baap er ato teka nai');
      return;
    }

    const currentWithdrowTotal = previousWithdrowTotal + newWithdrowAmount
    withdrawTotalElement.innerText = currentWithdrowTotal

    const newBlanceTotal = previousBalanceTotal - newWithdrowAmount
    balanceTotelElement.innerText =newBlanceTotal;




    
  })