//input-data
const userNameData = document.getElementById("name");
const userKmInputData = document.getElementById("distance");
const userAgeInputData = document.getElementById("age");
const submit = document.getElementById("submit");
const constantValue = 0.21;

//random-number-generator-ticket
const rndNumber = Math.floor(Math.random() * (10000 - 99999) ) + 99999;

//click-action
submit.addEventListener("click",  function () {

    //input-value
    const userName = userNameData.value;
    const userKm =  parseFloat(userKmInputData.value); 
    const userAge = userAgeInputData.value;

    //normal-price
    let ticketPrice = constantValue * userKm;
    console.log(ticketPrice);

    // discount-prices
    if (userAge === "under-age"){
        const discount20 = ticketPrice * 0.2;
        ticketPrice -= discount20;
    } else if (userAge === "over-age"){
        const discount40 = ticketPrice * 0.4;
        ticketPrice -= discount40;
    };

    //total-price
    const finalPrice = ticketPrice.toFixed(2);

    //output-data
    document.getElementById("ticket-result").innerHTML = `${finalPrice} euros.`;
    document.getElementById("passenger-name").innerHTML = userName;
    document.getElementById("distance").innerHTML += `${userKm} Km`;
    document.getElementById("offer-type").innerHTML = userAge;
    document.getElementById("ticket-number").innerHTML = rndNumber;

    //reset-input-value
    userNameData.value = "";
    userKmInputData.value = "";
    userAgeInputData.value = "";
});