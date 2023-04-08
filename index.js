let customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}
module.exports = {
    customerName,
    upperCaseCustomerName
  }
  

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer() {
  const leastFavoriteCustomer = 'someone else';
  leastFavoriteCustomer = 'new favorite';
}

module.exports = {
  customerName,
  upperCaseCustomerName,
  setBestCustomer,
  overwriteBestCustomer,
  changeLeastFavoriteCustomer
};
