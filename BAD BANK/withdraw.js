function Withdraw(){
    const withdrawNumb = getInputNumb("withdraw-amount");
    updateSpanTest("current-withdraw", withdrawNumb);
    updateSpanTest("current-balance", -1 * withdrawNumb);

    const withdraw_btn = document.getElementById('withdraw-btn');
    withdraw_btn.addEventListener('click',

    document.getElementById('withdraw-amount').value = "");
    
}