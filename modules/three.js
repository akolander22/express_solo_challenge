var mod1 = require('./one.js');
var mod2 = require('./two.js');
var newAccount;


function newRandomNumber() {
  return mod2.toUSD(mod1.randomNumber(100,1000000));
}
function accountBalance(){
  return "Account Balance: \n";
}

// newRandomNumber();
// accountBalance();

module.exports = {
  newRandomNumber: newRandomNumber,
  accountBalance: accountBalance,
}
