const piggyBank = {
    quarters: 2,
    nickels: 10,
    dimes: 3,
    pennies: 1176
}

let dollarAmount = 0;

const coinsToCash = (object) => {
    // dollarAmount += piggyBank.pennies/100;
    // dollarAmount += piggyBank.nickels/20;
    // dollarAmount += piggyBank.dimes/10;
    // dollarAmount += piggyBank.quarters/4;

    dollarAmount += piggyBank.pennies * 1;
    dollarAmount += piggyBank.nickels * 5;
    dollarAmount += piggyBank.dimes * 10;
    dollarAmount += piggyBank.quarters * 25;
    
    dollarAmount = dollarAmount/100;

    console.log(`$${dollarAmount}`);
}

coinsToCash(piggyBank);

//alternative method number.toFixed(#);