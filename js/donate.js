showElement('donation', 'donation-btn')
showElement('history', 'history-btn')

donateMoney("card1-btn","card1-ammount","card1-balance");
donateMoney("card2-btn","card2-ammount","card2-balance");
donateMoney("card3-btn","card3-ammount","card3-balance");
document.getElementById('closeModal').addEventListener('click',function (){
    document.getElementById('dial').close();
})
