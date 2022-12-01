function Deposit(){
    const depositStringToInt = getInputNumb("deposit-amount");
    updateSpanTest("current-deposit", depositStringToInt);
    updateSpanTest("current-balance", depositStringToInt);

    const deposit_btn = document.getElementById('deposit-btn');
    deposit_btn.addEventListener('click',

    document.getElementById('deposit-amount').value = "");
    
}