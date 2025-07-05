function getInput(id) {
    let value = document.getElementById(id).value;
    // console.log(typeof value);
    value = Number(value)

    if (value > 0 && typeof value == 'number') {

        return value;
    }
    // console.log(value);
    // console.log(typeof value);
    alert("Invalid")
    return 0;

}

function getText(id) {
    let value = document.getElementById(id).innerText;
    // console.log(value);
    return Number(value);



}

function donationId(id, add) {
    let balance = getText("balance");
    console.log(balance);

    let donated = getText(id);
    console.log(donated);

    let addAmount = getInput(add);
    console.log(addAmount);

    let totalDonated = donated + addAmount;

    let totalBalance = balance - addAmount;
    document.getElementById("balance").innerText = totalBalance;


    document.getElementById(id).innerText = totalDonated;


}
function addHistory(inputId) {
    const now = new Date();

    // let content=document.getElementById(inputId).previousElementSibling.previousElementSibling.textContent
    console.log("hello")
    let history = document.getElementById('history');
    let historyEl = document.createElement('div');
    historyEl.setAttribute('class', 'rounded-sm')
    historyEl.classList.add('rounded-sm', 'border', 'border-gray-100', 'p-[32px]', 'mt-[32px]');
    historyEl.innerHTML = `
     <h2 class="text-[20px] font-semibold">${document.getElementById(inputId).value} Taka is Donated for " ${document.getElementById(inputId).previousElementSibling.previousElementSibling.textContent}" campaign</h2>
     <p class="font-light pt-[16px]">Date : ${now.toString()}</p>
    
    `
    history.appendChild(historyEl)
}
function donateMoney(buttonId, inputId, donatedId) {
    document.getElementById(buttonId).addEventListener('click', function () {
        donationId(donatedId, inputId);
        // addHistory(inputId);
        if (getInput(inputId) > 0) {
            addHistory(inputId)
        }
        //           console.log(document.getElementById(inputId).previousElementSibling.previousElementSibling.textContent
        // )
    })
}

function showElement(id, btnId) {
    document.getElementById(btnId).addEventListener('click', function () {
        document.getElementById('donation-btn').classList.remove('bg-[#B4F461]');
        document.getElementById('history-btn').classList.remove('bg-[#B4F461]');
        document.getElementById(btnId).classList.add('bg-[#B4F461]');
        document.getElementById('donation').classList.add('hidden');
        document.getElementById('history').classList.add('hidden');
        document.getElementById(id).classList.remove('hidden');
    })


}