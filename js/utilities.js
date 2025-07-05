function getInput(id) {
    let value =document.getElementById(id).value;
    // console.log(typeof value);
    value= Number(value)
    
    if(value>0 && typeof value == 'number'){
       
        return value;
    }
    // console.log(value);
    // console.log(typeof value);
    alert("Invalid")
    return 0;
    
}

function getText(id) {
    let value =document.getElementById(id).innerText;
    // console.log(value);
    return Number(value);
    
    
    
}

function donationId(id,add){
    let balance=getText("balance");
    console.log(balance);
    
    let donated=getText(id);
    console.log(donated);
    
    let addAmount=getInput(add);
    console.log(addAmount);
    
    let totalDonated=donated+addAmount;
    
    let totalBalance=balance-addAmount;
    document.getElementById("balance").innerText=totalBalance;
    
    
    document.getElementById(id).innerText=totalDonated;


}

function donateMoney(buttonId,inputId,donatedId){
    document.getElementById(buttonId).addEventListener('click',function (){
          donationId(donatedId,inputId);
    })
}