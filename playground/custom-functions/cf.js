console.log('it works');

// If you want to pass only billAmount and tipRate.  The taxRate has to be undefined to it uses the default.
// const myTotal = calculateBill(100, undefined, 0.13);

function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;

  return total;
}

const myTotal = calculateBill(100, 0.13);

console.log(myTotal);

// Pasing a function value to another function
function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name = 'Silly Goose') {
  return `HEY ${name.toUpperCase()}`;
}

console.log(yell(doctorize('Jordan')));
