function calculateChange(price, cash) {

    var returnValue = cash - price;
    const acceptedValues = ['fiftyEuros', 'twentyEuros', 'tenEuros', 'fiveEuros', 'twoEuros', 'oneEuro', 'fiftyCents', 'twentyCents', 'tenCents', 'fiveCents' ];
    const coins = [50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05];
    const change = {};
    var ammount;

    coins.forEach(el => {
        ammount = Math.floor(returnValue/el);
        if(ammount > 0) {
            change[acceptedValues[coins.indexOf(el)]] = ammount;
            returnValue = returnValue%el;
        }
    })

    return change;
}

console.log(calculateChange(152.50, 200));